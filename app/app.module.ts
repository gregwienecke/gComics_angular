import { NgModule }      		    from '@angular/core';
import { BrowserModule } 		    from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  		    from './app.component';
import { HeaderComponent }		  from './header.component';
import { NavigationComponent }	from './navigation.component';
import { GalleryComponent }		  from './gallery.component';
import { ContactComponent }     from './contact.component';
import { SignInComponent }      from './signin.component';
import { CartComponent }        from './cart.component';
import { ShopComponent }        from './shop.component';

@NgModule({
  imports: [ 
  	BrowserModule, 
  	RouterModule.forRoot([
  		{
        path: '',
        redirectTo: 'gallery',
        pathMatch: 'full'
      },
      {
  			path: 'gallery',
  			component: GalleryComponent
  		},
      {
       path: 'contact',
       component: ContactComponent
      },
      {
        path: 'signIn',
        component: SignInComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
      path: 'shop',
      component: ShopComponent
      }
  	])
  ],
  declarations: [ 
  	AppComponent,
  	HeaderComponent,
  	NavigationComponent,
  	GalleryComponent,
    ContactComponent,
    SignInComponent,
    CartComponent,
    ShopComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
