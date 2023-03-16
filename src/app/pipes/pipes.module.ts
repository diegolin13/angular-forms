import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordPipe } from './password.pipe';
import { GenderPipe } from './gender.pipe';



@NgModule({
  declarations: [
    PasswordPipe,
    GenderPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PasswordPipe,
    GenderPipe,
  ]
})
export class PipesModule { }
