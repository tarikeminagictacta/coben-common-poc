

// @ts-ignore
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CobenContainerComponent } from './navbar/coben-container.component';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';

// @ts-ignore
@NgModule({
  declarations: [CobenContainerComponent],
  imports: [
    NgbModule,
    SidebarModule.forRoot()
  ],
  exports: [CobenContainerComponent, NgbModule]
})
export class CobenCommonPocModule { }
