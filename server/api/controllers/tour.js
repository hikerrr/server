import Tour from '../models/Tour';

const notAllowed = (req, res) => {
  res.status(405).json({status: false, msg: 'Method Not Allowed'});
};

const getOne = (req, res) => {
  Tour.findOne({linkName: req.params.linkName})
    .then((tour) => {
      if (tour) {
        return res.status(200).json(tour);
      }

      return res.status(404).json({status: false, msg: 'Content Not Found'});
    })
    .catch((err) =>
      res.status(500).json({status: false, msg: 'Internal Server Error'})
    );
};

const getAll = (req, res) => {
  Tour.find({})
    .then((tours) => {
      if (tours.length) {
        return res.status(200).json(tours);
      }

      return res.status(404).json({status: false, msg: 'Content Not Found'});
    })
    .catch((err) =>
      res.status(500).json({status: false, msg: 'Internal Server Error'})
    );
};

const addOne = (req, res) => {
  if (!req.body.linkName || !req.body.heading || !req.body.caption) {
    return res
      .status(400)
      .json({status: false, msg: 'Missing Required Content'});
  }

  Tour.findOne({linkName: req.body.linkName})
    .then((tour) => {
      if (tour) {
        return res
          .status(409)
          .json({status: false, msg: 'Content Already Exists'});
      }

      const newTour = new Tour({
        linkName: req.body.linkName,
        heading: req.body.heading,
        caption: req.body.caption,
        imageName: req.body.imageName || '',
        imageCaption: req.body.imageCaption || '',
        holidayLength: req.body.holidayLength,
        holidayType: req.body.holidayType,
        bestTimeToGo: req.body.bestTimeToGo,
        priceMin: req.body.priceMin,
        priceMax: req.body.priceMax,
        itinerary: req.body.itinerary || [],
        formImage: req.body.formImage,
        status: req.body.status,
        itineraryImages: req.body.itineraryImages || []

      });

      newTour
        .save()
        .then((saved) => {
          if (saved) {
            return getAll(req, res);
          }

          return res
            .status(500)
            .json({status: false, msg: 'Internal Server Error'});
        })
        .catch((err) =>
          res.status(500).json({status: false, msg: 'Internal Server Error', err:err})
        );
    })
    .catch((err) =>
      res.status(500).json({status: false, msg: 'Internal Server Error'})
    );
};

const updateOne = (req, res) => {
  if (req.body.linkName && req.params.linkName != req.body.linkName) {
    Tour.findOne({linkName: req.body.linkName}).then((tour) => {
      if (tour) {
        return res
          .status(409)
          .json({status: false, msg: 'Content Already Exists'});
      }

      Tour.updateOne({linkName: req.params.linkName}, req.body)
        .then((updateResult) => {
          if (updateResult.nModified) {
            return getAll(req, res);
          }

          return res
            .status(404)
            .json({status: false, msg: 'Content Not Found'});
        })
        .catch((err) =>
          res.status(500).json({status: false, msg: 'Internal Server Error'})
        );
    });
  } else {
    Tour.updateOne({linkName: req.params.linkName}, req.body)
      .then((updateResult) => {
        if (updateResult.nModified) {
          return getAll(req, res);
        }

        return res.status(404).json({status: false, msg: 'Content Not Found'});
      })
      .catch((err) =>
        res.status(500).json({status: false, msg: 'Internal Server Error'})
      );
  }
};

const deleteOne = (req, res) => {
  Tour.deleteOne({linkName: req.params.linkName})
    .then((deleteResult) => {
      if (deleteResult.deletedCount) {
        return getAll(req, res);
      }

      return res.status(404).json({status: false, msg: 'Content Not Found'});
    })
    .catch((err) =>
      res.status(500).json({status: false, msg: 'Internal Server Error'})
    );
};

const deleteAll = (req, res) => {
  Tour.remove({})
    .then((deleteResult) => {
      if (deleteResult.deletedCount) {
        return res.status(204).json({status: true, msg: 'Content Deleted'});
      }

      return res.status(404).json({status: false, msg: 'Content Not Found'});
    })
    .catch((err) =>
      res.status(500).json({status: false, msg: 'Internal Server Error'})
    );
};

// 400 bad request (invalid content)
// 401 unauthorized (requires authentication)
// 403 forbidden (not allowed)
// 404 not found
// 405 request method not allowed for given URL
// 409 conflict (data aleady exists)
// 500 internal server error

export default {
  getOne,
  getAll,
  addOne,
  updateOne,
  deleteOne,
  deleteAll,
  notAllowed,
};
