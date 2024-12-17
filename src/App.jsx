// Function
// UI or null
// JSX
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Result from './Result';
import ProductList from './ProductList';
import Counter from './Counter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import NewProduct from './NewProduct';

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
        <BrowserRouter>
            <Header />
            <main className="flex-grow">
                <div className='h-screen flex-grow'>
                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route path="/about" Component={About} />
                        <Route path="/contact" Component={Contact} />
                        <Route path="/products" Component={ProductList} />
                        <Route path="/products/new" Component={NewProduct} />
                        <Route path="*" Component={NotFound} />
                    </Routes>
                </div>
            </main>
        </BrowserRouter>
        <Footer />
    </div >
}

export default App;
