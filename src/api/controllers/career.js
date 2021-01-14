import Career from '../models/Career';

const notAllowed = (req, res) => {
  res.status(405).json({status: false, msg: 'Method Not Allowed'});
};

const getOne = (req, res) => {
  Career.findOne({linkName: req.params.linkName})
    .then((career) => {
      if (career) {
        return res.status(200).json(career);
      }

      return res.status(404).json({status: false, msg: 'Content Not Found'});
    })
    .catch((err) =>
      res.status(500).json({status: false, msg: 'Internal Server Error'})
    );
};

const getAll = (req, res) => {
  Career.find({})
    .then((careers) => {
      if (careers.length) {
        return res.status(200).json(careers);
      }

      return res.status(404).json({status: false, msg: 'Content Not Found'});
    })
    .catch((err) =>
      res.status(500).json({status: false, msg: 'Internal Server Error'})
    );
};

const addOne = (req, res) => {
  if (!req.body.linkName || !req.body.name || !req.body.description) {
    return res
      .status(400)
      .json({status: false, msg: 'Missing Required Content'});
  }

  Career.findOne({linkName: req.body.linkName})
    .then((career) => {
      if (career) {
        return res
          .status(409)
          .json({status: false, msg: 'Content Already Exists'});
      }

      const newCareer = new Career({
        linkName: req.body.linkName,
        name: req.body.name,
        description: req.body.description,
        functionalAreas: req.body.functionalAreas || '',
        experience: req.body.experience || '',
        mailSubject: req.body.mailSubject || '',
      });

      newCareer
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
    Career.findOne({linkName: req.body.linkName}).then((career) => {
      if (career) {
        return res
          .status(409)
          .json({status: false, msg: 'Content Already Exists'});
      }

      Career.updateOne({linkName: req.params.linkName}, req.body)
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
    Career.updateOne({linkName: req.params.linkName}, req.body)
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
  Career.deleteOne({linkName: req.params.linkName})
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
  Career.remove({})
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
