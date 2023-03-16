import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { DataReactiveComponent } from './pages/data-reactive/data-reactive.component';

const routes: Routes = [
  {path: '', component: ReactiveComponent},
  {path: 'template', component: TemplateComponent},
  {path: 'reactive-data', component: DataReactiveComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
