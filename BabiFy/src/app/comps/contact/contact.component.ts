import { Component ,OnInit} from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  submitObj: any = {
    name: '',
    email: '',
    message: ''
  }
  constructor() {}

  ngOnInit(): void {}

  submitForm() {
    debugger
    const message=`Message Sent Successfully!`;
      alert(message);
    }
}
