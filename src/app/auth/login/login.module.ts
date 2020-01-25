import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLoginComponent } from './login.component';
import {BasicLoginRoutingModule} from './login-routing.module';
import {SharedModule} from '../../shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from './login.service';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    BasicLoginRoutingModule,
    SharedModule
  ],
  declarations: [BasicLoginComponent],
  providers: [LoginService]
})
export class BasicLoginModule { }
