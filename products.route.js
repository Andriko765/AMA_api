const express = require('express');
const router = express.Router();
const db = require('./db');
const cors = require('cors');
const mongoose = require('mongoose');

// Apply CORS middleware

router.use(cors());

// Mock data for demonstration purposes
router.get('/products', async (req, res) => {
	try {
		const collections = await db.db.listCollections().toArray();
		const products = [];

		for (const collection of collections) {
			const collectionName = collection.name;
			let model = mongoose.models[collectionName];

			if (!model) {
				model = mongoose.model(
					collectionName,
					new mongoose.Schema({}, { strict: false })
				);
			}
			const collectionProducts = await model.find().exec();

			if (collectionProducts.length > 0) {
				products.push({ collectionName, products: collectionProducts });
			}
		}

		res.json(products);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Error fetching products' });
	}
});

module.exports = router;
