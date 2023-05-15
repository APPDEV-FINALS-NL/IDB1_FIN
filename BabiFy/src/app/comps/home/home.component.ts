import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '.app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.startCountdown();
  }
@Input() init:any = null;
public counter:number=0;

constructor(){}
startCountdown(){
  if(this.init && this.init >0){
    this.counter = this.init;
    this.doCountdown();
  }
}
doCountdown(){
  setTimeout(()=>{
    this.counter = this.counter -1;
    this.processCountdown();
  }, 1000)
}

processCountdown(){
console.log("Count is ", this.counter);

if (this.counter == 0){
  console.log("End");

}
else{
  this.doCountdown();
}
}

 

}