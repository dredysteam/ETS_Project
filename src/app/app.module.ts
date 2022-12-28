import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

// container
import { AppComponent } from './app.component';

// components
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';

//feature modules
import { AuthModule } from 'src/auth/auth.module';
import { TransportModule } from 'src/transport/transport.module';
//routes
export const ROUTES: Routes = [];

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule,
    TransportModule,
  ],
  exports: [HeaderComponent, NavComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
