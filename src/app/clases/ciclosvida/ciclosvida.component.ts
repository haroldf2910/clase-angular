import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclosvida',
  templateUrl: './ciclosvida.component.html',
  styleUrls: ['./ciclosvida.component.css'],
})
export class CiclosvidaComponent implements OnInit {
  //contador = 0;
  constructor() {
    /*setInterval(() => {
      this.contador++;
      console.log(this.contador);
    }, 1000);*/
    console.log('Hola, soy el contructor');
  }

  ngOnchanges() {
    console.log('Cambia algo');
  }

  ngOnInit(): void {
    console.log('Ya cargué :D');
  }

  ngDoCheck() {
    console.log('Entradas en el input');
  }

  ngAfterContentInit() {
    console.log('Angular mostró contenido');
  }

  ngAfterContentChecked() {
    console.log('Verificado por cambio');
  }

  ngAfterViewInit() {
    console.log('cuando carga la pagina');
  }

  ngAfterViewChecked() {
    console.log('ultimo metodo y cuando se haga cambios');
  }

  ngOnDestroy() {
    console.log('Finaliza el componente');
  }
}
