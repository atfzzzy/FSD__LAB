const express = require('express');
const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.set('views', __dirname);

// Middleware to parse form data (URL-encoded) from POST requests
app.use(express.urlencoded({ extended: true }));

// Route to display the form
app.get('/', (req, res) => {
    
    res.render('index', {
        title: 'User Registration',
        error: null,
        user: null
    });
});


app.post('/register', (req, res) => {
    const { username, age } = req.body;

    
    let errorMessage = null;

    if (!username || username.length < 3) {
        errorMessage = 'Username must be at least 3 characters long.';
    } else if (!age || isNaN(age) || age < 18) {
        errorMessage = 'You must be at least 18 years old.';
    }

    if (errorMessage) {
        // If validation fails, re-render the form with the error message
        res.render('index', {
            title: 'Registration Failed',
            error: errorMessage,
            user: null
        });
    } else {
        // If validation passes, render the success state
        res.render('index', {
            title: 'Registration Successful',
            error: null,
            user: username
        });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});