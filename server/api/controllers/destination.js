import Destination from '../models/Destination';

const notAllowed = (req, res) => {
  res.status(405).json({status: false, msg: 'Method Not Allowed'});
};

const getOne = (req, res) => {
  Destination.findOne({linkName: req.params.linkName})
    .populate({path: 'tours', model: 'Tour'})
    .populate({path: 'blog', model: 'Blog'})
    .then((destination) => {
      if (destination) {
        return res.status(200).json(destination);
      }

      return res.status(404).json({status: false, msg: 'Content Not Found'});
    })
    .catch((err) =>
      res.status(500).json({status: false, msg: 'Internal Server Error'})
    );
};

const getAll = (req, res) => {
  Destination.find({})
    .populate({path: 'tours', model: 'Tour'})
    .populate({path: 'blog', model: 'Blog'})
    .then((destinations) => {
      if (destinations.length) {
        return res.status(200).json(destinations);
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

  Destination.findOne({linkName: req.body.linkName})
    .then((destination) => {
      if (destination) {
        return res
          .status(409)
          .json({status: false, msg: 'Content Already Exists'});
      }

      const newDestination = new Destination({
        linkName: req.body.linkName,
        heading: req.body.heading,
        caption: req.body.caption,
        imageName: req.body.imageName || '',
        imageCaption: req.body.imageCaption || '',
        tours: req.body.tours || [],
        blog: req.body.blog,
      });

      newDestination
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
          res.status(500).json({status: false, msg: 'Internal Server Error'})
        );
    })
    .catch((err) =>
      res.status(500).json({status: false, msg: 'Internal Server Error'})
    );
};

const updateOne = (req, res) => {
  if (req.body.linkName && req.params.linkName != req.body.linkName) {
    Destination.findOne({linkName: req.body.linkName}).then((destination) => {
      if (destination) {
        return res
          .status(409)
          .json({status: false, msg: 'Content Already Exists'});
      }

      if (!req.body.tours) req.body.tours = [];
      Destination.updateOne({linkName: req.params.linkName}, req.body, {
        $set: {tours: req.body.tours},
      })
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
    if (!req.body.tours) req.body.tours = [];
    Destination.updateOne({linkName: req.params.linkName}, req.body, {
      $set: {tours: req.body.tours},
    })
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
  Destination.deleteOne({linkName: req.params.linkName})
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
  Destination.remove({})
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
