import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { BodyComponent } from './components/body/body.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import { AddResourcesComponent } from './components/add-resources/add-resources.component';
import { TranslateLoader,TranslateModule } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import{HttpClient,HttpClientModule} from'@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



export function httpTranslateLoaderFactor(http:HttpClient){
  return new TranslateHttpLoader(http,"./assets/i18n/",'.json');
}



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    AddResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatInputModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:httpTranslateLoaderFactor,
        deps:[HttpClient]
      }
})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
