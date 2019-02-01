const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

const plantSeed = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/33316/magnolia-flowers-park-spring.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    plantName: "Magnolia",
    price: 35,
    stock: "40 in stock"
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/1034403/pexels-photo-1034403.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    plantName: "Bougainvillea",
    price: 14,
    stock: "20 in stock"
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1519966283370-ba7869cd01ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    plantName: "Kumquat Tree",
    price: 13,
    stock: "20 in stock"
  },
  {
    id: 4,
    image:
      "https://cdn.pixabay.com/photo/2017/12/24/08/14/fruit-3036563_1280.jpg",
    plantName: "Pomegranate",
    price: 12,
    stock: "12 in stock"
  },
  {
    id: 5,
    image:
      "https://cdn.pixabay.com/photo/2014/04/10/16/30/mango-321071_1280.jpg",
    plantName: "Mango Tree",
    price: 25,
    stock: "10"
  },
  {
    id: 6,
    image:
      "https://cdn.pixabay.com/photo/2018/10/07/06/44/persimmon-3729306_1280.jpg",
    plantName: "Persimmons",
    price: 15,
    stock: 10
  },
  {
    id: 7,
    image:
      "https://cdn.pixabay.com/photo/2017/08/11/17/41/peach-2632182_1280.jpg",
    plantName: "Peach",
    price: 20,
    stock: 12
  },
  {
    id: 8,
    image:
      "https://images.all-free-download.com/images/graphiclarge/img_3694_f_cf14_red_knockout_roses_winter_blooms_562781.jpg",
    plantName: "Knockout Rose",
    price: 10,
    stock: 40
  },
  {
    id: 9,
    image:
      "https://cdn.pixabay.com/photo/2012/11/12/18/12/camellia-65804_1280.jpg",
    plantName: "Camellia Tree",
    price: 12,
    stock: 13
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1547048115-ec9926503c93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
    plantName: "Hibiscus",
    price: 15,
    stock: 20
  },
  {
    id: 11,
    image:
      "https://i.pinimg.com/originals/74/70/16/7470166545fc0ef2fb4b60beebd60b25.jpg",
    plantName: "Azalea",
    price: 13,
    stock: 10
  },
  {
    id: 12,
    image:
      "https://cdn.pixabay.com/photo/2016/03/27/19/23/angel-trumpet-1283817_1280.jpg",
    plantName: "Angel Trumpet",
    price: 18,
    stock: 10
  },
  {
    id: 13,
    image:
      "https://cdn.pixabay.com/photo/2016/03/24/13/59/jasmine-1276801__340.jpg",
    plantName: "Confederate Jasmine",
    price: 12,
    stock: 10
  },
  {
    id: 14,
    image:
      "https://cdn.pixabay.com/photo/2017/02/16/14/36/croton-plant-2071620_960_720.jpg",
    plantName: "Croton Petra",
    price: 11,
    stock: 10
  },
  {
    id: 15,
    image:
      "https://mobileimages.lowes.com/product/converted/018902/018902822453.jpg",
    plantName: "Variegated Ginger",
    price: 8,
    stock: 10
  },
  {
    id: 16,
    image:
      "https://images.pexels.com/photos/5770/leaf-spring-leaves-plants.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
    plantName: "Green Ligustrum",
    price: 14,
    stock: 10
  },
  {
    id: 17,
    image:
      "https://www.thetreecenter.com/wp-content/uploads/phantom-hydrangea-2.jpg",
    plantName: "Phantom Hydrangea",
    price: 14,
    stock: 10
  },
  {
    id: 18,
    image:
      "https://images.unsplash.com/photo-1520618821905-f816063ce87e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    plantName: "Orchid Tree",
    price: 25,
    stock: 10
  },
  {
    id: 19,
    image:
      "https://previews.123rf.com/images/ruengrit/ruengrit1302/ruengrit130200020/17835358-yellow-tabebuia-tree.jpg",
    plantName: "Tabebuia",
    price: 17,
    stock: 10
  },
  {
    id: 20,
    image:
      "https://cdn.pixabay.com/photo/2018/04/18/22/25/nature-3331778_1280.jpg",
    plantName: "Plumbago",
    price: 9,
    stock: 10
  }
];

db.Book
  .then(() => db.Plant.collection.insertMany(plantSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
