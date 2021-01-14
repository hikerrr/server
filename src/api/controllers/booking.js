import Booking from '../models/Booking';

const notAllowed = (req, res) => {
  res.status(405).json({status: false, msg: 'Method Not Allowed'});
};

const getOne = (req, res) => {
  Booking.findOne({_id: req.params._id})
    .then((booking) => {
      if (booking) {
        return res.status(200).json(booking);
      }

      return res.status(404).json({status: false, msg: 'Content Not Found'});
    })
    .catch((err) =>
      res.status(500).json({status: false, msg: 'Internal Server Error'})
    );
};

const getAll = (req, res) => {
  Booking.find({})
    .then((bookings) => {
      if (bookings.length) {
        return res.status(200).json(bookings);
      }

      return res.status(404).json({status: false, msg: 'Content Not Found'});
    })
    .catch((err) =>
      res.status(500).json({status: false, msg: 'Internal Server Error'})
    );
};

const addOne = (req, res) => {
  if (
    !req.body.title ||
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.phone ||
    !req.body.gender ||
    !req.body.email ||
    !req.body.departure
  ) {
    return res
      .status(400)
      .json({status: false, msg: 'Missing Required Content'});
  }

  Booking.findOne({title: req.body.title, phone: req.body.phone})
    .then((booking) => {
      if (booking) {
        return res
          .status(409)
          .json({status: false, msg: 'Content Already Exists'});
      }

      const newBooking = new Booking({
        title: req.body.title,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        gender: req.body.gender,
        departure: req.body.departure,
        discountCode: req.body.discountCode || 'NA',
      });

      newBooking
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
  if (req.body.title || req.body.phone) {
    const query = {};
    if (req.body.title) query.title = req.body.title;
    if (req.body.phone) query.phone = req.body.phone;
    Booking.findOne(query).then((booking) => {
      if (booking && booking._id != req.params._id) {
        return res
          .status(409)
          .json({status: false, msg: 'Content Already Exists'});
      }

      Booking.updateOne({_id: req.params._id}, req.body)
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
    Booking.updateOne({_id: req.params._id}, req.body)
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
  Booking.deleteOne({_id: req.params._id})
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
  Booking.remove({})
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
