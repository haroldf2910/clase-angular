import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  mostrarImagen = false;
  aplicarBoot = false;
  unArray  = ["a", "b", "c" , "d"];

  constructor() { }

  ngOnInit(): void {
  }

}
