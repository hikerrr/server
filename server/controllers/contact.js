const listAll = (req, res) => {
  try {
    const data = {
      title: 'Contact',
      navColor: 'var(--color-dark)',
      imageUrl: process.env.AWS_IMAGE_URL,
    };

    res.render('contact', {data});
  } catch (Error) {
    res.status(500).json(Error);
  }
};

export default {listAll};
