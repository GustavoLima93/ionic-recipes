import { Injectable } from '@angular/core';

import { Recipe } from './receipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

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

  getAllRecipes() {
    return [...this.recipes];
  }

  getByIdRecipes(id: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === id;
    })};
  }

  deleteRecipes(id: string) {
    return this.recipes = this.recipes.filter((recipes: Recipe) => {
     return  recipes.id !== id;
    });
  }
}
