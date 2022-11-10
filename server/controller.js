const database = []

module.exports = {
    createGrocery: (req, res) => {
        const item = req.body.item
        const quantity = req.body.quantity

        let newGrocery = {
            item: item,
            quantity: quantity,
        }

        database.push(newGrocery)
        // console.log(database)
        res.status(200).send(database)
    },

    deleteAll: (req, res) => {
        database.splice(0, 1)
        // database = []
        console.log(database)
        res.status(200).send(database)
    },

    getMeal: (req, res) => {
        const meals = ["Tonkotsu Ramen", "Steak and Potatoes", "Tacos", "Spaghetti", "Stri Fry", "Fajitas", "BBQ Pork Sandwiches", "Wraps", "Chicken Wings", "Beef Stew", "Lemon Chicken" ];
        let randomIndex = Math.floor(Math.random() * meals.length);
        let randomMeal = meals[randomIndex];
      
        res.status(200).send(randomMeal);
    },
}