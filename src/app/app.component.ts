import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pwg';

  password:string =''
  passLength!:number;

  includeLetters=false;
  includeNumbers=false;
  includeSymbols=false;

  onChangeIncludeLetter(){
    this.includeLetters=!this.includeLetters
    console.log( this.includeLetters);
    
  }
  onChangeIncludeNumber(){
    this.includeNumbers=!this.includeNumbers
    console.log( this.includeNumbers);
    
  }
  onChangeIncludeSymbol(){
    this.includeSymbols=!this.includeSymbols
    console.log( this.includeSymbols);
    
  }

  //get the entered length
  getLength(length:any){
    this.passLength=length
    console.log(this.passLength)

  }

  //generates password
genPass(){
  this.password=''
  console.log('Code is running !')

  let passChar=''  //'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+/'

  //
if(this.includeLetters) passChar += 'abcdefghijklmnopqrstuvwxyz'
if(this.includeNumbers) passChar += '0123456789'
if(this.includeSymbols) passChar += '!@#$%^&*()_+=/'

//loop to genrate password using random
  for(var i=0;i<this.passLength;i++){
    let rv = Math.floor(Math.random()*passChar.length)
    this.password +=passChar.charAt(rv);

  }
  //this.password='Aty3iji@g34'
}

}
