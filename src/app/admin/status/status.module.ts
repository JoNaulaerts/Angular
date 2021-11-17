import {StatusListComponent} from './status-list/status-list.component';
import {StatusFormComponent} from './status-form/status-form.component';
import {SharedModule} from '../../shared/shared.module';
import {StatusService} from './status.service';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    StatusListComponent,
    StatusFormComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    StatusListComponent,
    StatusFormComponent
  ],
  providers: [
    StatusService
  ]
})
export class StatusModule {
}
