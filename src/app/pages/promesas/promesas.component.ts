import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {



    this.contarTres().then(
      mensaje => console.log('Termino oooo', mensaje)

    )
      .catch(error => console.error('Error en la promesa', error));

  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {

    return new Promise((resolve, reject) => {

      let contador = 0;

      const intervalo = setInterval(() => {

        contador += 1;
        console.log(contador);



        if (contador === 3) {
          resolve(true);
          // resolve('- ESTOY ES LO QUE VIENE POR EL RESOLVE, OKEY HECTOR -');
          // reject(' ESTO ES LO QUE VIENE POR EL REJECT, Simplemente un error ');

          clearInterval(intervalo);

        }
      }, 1000);
    });
  }

}
