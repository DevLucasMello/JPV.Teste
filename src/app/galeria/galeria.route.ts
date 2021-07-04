import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { GaleriaComponent } from './galeria.component';
import { GaleriaFotosComponent } from './galeria-fotos/galeria-fotos.component';

const galeriaRouterConfig: Routes = [
  {
    path: '', component: GaleriaComponent,
    children: [
      { path: '', component: GaleriaFotosComponent }      
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(galeriaRouterConfig)
  ],
  exports: [RouterModule]
})
export class GaleriaRoutingModule { }
