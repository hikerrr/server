import Blog from '../models/Blog';

const notAllowed = (req, res) => {
  res.status(405).json({status: false, msg: 'Method Not Allowed'});
};

const getOne = (req, res) => {
  Blog.findOne({linkName: req.params.linkName})
    .then((blog) => {
      if (blog) {
        return res.status(200).json(blog);
      }

      return res.status(404).json({status: false, msg: 'Content Not Found'});
    })
    .catch((err) =>
      res.status(500).json({status: false, msg: 'Internal Server Error'})
    );
};

const getAll = (req, res) => {
  Blog.find({})
    .then((blogs) => {
      if (blogs.length) {
        return res.status(200).json(blogs);
      }

      return res.status(404).json({status: false, msg: 'Content Not Found'});
    })
    .catch((err) =>
      res.status(500).json({status: false, msg: 'Internal Server Error'})
    );
};

const addOne = (req, res) => {
  if (
    !req.body.linkName ||
    !req.body.author ||
    !req.body.title ||
    !req.body.content
  ) {
    return res
      .status(400)
      .json({status: false, msg: 'Missing Required Content'});
  }

  Blog.findOne({linkName: req.body.linkName})
    .then((blog) => {
      if (blog) {
        return res
          .status(409)
          .json({status: false, msg: 'Content Already Exists'});
      }

      const newBlog = new Blog({
        linkName: req.body.linkName,
        author: req.body.author,
        title: req.body.title,
        imageName: req.body.imageName || '',
        imageCaption: req.body.imageCaption || '',
        content: req.body.content,
        readTime: req.body.readTime || 0,
        writingDate: req.body.writingDate || Date.now(),
      });

      newBlog
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
    Blog.findOne({linkName: req.body.linkName}).then((blog) => {
      if (blog) {
        return res
          .status(409)
          .json({status: false, msg: 'Content Already Exists'});
      }

      Blog.updateOne({linkName: req.params.linkName}, req.body)
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
    Blog.updateOne({linkName: req.params.linkName}, req.body)
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
  Blog.deleteOne({linkName: req.params.linkName})
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
  Blog.remove({})
    .then((deleteResult) => {
      if (deleteResult.deletedCount) {
        return res.status(204).json(getAll(req, res));
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
