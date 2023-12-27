import React, { useState, useEffect } from 'react';
import ProductsList from '../../components/ProductsList/ProductsList';
import Breadcrumb from '../../commons/components/Breadcrumb/Breadcrumb';

const API_BASE_URL = 'http://localhost:9000/api/items';

const Search = ({ search }) => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}?q=${search}`)
      .then((response) => {
        if (!response.ok) throw new Error('Error al cargar los datos.');
        return response.json();
      })
      .then((data) => {
        if (!data.error) {
          setItems(data.items);
          setCategories(data.categories);
        } else throw new Error(data.error.message || 'Error desconocido.');
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [search]);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Breadcrumb categories={categories} />
      <ProductsList items={items} />
    </>
  );
};

export default Search;
