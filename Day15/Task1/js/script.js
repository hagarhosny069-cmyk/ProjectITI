let searchInput = document.querySelector("#searchInput");
let searchSelect = document.querySelector("#searchSelect");
let recipesContainer = document.querySelector("#recipesContainer");

console.log(searchInput);
console.log(searchSelect);
console.log(recipesContainer);

const searchQueries = [
    "carrot",
    "broccoli",
    "asparagus",
    "cauliflower",
    "corn",
    "cucumber",
    "green pepper",
    "lettuce",
    "mushrooms",
    "onion",
    "potato",
    "pumpkin",
    "red pepper",
    "tomato",
    "beetroot",
    "brussel sprouts",
    "peas",
    "zucchini",
    "radish",
    "sweet potato",
    "artichoke",
    "leek",
    "cabbage",
    "celery",
    "chili",
    "garlic",
    "basil",
    "coriander",
    "parsley",
    "dill",
    "rosemary",
    "oregano",
    "cinnamon",
    "saffron",
    "green bean",
    "bean",
    "chickpea",
    "lentil",
    "apple",
    "apricot",
    "avocado",
    "banana",
    "blackberry",
    "blackcurrant",
    "blueberry",
    "boysenberry",
    "cherry",
    "coconut",
    "fig",
    "grape",
    "grapefruit",
    "kiwifruit",
    "lemon",
    "lime",
    "lychee",
    "mandarin",
    "mango",
    "melon",
    "nectarine",
    "orange",
    "papaya",
    "passion fruit",
    "peach",
    "pear",
    "pineapple",
    "plum",
    "pomegranate",
    "quince",
    "raspberry",
    "strawberry",
    "watermelon",
    "salad",
    "pizza",
    "pasta",
    "popcorn",
    "lobster",
    "steak",
    "bbq",
    "pudding",
    "hamburger",
    "pie",
    "cake",
    "sausage",
    "tacos",
    "kebab",
    "poutine",
    "seafood",
    "chips",
    "fries",
    "masala",
    "paella",
    "som tam",
    "chicken",
    "toast",
    "marzipan",
    "tofu",
    "ketchup",
    "hummus",
    "chili",
    "maple syrup",
    "parma ham",
    "fajitas",
    "champ",
    "lasagna",
    "poke",
    "chocolate",
    "croissant",
    "arepas",
    "bunny chow",
    "pierogi",
    "donuts",
    "rendang",
    "sushi",
    "ice cream",
    "duck",
    "curry",
    "beef",
    "goat",
    "lamb",
    "turkey",
    "pork",
    "fish",
    "crab",
    "bacon",
    "ham",
    "pepperoni",
    "salami",
    "ribs"
];

function displaySearchQueries() {

    searchQueries.forEach(function(query) {

        searchSelect.innerHTML += `<option>${query}</option>`;

    });

}

displaySearchQueries();

fetch("https://forkify-api.herokuapp.com/api/search?q=pizza")

    .then(function(response) {
        return response.json();
    })

    .then(function(data) {

        console.log(data);
        displayRecipes(data.recipes);

    });


function displayRecipes(recipes) {

    recipes.forEach(function(recipe) {

        let cartona = `
            <div class="col-md-3">
                <div class="bg-white rounded-3 overflow-hidden shadow h-100">

                    <img 
                        src="${recipe.image_url}" 
                        class="img-fluid w-100 recipe-img" 
                        alt="Recipe">

                    <p class="text-center p-2 m-0 fw-medium">
                        ${recipe.title}
                    </p>

                </div>
            </div>
        `;

        recipesContainer.innerHTML += cartona;

    });

}


searchSelect.addEventListener("change", function() {

    let searchValue = searchSelect.value;

    fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchValue}`)

        .then(function(response) {
            return response.json();
        })

        .then(function(data) {

            console.log(data);

            recipesContainer.innerHTML = "";

            displayRecipes(data.recipes);

        });

});