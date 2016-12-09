import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';
/*
  Generated class for the PaginaCadastro page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pagina-cadastro',
  templateUrl: 'pagina-cadastro.html'
})
export class PaginaCadastroPage {
  public usuario;

  constructor(public navCtrl: NavController, public http:Http, public parametro: NavParams) {
    this.usuario=[];
  }

  salvarUsuario(){
    console.log(this.usuario);
    this.http.post('http://localhost:8080/WebServiceUserControl/resource/usuario/cadastrarUsuario',
      this.usuario).map(res => res.json()).subscribe(data => {
        
        this.usuario = {};
        this.chamarLogin();
    });
  }

  chamarLogin(){
      HomePage;
    }
}
