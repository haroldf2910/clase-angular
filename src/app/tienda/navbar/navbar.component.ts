import { Component, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  @Output() seleccionarPagina = new EventEmitter();

  menu = [
    {nombre: 'Inicio', ruta: 'inicio', current: 'true'},
    {nombre: 'Tienda', ruta: 'catalogo', current: 'false'},
    {nombre: 'Nosotros', ruta: 'nosotros', current: 'false'},
    {nombre: 'Contáctanos', ruta: 'contactenos', current: 'false'}
  ];

  constructor() {}

  ngOnInit(): void {}

  cambiarPagina(paramRuta:string) {
    this.menu.forEach(item => {
      if (item.ruta === paramRuta) {
        item.current = 'true';
      } else {
        item.current = 'false';
      }
    });

    this.seleccionarPagina.emit(paramRuta);
  }
}
