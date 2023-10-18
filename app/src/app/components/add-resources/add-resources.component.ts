import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validator,FormArray, Validators} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-resources',
  templateUrl: './add-resources.component.html',
  styleUrls: ['./add-resources.component.scss']
})
export class AddResourcesComponent implements OnInit {
days:string []=["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
days_ar:string []=["السبت","الاحد","الاثنين","الثلاثاء","الاربعاء","الخميس","الجمعة"];


title ='ReactiveForms';
  reactiveForm!: FormGroup;


constructor(public translateService:TranslateService){}
  ngOnInit(): void {
   this.reactiveForm=new FormGroup({
    addResources: new FormArray([
      new FormControl(null,Validators.required),
      new FormControl(null,Validators.required),
      new FormControl(null,Validators.required)
    ])
   });
  }
 

translate(event:any){
  this.translateService.use(event.target.value)
}


addResources(){
  (<FormArray>this.reactiveForm?.get('addResources')).push(new FormControl(null))
}

}
