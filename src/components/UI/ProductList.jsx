import React from 'react';
import ProductCard from "./ProductCard";

const ProductList = ({data}) => {
    return (
        <>
            {
                data?.map((item, idx) => (
                    <ProductCard item={item} key={idx}/>
                ))
            }

        </>
    );
};

export default ProductList;