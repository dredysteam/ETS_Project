import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

// container
import { AppComponent } from './app.component';

// components
import { HeaderComponent } from './components/header/header.component';

//feature modules
import { AuthModule } from 'src/auth/auth.module';

//routes
export const ROUTES: Routes = [];

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), AuthModule],
  exports: [HeaderComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
