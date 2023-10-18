import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  constructor(private translateService:TranslateService){}

  translate(event:any){
    this.translateService.use(event.target.value)
  }

  count=0;
  number=0;
  check=false;
  book=false;
  number_1=0;
  url = 'https://img.icons8.com/ios/100/000000/contract-job.png';


  onSelect(event:any) {
    let fileType = event.target.files[0].type;
    if (fileType.match(/image\/*/)) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    } else {
      window.alert('Please select correct image format');
    }
  }

  counter(type:string){
    type==="add"?this.count++:this.count--
  }

  counterMonth(type:string){
  
  if(this.book==false)
  {type==="add"?this.number++:this.number--;}
  }

  counterAppointment(type:string){
  
    if(this.book==false)
    {type==="add"?this.number_1++:this.number_1--;}
    }

  checkTime(event:any){
    
    if(event.value=="2")
    {
      this.check=false
    }
    else{
      this.check=true
    }
  }


  checkbook(event:any){
    
    if(event.value=="2")
    {
      this.book=false
    }
    else{
      this.book=true
    }
  }


  tragerfile(){
    
    (<HTMLInputElement>document.querySelector("#img") ).click();
  }
  
}
