import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

/*
  Generated class for the ListaUsuario page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lista-usuario',
  templateUrl: 'lista-usuario.html'
})
export class ListaUsuarioPage {
  private usuario;
  private pesquisar;

  constructor(public navCtrl: NavController, public http:Http) {
    this.usuario=[];
    this.pesquisar='';
  }

  buscarPorNome(){
    this.http.get('http://localhost:8080/WebServiceUserControl/resource/usuario/buscarPorNome/{nome}',
      this.pesquisar).map(res => res.json()).subscribe(data => {
      this.usuario = data;
    });
  }

   buscarPorCPF(){
    this.http.get('http://localhost:8080/WebServiceUserControl/resource/usuario/buscarPorCPF/{cpf}',
      this.pesquisar).map(res => res.json()).subscribe(data => {
      this.usuario = data;
    });
  }

  ionViewDidLoad() {
    console.log('Hello ListaUsuarioPage Page');
  }
}
