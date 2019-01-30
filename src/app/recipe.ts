export class Recipe {
    id: number;
    recipe_title: string;
    // ingredients: string;
    recipe_instruction: string;
    recipe_prepTime: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
