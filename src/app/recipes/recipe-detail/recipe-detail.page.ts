import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

import { RecipesService } from '../recipes.service';

import { Recipe } from '../receipe.model';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  public recipe: Recipe;
  private id: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertService: AlertController
  ) { }

  ngOnInit() {
    this.subRoute();
  }

  subRoute() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')) {
        return this.router.navigate(['/recipes']);
      }
      this.id = paramMap.get('id');
      this.getByIdRecive(paramMap.get('id'));
    });
  }

  getByIdRecive(id: string) {
    this.recipe = this.recipesService.getByIdRecipes(id);
  }

  deleteRecive() {

    this.alertService.create({
      header: '',
      message: `Você gostaria de excluir a receita ${this.recipe.title} ?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Deletar',
          handler: () => {
            this.recipesService.deleteRecipes(this.id);
            this.router.navigate(['/recipes']);
          }
        }
      ]
    }).then(alert => {
      alert.present();
    });

  }

}
