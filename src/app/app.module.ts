import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogMenuComponent } from './components/blog-menu/blog-menu.component';
import { BlogTituloComponent } from './components/blog-titulo/blog-titulo.component';
import { BlogSubtituloComponent } from './components/blog-subtitulo/blog-subtitulo.component';
import { BlogDestaqueComponent } from './components/blog-destaque/blog-destaque.component';
import { BlogCardsComponent } from './components/blog-cards/blog-cards.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogMenuComponent,
    BlogTituloComponent,
    BlogSubtituloComponent,
    BlogDestaqueComponent,
    BlogCardsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
