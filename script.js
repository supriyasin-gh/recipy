const recipes = [

    // =========================
    // BREAKFAST
    // =========================

    {
        name: "🥔 Potato Omelette",
        category: "breakfast",
        ingredients: ["egg", "potato", "onion"],
        time: "20 minutes",
        description: "A simple and tasty omelette with potato and onion.",
        steps: [
            "Peel and chop the potato into small pieces.",
            "Chop the onion.",
            "Beat the eggs in a bowl and add a little salt.",
            "Heat some oil in a pan.",
            "Cook the potato and onion until they become soft.",
            "Pour the beaten eggs over the vegetables.",
            "Cook both sides until the omelette is fully cooked.",
            "Serve hot."
        ]
    },

    {
        name: "🍳 Egg Bhurji",
        category: "breakfast",
        ingredients: ["egg", "onion", "tomato"],
        time: "15 minutes",
        description: "Spicy scrambled eggs with onion and tomato.",
        steps: [
            "Chop the onion and tomato.",
            "Heat some oil in a pan.",
            "Add the onion and cook until soft.",
            "Add the tomato and cook for a few minutes.",
            "Beat the eggs in a bowl.",
            "Add the eggs to the pan.",
            "Stir continuously until the eggs are cooked.",
            "Add salt and spices according to taste.",
            "Serve hot."
        ]
    },

    {
        name: "🥞 Monica's Pancakes",
        category: "breakfast",
        ingredients: ["flour", "egg", "milk", "sugar"],
        time: "15 minutes",
        description: "Fluffy pancakes inspired by Monica's love of cooking.",
        steps: [
            "Add flour and sugar to a bowl.",
            "Add the egg and milk.",
            "Mix everything until you get a smooth batter.",
            "Heat a lightly oiled pan.",
            "Pour some batter onto the pan.",
            "Cook until bubbles appear on the surface.",
            "Flip the pancake and cook the other side.",
            "Repeat with the remaining batter.",
            "Serve warm."
        ]
    },

    {
        name: "🥯 Bagel Breakfast",
        category: "breakfast",
        ingredients: ["bagel", "cream cheese", "tomato", "onion"],
        time: "10 minutes",
        description: "A quick New York-style breakfast inspired by the world of Friends.",
        steps: [
            "Cut the bagel into two halves.",
            "Toast the bagel lightly.",
            "Spread cream cheese on both halves.",
            "Add sliced tomato.",
            "Add some chopped onion.",
            "Add salt and pepper if desired.",
            "Serve immediately."
        ]
    },

    {
        name: "☕ Central Perk Coffee",
        category: "breakfast",
        ingredients: ["coffee", "milk", "sugar"],
        time: "5 minutes",
        description: "A simple coffee inspired by the gang's favorite hangout spot.",
        steps: [
            "Boil some water.",
            "Add coffee to a cup.",
            "Pour in the hot water.",
            "Add milk according to taste.",
            "Add sugar if desired.",
            "Mix well and serve hot."
        ]
    },


    // =========================
    // LUNCH
    // =========================

    {
        name: "🍝 Veg Pasta",
        category: "lunch",
        ingredients: ["pasta", "tomato", "onion"],
        time: "25 minutes",
        description: "Easy homemade vegetable pasta.",
        steps: [
            "Boil water in a large pan.",
            "Add pasta and cook until soft.",
            "Drain the pasta and keep it aside.",
            "Chop the onion and tomato.",
            "Heat oil in a pan.",
            "Cook the onion and tomato.",
            "Add the cooked pasta.",
            "Add salt and spices according to taste.",
            "Mix everything well and serve."
        ]
    },

    {
        name: "🍚 Fried Rice",
        category: "lunch",
        ingredients: ["rice", "egg", "onion"],
        time: "20 minutes",
        description: "Quick fried rice made with basic ingredients.",
        steps: [
            "Cook the rice and allow it to cool.",
            "Chop the onion.",
            "Heat oil in a pan.",
            "Add the onion and cook until soft.",
            "Add the egg and scramble it.",
            "Add the cooked rice.",
            "Add salt and spices according to taste.",
            "Mix everything well.",
            "Cook for a few minutes and serve hot."
        ]
    },

    {
        name: "🍕 Joey's Pizza",
        category: "lunch",
        ingredients: ["pizza base", "cheese", "tomato", "onion"],
        time: "25 minutes",
        description: "A cheesy pizza inspired by Joey's legendary love for pizza.",
        steps: [
            "Place the pizza base on a baking tray.",
            "Spread tomato sauce over the base.",
            "Add chopped tomato and onion.",
            "Cover the top with cheese.",
            "Bake until the cheese melts and the base becomes crisp.",
            "Carefully remove the pizza from the oven.",
            "Cut into slices and serve."
        ]
    },

    {
        name: "🥪 Joey's Meatball Sub",
        category: "lunch",
        ingredients: ["bread", "meatballs", "tomato sauce", "cheese"],
        time: "20 minutes",
        description: "A hearty meatball sandwich for anyone who takes food seriously.",
        steps: [
            "Heat the meatballs in a pan.",
            "Add tomato sauce and cook for a few minutes.",
            "Cut the bread or roll open.",
            "Place the meatballs inside.",
            "Add cheese on top.",
            "Heat until the cheese melts.",
            "Serve while warm."
        ]
    },

    {
        name: "🥨 New York Pretzel",
        category: "lunch",
        ingredients: ["flour", "salt", "butter"],
        time: "30 minutes",
        description: "A classic New York-style snack for your Central Perk mood.",
        steps: [
            "Prepare a dough using flour and water.",
            "Shape the dough into a long rope.",
            "Twist the dough into a pretzel shape.",
            "Sprinkle salt over the pretzel.",
            "Place it on a baking tray.",
            "Bake until golden brown.",
            "Brush with a little butter.",
            "Serve warm."
        ]
    },


    // =========================
    // DESSERT
    // =========================

    {
        name: "🍫 Chocolate Cake",
        category: "dessert",
        ingredients: ["flour", "sugar", "chocolate"],
        time: "45 minutes",
        description: "A simple homemade chocolate cake.",
        steps: [
            "Preheat the oven.",
            "Mix flour and sugar in a bowl.",
            "Add melted chocolate.",
            "Mix the ingredients into a smooth batter.",
            "Pour the batter into a cake pan.",
            "Bake until the cake is fully cooked.",
            "Allow the cake to cool.",
            "Cut into slices and serve."
        ]
    },

    {
        name: "🍰 Monica's Cheesecake",
        category: "dessert",
        ingredients: ["cream cheese", "sugar", "egg", "biscuit"],
        time: "50 minutes",
        description: "A creamy cheesecake inspired by Monica's famous cheesecake episode.",
        steps: [
            "Crush the biscuits into fine crumbs.",
            "Mix the crumbs with melted butter.",
            "Press the mixture into the bottom of a cake pan.",
            "Mix cream cheese and sugar in a bowl.",
            "Add the eggs and mix well.",
            "Pour the mixture over the biscuit base.",
            "Bake until the cheesecake is set.",
            "Allow it to cool before serving."
        ]
    },

    {
        name: "🍰 Rachel's Trifle",
        category: "dessert",
        ingredients: ["cake", "custard", "cream", "banana", "jam"],
        time: "30 minutes",
        description: "A layered dessert inspired by Rachel's unforgettable trifle.",
        steps: [
            "Cut the cake into small pieces.",
            "Place a layer of cake in a bowl.",
            "Add a layer of jam.",
            "Add sliced banana.",
            "Add a layer of custard.",
            "Add whipped cream.",
            "Repeat the layers until the bowl is filled.",
            "Chill before serving."
        ]
    },

    {
        name: "🍪 Phoebe's Oatmeal Cookies",
        category: "dessert",
        ingredients: ["oats", "flour", "sugar", "butter"],
        time: "25 minutes",
        description: "Simple homemade cookies with a little Phoebe-style personality.",
        steps: [
            "Mix oats, flour and sugar in a bowl.",
            "Add softened butter.",
            "Mix everything to form a dough.",
            "Shape the dough into small cookies.",
            "Place the cookies on a baking tray.",
            "Bake until golden brown.",
            "Allow them to cool.",
            "Serve with tea or coffee."
        ]
    }

];

