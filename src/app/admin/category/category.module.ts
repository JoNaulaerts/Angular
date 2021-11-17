import {NgModule} from '@angular/core';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryFormComponent} from './category-form/category-form.component';
import {SharedModule} from '../../shared/shared.module';
import {CategoryService} from './category.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from 'src/app/security/security.interceptor';


@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryFormComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CategoryListComponent,
    CategoryFormComponent
  ],
  providers: [
    CategoryService, //or StatusService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ]
})
export class CategoryModule {
}
