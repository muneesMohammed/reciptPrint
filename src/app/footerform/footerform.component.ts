import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footerform',
  templateUrl: './footerform.component.html',
  styleUrls: ['./footerform.component.scss']
})
export class FooterformComponent implements OnInit {
  selected="option1";
  constructor() { }

  ngOnInit(): void {
  }

 /*myFunction() {
  var x = document.getElementById("mySelect").value;
  document.getElementById("demo").innerHTML = "You selected: " + x;
}*/

}
