import { Component, OnInit } from '@angular/core';

import { Recipe } from './receipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  public recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Bifão com batata',
      imageUrl: 'https://www.clubedosvinhos.com.br/wp-content/uploads/bife-batata-frita-620x360.jpg',
      ingredients: ['Bifão', 'Arroz', 'Feijão', 'Batata']
    },
    {
      id: 'r2',
      title: 'Macarronada',
      imageUrl: 'https://abrilmdemulher.files.wordpress.com/2016/09/receita-macarrao-campestre.jpg?quality=90&strip=info',
      ingredients: ['Macarrão', 'Carne', 'Tomate']
    }
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.recipes)
  }

}
