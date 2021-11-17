import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StatusListComponent} from './status/status-list/status-list.component';
import {CategoryListComponent} from './category/category-list/category-list.component';
import {StatusFormComponent} from './status/status-form/status-form.component';
import {CategoryFormComponent} from './category/category-form/category-form.component';

const routes: Routes = [
  {path: 'category', component: CategoryListComponent},
  {path: 'category/form', component: CategoryFormComponent},
  {path: 'status', component: StatusListComponent},
  {path: 'status/form', component: StatusFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
