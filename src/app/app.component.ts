import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emails: Array<object> = [
    {
      email: 'Bill@gates.com',
      important: true,
      subject: 'New Windows',
      content: 'Windows XI will launch in year 2100.'
    },
    {
      email: 'Ada@lovelace.com',
      important: true,
      subject: 'Programming',
      content: 'Enchantress of Numbers'
    },
    {
      email: 'John@carmac.com',
      important: false,
      subject: 'Updated Algo',
      content: 'New algorithm for shadow volumes.'
    },
    {
      email: 'Gabe@newel.com',
      important: false,
      subject: 'HL3!',
      content: 'Just kidding...'
    }
  ]
}