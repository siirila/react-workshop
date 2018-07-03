import React from 'react';

export function Ingredient(props) {
  // This is the component that you need to implement
  // Use the Recipe component that is invoking it to see what properties it expects
  return null;
}

let recipe = {
  "name": "Blueberry Oatmeal Squares",
  "ingredients": [
    {
        "quantity": "2-1/2 cups",
        "name": "rolled oats, (not instant)",
    },
    {
        "quantity": "1-1/4 cups",
        "name": "all-purpose flour",
    },
    {
        "quantity": "1 tbsp",
        "name": "grated orange rind",
    },
    {
        "quantity": "1/4 tsp",
        "name": "salt",
    },
    {
        "quantity": "1 cup",
        "name": "cold butter, cubed",
    },
    {
        "quantity": "3/4 cup",
        "name": "packed brown sugar",
    },
    {
        "quantity": "3 cups",
        "name": "fresh blueberries",
    },
    {
        "quantity": "1/2 cup",
        "name": "granulated sugar",
    },
    {
        "quantity": "1/3 cup",
        "name": "orange juice",
    },
    {
        "quantity": "4 tsp",
        "name": "cornstarch",
    }
  ],
};

function Recipe(props) {
  return (
    <div>
      <h3>{props.recipe.name}</h3>
      <ul style={{ listStyleType: 'none' }}>
        <span style={{ fontWeight: 'bold' }}>Ingredients</span>
        {props.recipe.ingredients.map(Ingredient)}
      </ul>
    </div>
  );
}

export function Example() {
  return (
    <Recipe recipe={recipe}/>
  );
}

export default Recipe;

/*
eslint
no-unused-vars: 0,
no-undef: 0,
no-unused-expressions: 0
*/
