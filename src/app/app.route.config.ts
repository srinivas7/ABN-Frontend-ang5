import { NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlbumsComponent } from './albums/albums.component';
import { SingleAlbumComponent } from './single-album/single-album.component';
import { SavComponent } from './sav/sav.component';

const ABNRouteConfig: Routes = [
                                 { path: 'login', component: LoginComponent},
                                 { path: 'albums', component: AlbumsComponent},
                                 { path: 'sav', component: SavComponent},
                                //  { path : 'dmcs990', component: Dmcs990MComponent,
                                //  children: [
                                //     { path: 'fileTypeDropDown', component: FileTypeDropdownComponent },
                                    
                                //   ]
                                //  },
                                 { path : '**', redirectTo: 'login'}
];

@NgModule({
 imports: [ RouterModule.forRoot(ABNRouteConfig)],
 exports: [ RouterModule ]
})
export class ABNRouteConfiguration { }
