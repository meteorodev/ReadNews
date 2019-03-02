import { Component } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NewsService } from 'src/app/services/news.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers:[NewsService]
})
export class HomePage {

  new2Read: string = "";
  newsload:any[];

  constructor(private tts: TextToSpeech, private _newsService:NewsService) {
   this.loadNews();
  }

  readText() {

    console.log('method: readText =>');
    if (this.new2Read == "") {
      this.new2Read="Debe escribir algo para poder leerlo"
    }
    this.tts.speak({
      text: this.new2Read,
      locale: 'es-EC'
    })
      .then(() => console.log("Succes"))
      .catch((reason: any) => console.log(reason));
  }

  loadNews(){
      this._newsService.getNewsItems();
      /*.subscribe((resp) => {
        console.log(resp);
      });*/
  }
}
