import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  UnaVariable = "Hola";
  constructor() { }

  ngOnInit(): void {
  }

  retornarMensaje () {
    return "Hola mensaje";
  }

}
