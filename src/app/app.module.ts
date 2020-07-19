import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { ContatoService } from './contato.service';
import { ContatoComponent } from './contato/contato.component';
import { ContatosComponent } from './contatos/contatos.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AngularFireModule.initializeApp(environment.firebase),
AngularFireDatabaseModule ],
  declarations: [ AppComponent, HelloComponent, ContatoComponent, ContatosComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ContatoService]
})
export class AppModule { }
