import { NgModule }      		from '@angular/core';
import { BrowserModule } 		from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  		from './app.component';
import { HeaderComponent }		from './header.component';
import { NavigationComponent }	from './navigation.component';
import { GalleryComponent }		from './gallery.component';

@NgModule({
  imports: [ 
  	BrowserModule, 
  	RouterModule.forRoot([
  		{
  			path: 'gallery',
  			component: GalleryComponent
  		}
  	])
  ],
  declarations: [ 
  	AppComponent,
  	HeaderComponent,
  	NavigationComponent,
  	GalleryComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
