import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GaleriaService } from '../services/galeria.service';

@Component({
  selector: 'app-galeria-fotos',
  templateUrl: './galeria-fotos.component.html',
  styleUrls: ['./galeria-fotos.component.css']
})
export class GaleriaFotosComponent implements OnInit {

  searchFilter = new Subject<string>();
  public nomeFilme: string;
  public erro: any;
  public filmes: any;
  public fotos: string[] = [];
  public page: number = 0;

  constructor(private galeriaService: GaleriaService) {
    this.searchFilter.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      )
      .subscribe(search => {
        if(search == ''){
          this.listarFilmes(1);          
        }
        else{
          this.galeriaService.buscar(search)
          .subscribe((response: HttpResponse<any[]>) => {
            this.preencherImagens(response);
          }), (error: any) => {
            this.erro = error;
            console.log('Erro ', this.erro);
          }          
        }
      });
   }

  ngOnInit() {
    this.listarFilmes(1);
  }

  public listarFilmes(page: number) {
    if(this.verificaPagina(page)){
      this.galeriaService.getFilmes(page).subscribe((response: HttpResponse<any[]>) => {
        this.preencherImagens(response); 
      }, (error: any) => {
        this.erro = error;
        console.log('Erro ', this.erro);
      });       
    }         
  }

  public verificaPagina(page: number): boolean{
    if(page < 1){
        this.page = 1;
        return false;
    }
    else{
        if(page > 500){
            this.page = 500;
            return false;
        }
        else{
            this.page = page;
            return true;
        }
    } 
  }

  private preencherImagens(response: HttpResponse<any[]>){
    if(response){
      this.fotos = [];
      this.filmes = response.body["results"];
      for(let f of this.filmes){
        let imagem = "";
        if(f.backdrop_path == null){
          imagem = "https://higipratic.com.br/site/wp-content/uploads/2017/12/indisponivel.jpg"
        }
        else{
          imagem = "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + f.backdrop_path;
        }
        this.fotos.push(imagem);
      }                                         
    }   
  }

}
