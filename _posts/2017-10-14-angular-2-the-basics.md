---
layout: post
title: "Angular 2 - The Basic"
date: 2017-10-16
lang: en-us
---

### {{ page.title }}

#### `Create Nested Components`
Create recipe-item component under recipe-list componenet. The `--spec false` tells angular don't create this file.
```typescript
ng g c recipe-list/recipe-item --spec false
```

#### `Create Model`
Simply create the `model.ts` file within your project. (e.g: recipe.model.ts)
```typescript
export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}
```

#### `How to Use Model`
Within your component.ts file (e.g: recipe-list.component.ts)
```typescript
export class RecipeListComponent {
    recipes: Recipe[] = [
        new recipe('recipe name', 'recipe description', 'recipe image path');
    ];
}

```

To loop through the recipe. In your HTML file.
```typescript
<div *ngFor="let recipe of recipes">
    <div>{ { recipe.name } }</div>
    <div>{ { recipe.description } }</div>
    <img [src]="recipe.imagePath"/>
</div>
```

#### `Augury`

Download this Chrome extension to understand your Angular app better. Just search Angular augury on your browser. You may need to restar your dev tool.