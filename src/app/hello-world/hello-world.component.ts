import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',    // custom tag
  templateUrl: './hello-world.component.html',   // view
  styleUrls: ['./hello-world.component.css']    // style
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
