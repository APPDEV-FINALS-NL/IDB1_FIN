import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.css']
})
export class BuynowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  onPlace(){
    const message = `Placed Order Successfully!`
    alert(message);
  }
}
