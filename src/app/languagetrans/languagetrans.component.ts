import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-languagetrans',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
 
  templateUrl: './languagetrans.component.html',
  styleUrl: './languagetrans.component.css'
})
export class LanguagetransComponent {
  fromText : any;
  toText : any

  constructor(private http:HttpClient){}

  translate(){
    this.fromText
    this.toText
    let text = this.fromText.trim();

    let apiUrl = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="+ "en" + "&tl=" + "hi" +"&dt=t&q=" + encodeURI(text);

    this.http.get(apiUrl).subscribe((res: any)=>
    {
      console.log(res);
      
      this.toText=res;
    })





  }





}
