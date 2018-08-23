import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { Observable } from '../../../node_modules/rxjs';

/*
  Generated class for the FinanceiroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export enum TipoEventoFinaneiro {
  PAGAMENTO, RETIRADA
}

export interface EventoFinanceiro {
  tipo: TipoEventoFinaneiro,
  data: string,
  valor: number
}

@Injectable()
export class FinanceiroProvider {

  constructor(public http: HttpClient,
    public db: AngularFireDatabase) {
  }

  public obterTotal(id: string): Observable<number> {
    return this.db.list<EventoFinanceiro>('/eventos/financeiro/' + id, ref => ref)
      .valueChanges()
      .flatMap(es => {
        return es;
      })
      .map(e => {
        if (e.tipo === TipoEventoFinaneiro.PAGAMENTO) {
          return e.valor;
        } else {
          return e.valor * -1;
        }
      })
      .reduce((acc, value, indice) => {
        console.log(acc + value);
        return acc + value;
      }, 0);
  }

}
