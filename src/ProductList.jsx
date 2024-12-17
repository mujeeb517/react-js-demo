import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './Loader';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';

function ProductList() {

    const [products, setProducts] = useState([]);
    const [hasError, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        setTimeout(() => {
            axios.get('https://fakestoreapi.com/products')
                .then(res => setProducts(res.data))
                .catch(err => setError(true))
                .finally(() => setLoading(false));
        }, 3000);
    }, []);

    return <div>
        {loading && <Loader />}
        <div className="flex justify-between">
            <h1 className="text-gray-600 text-2xl m-4 font-semibold">Product List</h1>
            <Link to="/products/new" className="border m-4 p-2 rounded border-orange-500 hover:bg-orange-600 hover:text-white">New Product</Link>
        </div>
        {hasError &&
            <div style={{ backgroundColor: 'brown', color: 'white', padding: '8px' }}>
                Failed to load products, please try again
            </div>
        }
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {products.map(product => <ProductItem item={product} />)}
        </div>
    </div>;
}

export default ProductList;
