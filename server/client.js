const https = require('https');

function request(url) {
  return new Promise((resolve, reject) => {
    let body = '';

    https
      .get(url, (response) => {
        response.on('data', (chunk) => {
          body += chunk;
        });
        response.on('end', () => {
          try {
            const json = JSON.parse(body);
            resolve(json);
          } catch (error) {
            reject(error);
          }
        });
      })
      .on('error', (error) => {
        console.error(`Error when making request: ${error.message}`);
        reject(error);
      });
  });
}

exports.searchProducts = (query, maxQuantity) => {
  return request(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=${maxQuantity}`);
};

exports.getDataProductDetail = (query) => {
  const itemRequest = request(`https://api.mercadolibre.com/items/${query}`);
  const descriptionRequest = request(`https://api.mercadolibre.com/items/${query}/description`);

  return Promise.all([itemRequest, descriptionRequest]);
};
