import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaRoutingModule } from './galeria.route';
import { GaleriaComponent } from './galeria.component';
import { FormsModule } from '@angular/forms';
import { GaleriaService } from './services/galeria.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { GaleriaFotosComponent } from './galeria-fotos/galeria-fotos.component';


@NgModule({
  declarations: [
    GaleriaComponent,
    GaleriaFotosComponent
  ],
  imports: [
    CommonModule,    
    FormsModule,
    HttpClientModule,
    GaleriaRoutingModule    
  ],  
  providers: [    
    GaleriaService
  ]
})
export class GaleriaModule { }
