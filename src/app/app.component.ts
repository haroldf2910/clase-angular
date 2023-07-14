import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase-angular2';
  mostrarClase= false;

  /*constructor() {
    setInterval(() =>{
      this.mostrarClase = !this.mostrarClase;
    }, 5000);
  }*/

}
