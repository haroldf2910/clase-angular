import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  valorCalculadora = '';
  valorCalculadoraUno = '';
  valorCalculadoraDos = '';
  operador = '';

  constructor() {}

  ngOnInit(): void {}

  escribirNumero(numero: string) {
    this.valorCalculadora += numero;
  }

  capturarOperador(operacion: string) {
    this.operador = operacion;
    this.valorCalculadoraUno = this.valorCalculadora;
    this.valorCalculadora = '';
  }

  borrarValores() {
    this.valorCalculadora = '';
    this.valorCalculadoraUno = '';
    this.valorCalculadoraDos = '';
  }

  realizarOperacion() {
    this.valorCalculadoraDos = this.valorCalculadora;
    var resultado = 0;
    switch (this.operador) {
      case '+':
        resultado =
          parseInt(this.valorCalculadoraUno) + parseInt(this.valorCalculadoraDos);
        this.valorCalculadora = resultado + '';
        break;
      case '-':
        resultado =
          parseInt(this.valorCalculadoraUno) - parseInt(this.valorCalculadoraDos);
        this.valorCalculadora = resultado + '';
        break;
      case 'x':
        resultado =
          parseInt(this.valorCalculadoraUno) * parseInt(this.valorCalculadoraDos);
        this.valorCalculadora = resultado + '';
        break;
      case '/':
        resultado =
          parseInt(this.valorCalculadoraUno) / parseInt(this.valorCalculadoraDos);
        this.valorCalculadora = resultado + '';
        break;
      default:
        break;
    }
  }
}
