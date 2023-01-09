const express = require("express");
const router = express.Router();

const products = require("../data/Products");

router.get("/", (req, res) => {
	res.send("this is api main thingy");
});

// all products
router.get("/products", (req, res) => {
	res.json(products);
});

//single product
router.get("/product/:id", (req, res) => {
	const product = products.find((p) => p._id === req.params.id);
	res.json(product);
});

module.exports = router;
