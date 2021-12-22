import { Component} from '@angular/core';
import { bufferToggle, reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contactinfo = "9178684242";
  data = "prasanta";

  title = 'simpleCRM';
  success_msg =true;
  any_msg=false;
  Styleprop="purple";
  textclr = "red";
  userObject= {'firstname': 'prasanta', 'lastname':'sethi'} //Object

  colVal=2;
  SuperPower= 'nothing';
  number= 530;
  isUserLoggedIn = false;
  username= "";
  
  lowercaseExamp = 'PRASANTA KUMAR'
  contacts =[
    {
      'firstName': 'prasanta',
      'lastname':'Kumar',
      'contactid':1801297208
    },
    {
      'firstName': 'kumar',
      'lastname':'garurav',
      'contactid':1801297209
    },
    {
      'firstName': 'Ankit',
      'lastname':'Khatri',
      'contactid':1801297210
    },
    {
      'firstName': 'priyaranjan',
      'lastname':'nayak',
      'contactid':1801297211
    },
    {
      'firstName': 'mohan',
      'lastname':'kumar',
      'contactid':1801297212
    },
    {
      'firstName': 'harshad',
      'lastname':'Mehta',
      'contactid':1801297213
    },
    {
      'firstName': 'Raghunth',
      'lastname':'Sahoo',
      'contactid':1801297214
    },
    {
      'firstName': 'harihar',
      'lastname':'pradhan',
      'contactid':1801297215
    },
    {
      'firstName': 'Rampal',
      'lastname':'singh',
      'contactid':1801297216
    },
  ]
  name  = 'prasatna';
  updateName(){
    this.name= 'priya';
  }

 month = 0;
// username= "";
// lowercaseExamp = 'PRASANTA KUMAR'
uppercaseExamp= 'nile technologies'
dateExample = Date.now()
jsonExamp = {username : 'prasanta', major: 'angular', exp: 10}
currencyexamp = 125;
}

