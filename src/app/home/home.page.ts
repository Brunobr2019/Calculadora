import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  primeiroNumero;
  segundoNumero;
  resultado;


  constructor() {}

    add()  {
      this.resultado = parseInt(this.primeiroNumero) + parseInt(this.segundoNumero);
    }

    sub()  {
      this.resultado = parseInt(this.primeiroNumero) - parseInt(this.segundoNumero);
    }

    mult()  {
      this.resultado = parseInt(this.primeiroNumero) * parseInt(this.segundoNumero);
    }

    div()  {
      this.resultado = parseInt(this.primeiroNumero) / parseInt(this.segundoNumero);
    }
  

}
