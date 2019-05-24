import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    [BrowserAnimationsModule],
    [MatButtonModule, MatCheckboxModule],
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
