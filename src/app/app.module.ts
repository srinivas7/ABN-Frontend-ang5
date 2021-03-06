import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ABNRouteConfiguration } from './app.route.config';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { HeaderComponent } from './header/header.component';
import { AlbumsComponent } from './albums/albums.component';
import { SingleAlbumComponent } from './single-album/single-album.component';
import { CommonService } from './services/service';
import { SavComponent } from './sav/sav.component';
import { FileUploadComponent } from './file-upload/file-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    AlbumsComponent,
    SingleAlbumComponent,
    SavComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    ABNRouteConfiguration,
    HttpModule
  ],
  providers: [
    LoginService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
