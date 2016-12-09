import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { PaginaCadastroPage } from '../pagina-cadastro/pagina-cadastro';
import { ListaUsuarioPage } from '../lista-usuario/lista-usuario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public usuario;

  constructor(public navCtrl: NavController, public http:Http, public parametro:NavParams) {
    this.usuario={};
  }

  login(){
    this.http.get('http://localhost:8080/WebServiceUserControl/resource/usuario/realizarLogin/{email}/{senha}',
      this.usuario).map(res => res.json()).subscribe(data => {
      if (data == true) {
        console.log('Login Realizado');
      this.chamarListaUsuario();
      } else {
          console.log('Usuário não Cadastrado')
      }
  });
}

  chamarCadastrarUsuario(){
    this.navCtrl.push(PaginaCadastroPage);
  }

  chamarListaUsuario(){
    this.navCtrl.push(ListaUsuarioPage);
  }
}
