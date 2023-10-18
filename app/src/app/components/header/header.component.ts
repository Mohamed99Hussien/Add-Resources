import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public translateService:TranslateService){}
  

  translate(event:any){
    this.translateService.use(event.target.value);
    document.documentElement.dir = event.target.value == "ar" ? "rtl" : "ltr";
  }
}
