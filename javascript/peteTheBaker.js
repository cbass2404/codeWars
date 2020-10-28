function cakes(recipe, available) {
  console.log(recipe.length);
  console.log(available.length);
  if (recipe.length <= available.length) {
    return true;
  } else {
    return 1;
  }
}

console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
); // 2

// recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
// available = { sugar: 500, flour: 2000, milk: 2000 };
// console.log(cakes(recipe, available)); // 0
