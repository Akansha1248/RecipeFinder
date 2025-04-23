document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const resultsContainer = document.querySelector('.recipe-grid');

    // Sample recipe data (replace with your actual data or API calls)
    const recipes = [
        {
            id: 1,
            title: 'Delicious Spaghetti Carbonara',
            description: 'Classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.',
            image: 'image/spaghetti.jpg', // Replace with actual image path
            link: 'recipe.html?id=1' // Link to the full recipe page
        },
        {
            id: 2,
            title: 'Easy Chicken Stir-Fry',
            description: 'Quick and flavorful stir-fried chicken with colorful vegetables.',
            image: 'image/chicken fry.jpg', // Replace with actual image path
            link: 'recipe.html?id=2'
        },
        {
            id: 3,
            title: 'Vegan Lentil Soup',
            description: 'Hearty and nutritious lentil soup packed with vegetables and herbs.',
            image: 'image/vegan lentil soup.jpg', // Replace with actual image path
            link: 'recipe.html?id=3'
        },
        // Add more recipes here
    ];

    function displayRecipes(recipeList) {
        resultsContainer.innerHTML = ''; // Clear previous results
        if (recipeList.length === 0) {
            resultsContainer.innerHTML = '<p>No recipes found matching your search.</p>';
            return;
        }

        recipeList.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');

            const image = document.createElement('img');
            image.src = recipe.image;
            image.alt = recipe.title;

            const info = document.createElement('div');
            info.classList.add('recipe-info');

            const title = document.createElement('h3');
            title.textContent = recipe.title;

            const description = document.createElement('p');
            description.textContent = recipe.description;

            const link = document.createElement('a');
            link.href = recipe.link;
            link.textContent = 'View Recipe';
            link.classList.add('recipe-link');

            info.appendChild(title);
            info.appendChild(description);
            info.appendChild(link);

            recipeCard.appendChild(image);
            recipeCard.appendChild(info);

            resultsContainer.appendChild(recipeCard);
        });
    }

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm)
        );
        displayRecipes(filteredRecipes);
    });

    // Initial display of all recipes
    displayRecipes(recipes);
});