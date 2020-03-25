import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [new Recipe('Arabic food', 'It consisits of meat',
    'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_1000,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('American food', 'Chesse Pizaa','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png')];
  constructor() { }

  ngOnInit(): void {
  }

}
