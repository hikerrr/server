const listAll = (req, res) => {
  const data = {
    title: 'Terms & Conditions',
    navColor: 'var(--color-dark)',
    imageUrl: process.env.AWS_IMAGE_URL,
  };
  res.render('terms', {data});
};

export default {listAll};
