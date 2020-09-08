import models from '../models';

let LocationController = {
  AddLocation: async (req, res) => {
    /* Crear el modelo con los parametros del form */
    const location = new models.Location({
      latitud: req.body.latitud,
      longitud: req.body.longitud,
      conveyor: req.body.conveyor,
    });

    /* insertar el modelo a la BD */
    await location.save()
    .then(data => {
      res.send(data);
      console.log("Location created ...")
    });
  },
  Update: async (req, res) => {
    await models.Zone.findOneAndUpdate(
      {_id: req.params.id}, // find a document with that filter
      req.body, // document to insert
      {upsert: true, new: true, runValidators: true}, // options
      function (err, updatedZone) { // callback
          if (err) console.log('ERROR '+ err);
          else res.json(updatedZone)
      }
    );
    console.log("Zone updated ...")
  }
}

module.exports = LocationController;
