import Style from '../models/Style';

const notAllowed = (req, res) => {
  res.status(405).json({status: false, msg: 'Method Not Allowed'});
};

const getOne = (req, res) => {
  Style.findOne({linkName: req.params.linkName})
    .populate({
      path: 'substyles',
      model: 'Substyle',
      populate: {path: 'tours', model: 'Tour'},
    })
    .populate({path: 'tours', model: 'Tour'})
    .then((style) => {
      if (style) {
        return res.status(200).json(style);
      }

      return res.status(404).json({status: false, msg: 'Content Not Found'});
    })
    .catch((err) =>
      res.status(500).json({status: false, msg: 'Internal Server Error'})
    );
};

const getAll = (req, res) => {
  Style.find({})
    .populate({
      path: 'substyles',
      model: 'Substyle',
      populate: {path: 'tours', model: 'Tour'},
    })
    .populate({path: 'tours', model: 'Tour'})
    .then((styles) => {
      if (styles.length) {
        return res.status(200).json(styles);
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

  Style.findOne({linkName: req.body.linkName})
    .then((style) => {
      if (style) {
        return res
          .status(409)
          .json({status: false, msg: 'Content Already Exists'});
      }

      const newStyle = new Style({
        linkName: req.body.linkName,
        heading: req.body.heading,
        caption: req.body.caption,
        imageName: req.body.imageName || '',
        imageCaption: req.body.imageCaption || '',
        substyles: req.body.substyles || [],
        tours: req.body.tours || [],
      });

      newStyle
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
    Style.findOne({linkName: req.body.linkName}).then((style) => {
      if (style) {
        return res
          .status(409)
          .json({status: false, msg: 'Content Already Exists'});
      }

      if (!req.body.tours) req.body.tours = [];
      if (!req.body.substyles) req.body.substyles = [];
      Style.updateOne({linkName: req.params.linkName}, req.body, {
        $set: {substyles: req.body.substyles, tours: req.body.tours},
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
    if (!req.body.substyles) req.body.substyles = [];
    Style.updateOne({linkName: req.params.linkName}, req.body, {
      $set: {substyles: req.body.substyles, tours: req.body.tours},
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
  Style.deleteOne({linkName: req.params.linkName})
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
  Style.remove({})
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
