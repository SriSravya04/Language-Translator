import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { languages } from '../Models/languages'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-languagetrans',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
 
  templateUrl: './languagetrans.component.html',
  styleUrl: './languagetrans.component.css'
})
export class LanguagetransComponent {
  fromText : any;
  toText : any
  lang = languages.sort((a,b) => a.name.localeCompare(b.name));    
  fromLang : any = 'auto';
  toLang : any ='hi';
  constructor(private http:HttpClient){}

  translate(){    
    this.fromText
    this.toText
    let text = this.fromText.trim();

    let apiUrl = "https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl="+ this.fromLang + "&tl="+ this.toLang +"&q=" + encodeURI(text);

    this.http.get(apiUrl).subscribe((res: any)=>
    {
      console.log(res[0]);
      if(this.fromLang=='auto')
        {
          this.toText=res[0][0];
        }
      else{
        this.toText=res[0];
      }

    })


  }

}
