import express from 'express';
import adminRouter from './routes/admin';
import blogsRouter from './routes/blogs';
import bookingsRouter from './routes/bookings';
import citiesRouter from './routes/cities';
import destinationsRouter from './routes/destinations';
import stylesRouter from './routes/styles';
import toursRouter from './routes/tours';

const app = express();

app.use('/admins', adminRouter);
app.use('/blogs', blogsRouter);
app.use('/bookings', bookingsRouter);
app.use('/cities', citiesRouter);
app.use('/destinations', destinationsRouter);
app.use('/styles', stylesRouter);
app.use('/tours', toursRouter);

export default app;
