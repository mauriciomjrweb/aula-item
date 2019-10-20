import { Injectable } from '@angular/core';
import { getSymbolIterator } from '@angular/core/src/util';
import { getFirstTemplatePass } from '@angular/core/src/render3/state';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Array<any> = [
    {
      id: 1,
      titulo: 'Vingadores - Ultimato',
      descricao: 'Mussum Ipsum'
    },
    {
      id: 2,
      titulo: 'Dumbo',
      descricao: 'Elefante'
    },
    {
      id: 3,
      titulo: 'Shazam',
      descricao: 'Bazinga'
    },
    {
      id: 4,
      titulo: 'De volta para o futuro',
      descricao: 'Vai e volta'
    }
  ];

  constructor() { }

  createItem(ptitulo, pdescricao){
    let randomId = Math.random().toString(36).substr(2,5);

    this.items.push({
      id: randomId,
      titulo: ptitulo,
      descricao: pdescricao
    });
  }

  getItems(){
    return this.items;
  }

  getItemById(id){
    return this.items.filter(item => item.id == id);
  }

  updateItem(pvalores){
    let itemIndex = this.items
    .findIndex(item => item.id == pvalores.id);
    this.items[itemIndex] = pvalores;
  }

}
