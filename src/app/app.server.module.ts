import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';

import {AppModule} from './app.module';
import {AppComponent} from './app.component';

import { REQUEST } from './request';


export function getRequest() {
  return {cookie: document.cookie};
}

@NgModule({
  imports: [
    
    AppModule,
    ServerModule, 
    ModuleMapLoaderModule // <-- *Importante
  ],
 
  bootstrap: [AppComponent],

  providers: [
    {
      provide: REQUEST,
      useFactory: (getRequest)
    }
]

})
export class AppServerModule {}

