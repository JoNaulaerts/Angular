import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import {CategoryModule} from './category/category.module';
import {StatusModule} from './status/status.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    CategoryModule,
    StatusModule,
    AdminRoutingModule
  ],
  exports: [
    CategoryModule,
    StatusModule
  ]
})
export class AdminModule {
}
