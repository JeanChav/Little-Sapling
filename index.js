const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// styles.css connection
app.use(express.static('public'));


// Render routes 
app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/home', (req, res) => {
    res.render('home.ejs');
});

// Listener
app.listen(PORT, () => console.log(`Little Sapling App listening on port ${PORT}`));
