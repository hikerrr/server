import axios from 'axios';
import nodemailer from 'nodemailer';

const listAll = (req, res) => res.redirect('/#blogs');

const listOne = async (req, res) => {
  try {
    const apiUrl = process.env.API_URL;

    const trip = await axios.get(`${apiUrl}/tours/${req.params.linkName}`);

    const data = {
      title: 'Tours',
      trip: trip.data,
      imageUrl: process.env.AWS_IMAGE_URL,
    };

    return res.render('tours', {data});
  } catch (Error) {
    return res.status(500).json(Error);
  }
};

const bookTour = async (req, res) => {
  const apiUrl = process.env.API_URL;

  const transporter = nodemailer.createTransport({
    service: 'Godaddy',
    host: 'smtp.office365.com',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: req.body.email,
    subject: 'Hikerr Booking Notice',
    text: '',
    html: `Your booking information was successfully recieved <br /><br />
    <b>Name</b> ${req.body.firstName} ${req.body.lastName}
    <b>Phone</b> ${req.body.phone}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    const response = await axios.post(`${apiUrl}/bookings/`, req.body);

    if (response.status === 200) {
      const data = {
        navColor: 'var(--color-dark)',
        title: 'Form Submission',
        heading: 'We gotch your request!',
        msg: 'We will get back to you shortly',
      };

      mailOptions = {
        from: process.env.EMAIL,
        to: process.env.SELF_EMAIL,
        subject: 'Booking recieved',
        text: '',
        html: `Booking information recieved for <br /><br />
        <b>Tour</b> ${req.body.title}
        <b>Name</b> ${req.body.firstName} ${req.body.lastName}
        <b>Phone</b> ${req.body.phone}
        <b>Discount Code</b> ${req.body.discountCode || 'NA'}`,
      };

      await transporter.sendMail(mailOptions);
      return res.render('notify', {data});
    }
    if (response.status === 409) {
      const data = {
        navColor: 'var(--color-dark)',
        title: 'Form Submission',
        heading: 'Booking already present for these credentials!',
        msg: 'If you think this is a problem. You can send us an email.',
      };
      return res.render('notify', {data});
    }
    throw new Error('Insufficient data error.');
  } catch {
    const data = {
      navColor: 'var(--color-dark)',
      title: 'Form Submission',
      heading: `There was a problem booking your tour!${err.message}`,
      msg: 'You can send us an email.',
    };
    return res.render('notify', {data});
  }
};

export default {listOne, listAll, bookTour};
