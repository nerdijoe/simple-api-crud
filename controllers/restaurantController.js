var Restaurant = require('../models/restaurant')

//create
exports.create = (req, res, next) => {
  var newResto = Restaurant({
    name: req.body.name,
    owner: req.body.owner,
    address: req.body.address,
    open_status: req.body.open_status
  })

  newResto.save( (err, resto) => {
    if(err) res.send(err);

    res.send(resto);
  })
}

//read
exports.get_restos = (req, res, next) => {
  Restaurant.find({}, (err, restos) => {
    if(err) res.send(err);

    res.send(restos);
  })
}

exports.get_resto = (req, res, next) => {
  Restaurant.findById(req.params.id, (err, resto) => {
    if(err) res.send(err);

    res.send(resto);
  })
}

//update
exports.update = (req, res, next) => {
  Restaurant.findById(req.params.id, (err, resto) => {
    if(err) res.send(err);
    else {
      resto.name = req.body.name || resto.name;
      resto.owner = req.body.owner || resto.owner;
      resto.address = req.body.address || resto.address;
      resto.open_status = req.body.open_status || resto.open_status;

      resto.save( (err, resto) => {
        if(err) res.send(err)
        res.send(resto);
      })
    }
  })
}

//delete
exports.delete = (req, res, next) => {
  Restaurant.findByIdAndRemove( req.params.id, (err, resto) => {
    if(err) res.send(err);
    else {
      var message = {
        message: "Restaurant has been deleted.",
        id: resto._id
      }

      res.send(message);
    }
  })
}
