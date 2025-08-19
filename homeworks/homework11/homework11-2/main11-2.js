fetch('https://dummyjson.com/recipes')
.then(res => res.json())
.then(res => {
    console.log(res);
    let {recipes} = res;

    const block = document.createElement('div');
    document.body.appendChild(block);

    for (let recipe of recipes) {
        console.log(recipe);
        const blockWithRecepies = document.createElement('div');

        blockWithRecepies.innerText = `
            "id" = ${recipe.id};
            "caloriesPerServing": ${recipe.caloriesPerServing};
            "cookTimeMinutes": ${recipe.cookTimeMinutes};
            "cuisine": ${recipe.cuisine};
            "difficulty": ${recipe.difficulty};
            "name": ${recipe.name};
            "prepTimeMinutes": ${recipe.prepTimeMinutes};
            "rating": ${recipe.rating};
            "reviewCount": ${recipe.reviewCount};
            "servings": ${recipe.servings}
            "userId": ${recipe.userId};
        `
        let recepiesImage = document.createElement('img');
        recepiesImage.className = 'recipeImg'
        recepiesImage.src = recipe.image;
        blockWithRecepies.appendChild(recepiesImage);


        const ingredientTitle = document.createElement('h3');
        ingredientTitle.innerText = 'Ingredients'

        const ingredientsList = document.createElement('ul');
        block.append(blockWithRecepies, ingredientTitle, ingredientsList);

        for (let ingredient of recipe.ingredients) {
            const ingredientItem = document.createElement('li');
            ingredientItem.innerText = ingredient;
            ingredientsList.appendChild(ingredientItem);
        }

        let instructionTitle = document.createElement('h3');
        instructionTitle.innerHTML = 'Instructions'
        block.appendChild(instructionTitle);

        for (let instruction of recipe.instructions) {
            const instructionItem = document.createElement('p')

            instructionItem.innerText = instruction;
            block.appendChild(instructionItem);
        }
        let mealTypeTitle = document.createElement('h3');
        mealTypeTitle.innerHTML = 'Meal Type'
        block.appendChild(mealTypeTitle);

        for (let type of recipe.mealType) {
            const mealType = document.createElement('p')
            mealType.innerText = type;
            block.appendChild(mealType);
        }
        let tagsTitle = document.createElement('h3');
        tagsTitle.innerHTML = 'Tags'
        block.appendChild(tagsTitle);
        
        for (let tag of recipe.tags) {
            const mealTag = document.createElement('p');
            mealTag.innerText = tag;
            block.appendChild(mealTag);
        }
    }
});