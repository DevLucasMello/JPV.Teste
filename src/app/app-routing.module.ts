import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { ContatoComponent } from './navegacao/pages/contato/contato.component';
import { SobreComponent } from './navegacao/pages/sobre/sobre.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path: 'sobre', component: SobreComponent},
  {path: 'contato', component: ContatoComponent},
    
  { path: 'galeria', loadChildren: () => import('./galeria/galeria.module').then(m => m.GaleriaModule) },

  { path: 'nao-encontrado', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
