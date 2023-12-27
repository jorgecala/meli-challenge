const client = require('./client');

const author = {
  name: 'Jorge',
  lastname: 'Cala',
};

exports.getProductsList = async (query) => {
  const maxQuantity = 4;

  try {
    const response = await client.searchProducts(query, maxQuantity);
    const categories = response.filters?.[0]?.values?.[0]?.path_from_root?.map((category) => category.name) || [];

    const items = response.results.map((item) => {
      const [amount, decimals] = item.price.toString().split('.');

      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: parseInt(amount),
          decimals: decimals ? parseInt(decimals) : '00',
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
      };
    });

    return {
      author,
      categories,
      items,
    };
  } catch (error) {
    console.error(`Error fetching product list: ${error.message}`);
    throw new Error('Failed to fetch product list');
  }
};

exports.getProductDetail = async (query) => {
  try {
    const [item, description] = await client.getDataProductDetail(query);
    const [amount, decimals] = item.price.toString().split('.');

    return {
      author,
      item: {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: parseInt(amount),
          decimals: decimals ? parseInt(decimals) : '00',
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        sold_quantity: item.sold_quantity,
        description: description.plain_text,
      },
    };
  } catch (error) {
    console.error(`Error fetching product detail: ${error.message}`);
    throw new Error('Failed to fetch product detail');
  }
};
