import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavigationService } from '@coben/common/lib/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test123';

  constructor(private translate: TranslateService, private navigationService: NavigationService) {
    this.translate.setDefaultLang('nl');
    this.navigationService.init().subscribe(navigation =>{
      console.log('navigation', navigation);
    });
  }
}
