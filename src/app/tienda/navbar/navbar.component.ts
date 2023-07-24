import { Component, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  @Output() seleccionarPagina = new EventEmitter();

  menu = [
    {nombre: 'Inicio', ruta: '/tienda/inicio'},
    {nombre: 'Tienda', ruta: '/tienda/catalogo'},
    {nombre: 'Nosotros', ruta: '/tienda/nosotros'},
    {nombre: 'Contáctanos', ruta: '/tienda/contactenos'}
  ];

  constructor() {}

  ngOnInit(): void {}

  // cambiarPagina(paramRuta:string) {
  //   this.menu.forEach(item => {
  //     if (item.ruta === paramRuta) {
  //       item.current = 'true';
  //     } else {
  //       item.current = 'false';
  //     }
  //   });
  //
  //   this.seleccionarPagina.emit(paramRuta);
  // }
}
