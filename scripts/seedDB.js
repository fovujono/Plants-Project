const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/plants");

const plantSeed = [
  {
    image:
      "https://images.pexels.com/photos/33316/magnolia-flowers-park-spring.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    plantName: "Magnolia",
    price: 35,
    stock: 40,
    description: "Magnolia's require little care. They are resistant to many diseases and pests. They can survive hot summers and cold winters. Look great year-round. Can grow to be large tree's or can be kept short by pruning",
    water: "Water: once a week during the first two growing seasons and twice a month in subsequent years. ",
    sunlight: "Sunlight : Full sun to partial shade"

  },
  {
    image:
      "https://images.pexels.com/photos/1034403/pexels-photo-1034403.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    plantName: "Bougainvillea",
    price: 14,
    stock: 20,
    description: "Beautiful vine with strong vibrant flowers, they grow fast, and thrive in warmer temperatures so make sure to cover them up during harsh winters.",
    water: "Water: Water daily if in pot, if in ground once-twice a week",
    sunlight: "Sunlight : Full sun to produce beatiful colorful flowers"
  },
  {
    image:
      "https://images.unsplash.com/photo-1519966283370-ba7869cd01ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    plantName: "Kumquat Tree",
    price: 13,
    stock: 20,
    description: "Produces the Kumquat fruit. Kumquats have edible skin and the juice is tart, it is common to squeeze the juice out of the fruit if you don't like the tart taste then eat the rest which is sweet.",
    water: "Water : Younger trees need moist soil to grow, once established water less often and during dry weather.",
    sunlight: "Sunlight : Full sun"
  },
  {
    image:
      "https://media.istockphoto.com/photos/ripe-pomegranates-on-tree-picture-id502425210?k=6&m=502425210&s=612x612&w=0&h=z65ssaJN_embPxD0j3YjKQMMiDpxotpwdoobH9WrjKM=",
    plantName: "Pomegranate Tree",
    price: 12,
    stock: 12,
    description: "This tree bares fruit which has edible seeds. Taste can vary from a slightly sour to a sharp stronger taste.",
    water: "Water: Three to four times a week untill established then, once every ten days",
    sunlight: "Sunlight : Full sun"
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2014/04/10/16/30/mango-321071_1280.jpg",
    plantName: "Mango Tree",
    price: 25,
    stock: 10,
    description: "Ripe mango fruits have a rich and sweet taste to them. Mango trees thrive in warmer tropical weather.",
    water: "Water: Lots of water daily until established, then water at least three times a week.",
    sunlight: "Sunlight or shade: Full sun"
  },
  {
    image:
      "https://images.pexels.com/photos/221094/pexels-photo-221094.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    plantName: "Persimmons",
    price: 15,
    stock: 10,
    description: "When a persimmon fruit is ripe the taste is sweet and has a honeyed flavor. Some people use the persimmon tree's wood to make golf club heads or billard cues and even house floors.",
    water: "Water: To produce good fruit water for at least 10 minutes once-twice a week.",
    sunlight: "Sunlight or shade: Full sun"
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2017/08/11/17/41/peach-2632182_1280.jpg",
    plantName: "Peach",
    price: 20,
    stock: 12,
    description: "a",
    water: "Water: Water everyday for thirty days until established. After thirty days every other day.",
    sunlight: "Sunlight or shade: Full sun"
  },
  {
    image:
      "https://images.all-free-download.com/images/graphiclarge/img_3694_f_cf14_red_knockout_roses_winter_blooms_562781.jpg",
    plantName: "Knockout Rose",
    price: 10,
    stock: 40,
    description: "a",
    water: "Water: Water every other day.",
    sunlight: "Sunlight or shade: Full sun or partial shade."
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2012/11/12/18/12/camellia-65804_1280.jpg",
    plantName: "Camellia Tree",
    price: 12,
    stock: 13,
    description: "a",
    water: "Water: ",
    sunlight: "Sunlight or shade:"
  },
  {
    image:
      "https://images.unsplash.com/photo-1547048115-ec9926503c93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
    plantName: "Hibiscus",
    price: 15,
    stock: 20,
    description: "a",
    water: "Water: Hibiscus needs a lot of water to stay healthly. Water everyday if possible. ",
    sunlight: "Sunlight or shade: Full sun"
  },
  {
    image:
      "https://i.pinimg.com/originals/74/70/16/7470166545fc0ef2fb4b60beebd60b25.jpg",
    plantName: "Azalea",
    price: 13,
    stock: 10,
    description: "a",
    water: "Water: Every day for thirty days until established. Every other day after established.",
    sunlight: "Sunlight or shade: Partial shade"
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/03/27/19/23/angel-trumpet-1283817_1280.jpg",
    plantName: "Angel Trumpet",
    price: 18,
    stock: 10,
    description: "a",
    water: "Water:  Every day for thirty days until established. Every other day after established.",
    sunlight: "Sunlight or shade: Full sun."
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/03/24/13/59/jasmine-1276801__340.jpg",
    plantName: "Confederate Jasmine",
    price: 12,
    stock: 10,
    description: "a",
    water: "Water: Every day for thirty days until established. Every other day after established.",
    sunlight: "Sunlight or shade: Full sun"
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2017/02/16/14/36/croton-plant-2071620_960_720.jpg",
    plantName: "Croton Petra",
    price: 11,
    stock: 10,
    description: "a",
    water: "Water: Every day for thirty days until established. Every other day after established.",
    sunlight: "Sunlight or shade: Partial shade"
  },
  {
    image:
      "https://mobileimages.lowes.com/product/converted/018902/018902822453.jpg",
    plantName: "Variegated Ginger",
    price: 8,
    stock: 10,
    description: "a",
    water: "Water: Every day for thirty days until established. Every other day after established.",
    sunlight: "Sunlight or shade: Partial shade."
  },
  {
    image:
      "https://images.pexels.com/photos/5770/leaf-spring-leaves-plants.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
    plantName: "Green Ligustrum",
    price: 14,
    stock: 10,
    description: "a",
     water: "Water: Every day for thirty days until established. Every other day after established."",
    sunlight: "Sunlight or shade: Full sun"
  },
  {
    image:
      "https://www.thetreecenter.com/wp-content/uploads/phantom-hydrangea-2.jpg",
    plantName: "Phantom Hydrangea",
    price: 14,
    stock: 10,
    description: "a",
    water: "Water: Every day for thirty days until established. Every other day after established.",
    sunlight: "Sunlight or shade: Partial shade."
  },
  {
    image:
      "https://images.unsplash.com/photo-1520618821905-f816063ce87e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    plantName: "Orchid Tree",
    price: 25,
    stock: 10,
    description: "a",
    water: "Water: Every day for thirty days until established. Every other day after established.",
    sunlight: "Sunlight or shade: Full sun"
  },
  {
    image:
      "https://previews.123rf.com/images/ruengrit/ruengrit1302/ruengrit130200020/17835358-yellow-tabebuia-tree.jpg",
    plantName: "Tabebuia",
    price: 17,
    stock: 10,
    description: "a",
    water: "Water: Every day for thirty days until established. Every three days after that.",
    sunlight: "Sunlight or shade:"
  },
  {
    image:
      "https://img.freepik.com/free-photo/plumbago-auriculata_38897-3.jpg?size=626&ext=jpg",
    plantName: "Plumbago",
    price: 9,
    stock: 10,
    description: "a",
    water: "Water: Every day for thirty days until established. Every other day after established.",
    sunlight: "Sunlight or shade: Full sun"
  }
];

db.Plant.remove({})
  .then(() => db.Plant.collection.insertMany(plantSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
