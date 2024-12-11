import React from 'react';
import axios from 'axios';

const ProductItem = ({ item }) => <div class="max-w-sm bg-white rounded-lg shadow mb-8">
    <a href="#">
        <img class="rounded-t-lg" src={item.image} alt={item.title} />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{item.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700">{item.description}</p>
        <div className="text-lg text-gray-600 font-bold">${item.price}</div>
        <div className="flex">
            <button className="flex space-x-1 bg-orange-500 p-2 text-white rounded hover:bg-orange-600 mr-4 mt-4">
                <span>Buy Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                </svg>
            </button>
            <button className="flex space-x-1 p-2 border border-orange-500 rounded hover:bg-orange-600 hover:text-white mr-4 mt-4">
                <span>Add to Cart</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </button>
        </div>
    </div>
</div>


class ProductList extends React.Component {
    state = {
        products: [],
        hasError: false
    }
    constructor() {
        super();

        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                this.setState({
                    products: res.data
                });
            })
            .catch(err => {
                this.setState({ hasError: true })
            });
    }

    render() {
        return <div>
            <h1>Product List</h1>
            {this.state.hasError &&
                <div style={{ backgroundColor: 'brown', color: 'white', padding: '8px' }}>
                    Failed to load products, please try again
                </div>
            }
            <div className="grid grid-cols-2">
                {this.state.products.map(product => <ProductItem item={product} />)}
            </div>
        </div>;
    }
}

export default ProductList;
