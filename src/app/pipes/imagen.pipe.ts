import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'usuario'): any {

    let url = URL_SERVICIOS + '/img';

    // si no hay imágen va a devolver no-imagen
    if (!img) {

      return url + '/usuarios/xxx';

    }

    // Si viene algo con https es la imagen de google entonces devuelve el url de la imagen
    if (img.indexOf('https') >= 0) {
      return img;
    }


    switch (tipo) {

      case 'usuario':
        url += '/usuarios/' + img;
        break;

      case 'medico':
        url += '/medicos/' + img;
        break;

      case 'hospital':
        url += '/hospitales/' + img;
        break;

      default:
        console.log('Tipo de imagen no existe, usuario , medicos, hospitales');
        url += '/usuarios/xxxx';

    }
    return url;
  }

}