displayRecipes(recipes);


function displayRecipes(recipeList) {

    const container = document.getElementById("recipeContainer");

    container.innerHTML = "";

    if (recipeList.length === 0) {
        container.innerHTML = "<h3>No recipes found 😭</h3>";
        return;
    }

    recipeList.forEach(function(recipe) {

        const card = document.createElement("div");

        card.className = "recipe-card";

        card.innerHTML = `
            <h3>${recipe.name}</h3>

            <p>${recipe.description}</p>

            <p>
                <b>Cooking Time:</b> ${recipe.time}
            </p>

            <p>
                <b>Ingredients:</b>
                ${recipe.ingredients.join(", ")}
            </p>

            <button class="view-recipe-btn">
                View Recipe
            </button>
        `;

        const button = card.querySelector(".view-recipe-btn");

        button.addEventListener("click", function() {
            showRecipe(recipe.name);
        });

        container.appendChild(card);
    });
}


function findRecipes() {

    const input = document
        .getElementById("ingredientInput")
        .value
        .toLowerCase()
        .trim();

    if (input === "") {
        displayRecipes(recipes);
        return;
    }

    const userIngredients = input
        .split(",")
        .map(function(item) {
            return item.trim();
        })
        .filter(function(item) {
            return item !== "";
        });

    const matchingRecipes = recipes
        .map(function(recipe) {

            let matchedIngredients = recipe.ingredients.filter(
                function(ingredient) {

                    return userIngredients.includes(ingredient);
                }
            );

            return {
                recipe: recipe,
                matchCount: matchedIngredients.length
            };
        })

        .filter(function(item) {

            return item.matchCount > 0;
        })

        .sort(function(a, b) {

            return b.matchCount - a.matchCount;
        });

    displaySearchResults(matchingRecipes);
}
function displaySearchResults(results) {

    const container =
        document.getElementById("recipeContainer");

    container.innerHTML = "";

    if (results.length === 0) {

        container.innerHTML =
            "<h3>No matching recipes found 😭</h3>";

        return;
    }

    results.forEach(function(item) {

        const recipe = item.recipe;
        const matchCount = item.matchCount;

        const card =
            document.createElement("div");

        card.className = "recipe-card";

        card.innerHTML = `
            <h3>${recipe.name}</h3>

            <p>${recipe.description}</p>

            <p>
                <b>Cooking Time:</b>
                ${recipe.time}
            </p>

            <p>
                <b>Ingredients:</b>
                ${recipe.ingredients.join(", ")}
            </p>

            <p>
                <b>Matched Ingredients:</b>
                ${matchCount} / ${recipe.ingredients.length}
            </p>

            <button class="view-recipe-btn">
                View Recipe
            </button>
        `;

        const button =
            card.querySelector(".view-recipe-btn");

        button.addEventListener("click", function() {

            showRecipe(recipe.name);

        });

        container.appendChild(card);
    });
}


// Filter recipes by category
function showCategory(category) {

    if (category === "all") {

        displayRecipes(recipes);

    } else {

        const filteredRecipes =
            recipes.filter(function(recipe) {

                return recipe.category === category;

            });

        displayRecipes(filteredRecipes);
    }
}


function showRecipe(recipeName) {

    const recipe = recipes.find(function(item) {
        return item.name === recipeName;
    });

    let stepsText = "";

    recipe.steps.forEach(function(step, index) {
        stepsText += (index + 1) + ". " + step + "\n";
    });

    alert(
        "🍳 " + recipe.name +

        "\n\n🛒 Ingredients:\n" +
        recipe.ingredients.join(", ") +

        "\n\n⏱ Cooking Time: " +
        recipe.time +

        "\n\n👩‍🍳 How to Prepare:\n" +
        stepsText
    );
}