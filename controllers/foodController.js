var Food = require('../models/food')

//create
exports.create = (req, res, next) => {
  var newFood = Food({
    name: req.body.name,
    price: req.body.price,
    expired_date: req.body.expired_date
  })

  newFood.save( (err, food) => {
    if(err) res.send(err);

    res.send(food);
  })
}

//read
exports.get_foods = (req, res, next) => {
  Food.find({}, (err, foods) => {
    if(err) res.send(err);

    res.send(foods);
  })
}

exports.get_food = (req, res, next) => {
  Food.findById(req.params.id, (err, food) => {
    if(err) res.send(err);

    res.send(food);
  })
}

//update
exports.update = (req, res, next) => {
  Food.findById(req.params.id, (err, food) => {
    if(err) res.send(err);

    food.name = req.body.name || food.name;
    food.price = req.body.price || food.price;
    food.expired_date = req.body.expired_date || food.expired_date;

    food.save( (err, food) => {
      if(err) res.send(err)
      res.send(food);
    })

  })
}

//delete
exports.delete = (req, res, next) => {
  Food.findByIdAndRemove( req.params.id, (err, food) => {
    if(err) res.send(err);
    
    var message = {
      message: "Food has been deleted.",
      id: food._id
    }

    res.send(message);
  })
}
//
