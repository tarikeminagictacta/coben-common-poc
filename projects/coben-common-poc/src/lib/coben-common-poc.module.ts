

// @ts-ignore
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CobenContainerComponent } from './navbar/coben-container.component';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import { TranslateModule } from '@ngx-translate/core';

// @ts-ignore
@NgModule({
  declarations: [CobenContainerComponent],
  imports: [
    NgbModule,
    SidebarModule.forRoot(),
    TranslateModule
  ],
  exports: [CobenContainerComponent, NgbModule],
  providers:[]
})
export class CobenCommonPocModule { }
