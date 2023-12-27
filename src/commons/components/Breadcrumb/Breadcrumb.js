import React from 'react';
import './Breadcrumb.scss';

const Breadcrumb = ({ categories = [] }) => {
  // Validate that categories is an array before continuing
  if (!Array.isArray(categories) || categories.length === 0) return <div className="breadcrumb breadcrumb__empty">No categories available.</div>;

  return (
    <ol className="breadcrumb">
      {categories.map((category) => (
        <li className="breadcrumb__item" key={category}>
          {category}
        </li>
      ))}
    </ol>
  );
};

export default Breadcrumb;
