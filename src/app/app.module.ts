import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ShortenContentPipe } from './shorten-content.pipe';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    MenuComponent,
    HomeComponent,
    ArticleDetailComponent,
    ShortenContentPipe,
    CategoryListComponent,
    CategoryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
