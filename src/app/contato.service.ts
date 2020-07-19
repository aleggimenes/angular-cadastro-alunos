import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Contato } from './contato';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ContatoService {
  constructor(private db: AngularFireDatabase) { }
  insert(contato: Contato) {
  console.log(contato);
  this.db.list('contatos').push(contato)
  .then((result: any) => {
  console.log(result.key);
  });
}
getAll() {
return this.db.list('contatos')
.snapshotChanges()
.pipe(
  map(changes => {
    return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
    );
  }

}