const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

app.get('/', (req,res) => {res.send('API Running');});
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//defining routes
app.use('/users', require('./routes/api/users'));
app.use('/auth', require('./routes/api/auth'));
app.use('/profile', require('./routes/api/profile'));
app.use('/post', require('./routes/api/post'));