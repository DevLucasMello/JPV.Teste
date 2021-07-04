import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaRoutingModule } from './galeria.route';
import { GaleriaComponent } from './galeria.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GaleriaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GaleriaRoutingModule    
  ]
})
export class GaleriaModule { }
