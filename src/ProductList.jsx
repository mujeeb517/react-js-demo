import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './Loader';
import ProductItem from './ProductItem';
import { Link, useNavigate } from 'react-router-dom';
import ShouldRender from './ShouldRender';

function ProductList() {

    const [products, setProducts] = useState([]);
    const [hasError, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(function () {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return
        }
        const options = {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        axios.get('https://fakestoreapi.com/products', options)
            .then(res => setProducts(res.data))
            .catch(err => setError(true))
            .finally(() => setLoading(false));
    }, []);

    return <div>
        <ShouldRender cond={loading}>
            <Loader />
        </ShouldRender>
        <div className="flex justify-between">
            <h1 className="text-gray-600 text-2xl m-4 font-semibold">Product List</h1>
            <Link to="/products/new" className="border m-4 p-2 rounded border-orange-500 hover:bg-orange-600 hover:text-white">New Product</Link>
        </div>
        <ShouldRender cond={hasError}>
            <div style={{ backgroundColor: 'brown', color: 'white', padding: '8px' }}>
                Failed to load products, please try again
            </div>
        </ShouldRender>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {products.map(product => <ProductItem item={product} />)}
        </div>
    </div>;
}

export default ProductList;
