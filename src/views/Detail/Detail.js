import React, { useState, useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';
import ProductDetail from '../../components/ProductDetail/ProductDetail';

const API_BASE_URL = 'http://localhost:9000/api/items';

const Detail = ({ match }) => {
  const id = match.params.id;
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error('Error al cargar el detalle del ítem.');
        return response.json();
      })
      .then((data) => {
        if (!data.error) setItem(data.item);
        else throw new Error(data.error.message || 'Error desconocido.');
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) return <p>Cargando detalle...</p>;
  if (error) return <p>Error: {error}</p>;

  return <div className="detail-view">{!isEmpty(item) && <ProductDetail item={item} />}</div>;
};

export default Detail;
