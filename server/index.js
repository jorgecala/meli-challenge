const express = require('express');
const cors = require('cors');
const services = require('./services');

const app = express();

// Middlewares
app.use(cors());

// Endpoints
app.get('/api/items', async (req, res) => {
  try {
    if (!req.query.q) return res.status(400).json({ error: 'Query parameter "q" is required' });
    const items = await services.getProductsList(req.query.q);
    res.json(items);
  } catch (error) {
    console.error(`Error fetching product list: ${error.message}`);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/items/:id', async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ error: 'Product ID is required' });
    }

    const item = await services.getProductDetail(req.params.id);
    res.json(item);
  } catch (error) {
    console.error(`Error fetching product detail: ${error.message}`);
    const status = error.status || 500;
    res.status(status).json({ error: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Listening for incoming connections on port ${PORT}`);
});
