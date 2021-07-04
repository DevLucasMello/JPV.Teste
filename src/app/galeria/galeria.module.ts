import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaRoutingModule } from './galeria.route';
import { GaleriaComponent } from './galeria.component';

@NgModule({
  declarations: [
    GaleriaComponent
  ],
  imports: [
    CommonModule,    
    GaleriaRoutingModule
  ],  
})
export class GaleriaModule { }
