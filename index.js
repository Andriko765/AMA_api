const express = require('express');
const app = express();
const productsRoute = require('./products.route');

app.use('/api', productsRoute);

app.listen(5000, () => {
	console.log('Server is running on port 5000'); // Server listening on port 3000
});
