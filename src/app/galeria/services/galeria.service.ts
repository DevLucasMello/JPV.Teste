import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable()

export class GaleriaService {

    apiUrlListar = environment.baseAPIUrl + '/movie/popular?';
    apiUrlBuscar = environment.baseAPIUrl + '/search/movie?';
    api_key = "api_key=b6b5d3e16d434bbb9db8d0b69b8b35c5";

    constructor(private http: HttpClient) { }

    public getFilmes(page: number = 1): Observable<HttpResponse<any[]>> {
        let params = new HttpParams();
        params = params.append('page', page.toString());                
        const httpOptions = { params };
        return this.http.get<any[]>(`${this.apiUrlListar}${this.api_key}`,
        {observe: 'response',...httpOptions} );
    }

    public buscar(search: string = ''): Observable<HttpResponse<any[]>> {
        let params = new HttpParams();
        params = params.append('desc', search);             
        const httpOptions = { params };

        return this.http.get<any[]>(
            `${this.apiUrlBuscar}${this.api_key}&query=${search}`,
            {observe: 'response', ...httpOptions});
    }
}