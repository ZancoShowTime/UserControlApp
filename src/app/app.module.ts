import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PaginaCadastroPage } from '../pages/pagina-cadastro/pagina-cadastro';
import { ListaUsuarioPage } from '../pages/lista-usuario/lista-usuario'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PaginaCadastroPage,
    ListaUsuarioPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PaginaCadastroPage,
    ListaUsuarioPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
