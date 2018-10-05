import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img:string, type:string='users'):any{

    let url = URL_SERVICES + '/img'; 

    if(!img){
        return url + '/users/xxxx';
    }

    if(img.indexOf('https') >= 0){

      return img;
    }

    switch(type){
      case 'users':
        url += '/users/' + img;
        console.log(img);
      break;
      case 'doctors':
        url += '/doctor/' + img;
        
      break;
      case 'hospitales':
        url += '/hospital/' + img;
      break;
      default:{
        console.log('el typo no existe');
        url += '/users/xxxx';
      }
    }

    return url;
  }

}
