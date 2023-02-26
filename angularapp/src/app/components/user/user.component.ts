import {Component} from "@angular/core";


@Component({
  selector : 'app-user',

  templateUrl : './user.component.html',
  styleUrls : ['./user.component.css']
})


export class UserComponent {
  // Properties
  firstName = "Chaker" ;
  lastName = "Elj" ;
  age = 21 ;

  address = {
    street : "Nahj Abed Hmid Mamlouk" ,
    city : "Ras Jebel" ,
    postalCode : 7070 ,
  };

  // Methods
  constructor() {
    this.sayHello();
  }

  sayHello() {
    console.log(`Hello ${this.firstName}`) ;
  }
}
