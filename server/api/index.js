import express from 'express';
import adminRouter from './routes/admin';
import blogsRouter from './routes/blogs';
import bookingsRouter from './routes/bookings';
import substylesRouter from './routes/substyles';
import destinationsRouter from './routes/destinations';
import stylesRouter from './routes/styles';
import toursRouter from './routes/tours';
import careersRouter from './routes/careers';

const app = express();

app.use('/admins', adminRouter);
app.use('/blogs', blogsRouter);
app.use('/bookings', bookingsRouter);
app.use('/substyles', substylesRouter);
app.use('/destinations', destinationsRouter);
app.use('/styles', stylesRouter);
app.use('/tours', toursRouter);
app.use('/careers', careersRouter);

export default app;
