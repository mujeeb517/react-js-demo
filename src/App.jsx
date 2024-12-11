// Function
// UI or null
// JSX
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Result from './Result';
import ProductList from './ProductList';
import Counter from './Counter';

function App() {
    // <div>
    //  <h1>Hello world</h1>
    //  <img src="https://images.pexels.com/photos/23720090/pexels-photo-23720090/free-photo-of-tall-uniquely-shaped-apartment-building-flora-panorama-in-burgas-in-bulgaria.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"/>
    // </div>
    // const h1 = React.createElement('h1', {}, 'Hello World');
    // const img = React.createElement('img', { width: 200, height: 200, src: 'https://images.pexels.com/photos/23720090/pexels-photo-23720090/free-photo-of-tall-uniquely-shaped-apartment-building-flora-panorama-in-burgas-in-bulgaria.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' });
    // const parent = React.createElement('div', {}, [h1, img]);

    // return parent;
    return <div>
        <ProductList />
    </div>
}

export default App;
