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
      imageUrl: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi3lf7-88PhAhUaILkGHYmTA7sQjRx6BAgBEAU&url=https%3A%2F%2Fwww.vix.com%2Fpt%2Fbdm%2Fgourmet%2Fbife-com-batatas-de-marinheiro&psig=AOvVaw3IOwzydv5LnUxKRUAoDuun&ust=1554930054652609',
      ingredients: ['Bifão', 'Arroz', 'Feijão', 'Batata']
    },
    {
      id: 'r2',
      title: 'Macarronada',
      imageUrl: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjj7I6n9MPhAhVzBtQKHYScBdgQjRx6BAgBEAU&url=http%3A%2F%2Farevistadamulher.com.br%2Freceitas%2Fcontent%2F2163475-macarronada&psig=AOvVaw0Xcz78xYkH_yC_rIjAUATp&ust=1554930134401410',
      ingredients: ['Macarrão', 'Carne', 'Tomate']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
