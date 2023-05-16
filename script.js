function pizzaOven(crusttype, saucetype, cheeses, toppings) {
    var pizza = {};
    pizza.crusttype = crusttype;
    pizza.saucetype = saucetype;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deepdish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olive", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("thin crust", "barbeque", ["mozzarella", "parmesan"], ["chicken", "bacon", "onions"]);
console.log(pizza3);

var pizza4 = pizzaOven("stuffed crust", "garlic parmesan", ["parmesan", "feta"], ["mushrooms", "spinach", "garlic"]);
console.log(pizza4);

// Bonus Challenge

var pizzatops = {
    "crusttype": ["deepdish", "hand tossed", "thin crust", "stuffed crust"],
    "saucetype": ["traditional", "marinara", "barbeque", "garlice parmesan"],
    "cheeses": ["mozzarella", "feta", "parmesan"],
    "toppings": ["pepperoni", "sausage", "mushrooms", "olive", "onions", "chicken", "bacon", "spinach", "garlic"]
}

function randomPizza(crusttype, saucetype, cheeses, toppings) {
    var pizzatops = {
        "crusttype": ["deepdish", "hand tossed", "thin crust", "stuffed crust"],
        "saucetype": ["traditional", "marinara", "barbeque", "garlice parmesan"],
        "cheeses": ["mozzarella", "feta", "parmesan"],
        "toppings": ["pepperoni", "sausage", "mushrooms", "olive", "onions", "chicken", "bacon", "spinach", "garlic"]
    }
    var pizza = {};

    var crustrng = Math.floor(Math.random() * pizzatops.crusttype.length);
    crusttype = pizzatops.crusttype[crustrng];
    pizza.crusttype = crusttype;

    var saucerng = Math.floor(Math.random() * pizzatops.saucetype.length);
    saucetype = pizzatops.saucetype[saucerng];
    pizza.saucetype = saucetype;

    var cheeserng = Math.floor(Math.random() * pizzatops.cheeses.length);
    cheeses = pizzatops.cheeses[cheeserng];
    pizza.cheeses = cheeses;

    var toppingsrng = Math.floor(Math.random() * pizzatops.toppings.length);
    toppings = pizzatops.toppings[toppingsrng];
    pizza.toppings = toppings;

    return pizza;
}

var pizzapls = randomPizza();

console.log(pizzapls);

