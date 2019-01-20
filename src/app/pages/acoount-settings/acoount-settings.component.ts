import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-acoount-settings',
  templateUrl: './acoount-settings.component.html',
  styles: []
})
export class AcoountSettingsComponent implements OnInit {

  constructor(public _ajustes: SettingsService) { }

  ngOnInit() {

    this.removerCheck();
    this.colorcarCheck();
  }


  cambiarColor(tema: string, link: any) {

    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);

  }


  removerCheck() {

    const selectores: any = document.getElementsByClassName('selector');

    for (const refa of selectores) {
      refa.classList.remove('working');


    }
  }
  aplicarCheck(link: any) {

    const selectores: any = document.getElementsByClassName('selector');

    for (const ref of selectores) {

      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  colorcarCheck() {
    const selectores: any = document.getElementsByClassName('selector');

    const tema = this._ajustes.ajustes.tema;
    for (const ref of selectores) {

      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;

      }

    }

  }
}
