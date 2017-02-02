import { NgModule }      		from '@angular/core';
import { BrowserModule } 		from '@angular/platform-browser';

import { AppComponent }  		from './app.component';
import { HeaderComponent }		from './header.component';
import { NavigationComponent }	from './navigation.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
  	AppComponent,
  	HeaderComponent,
  	NavigationComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
