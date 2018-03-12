import { NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';


const ABNRouteConfig: Routes = [
                                 { path: 'login', component: LoginComponent},
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
