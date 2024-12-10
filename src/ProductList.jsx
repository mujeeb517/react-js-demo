// Container component
// Presentational component

function ProductItem({ item }) {
    function calculate(item) {
        const dicountedAmt = (item.price * item.discount) / 100;
        const actualPrice = (item.price - dicountedAmt);
        return actualPrice;
    }

    return <div>
        <h3>{item.brand} {item.model}</h3>
        <img src={item.image} width={200} height={200} />
        <h4 style={{ textDecoration: 'line-through' }}>${item.price}</h4>
        <h3>${calculate(item)}</h3>
        {item.inStock ? <button>Buy Now</button> : <button>Notify Me</button>}
        <hr />
    </div>;
}

function ProductList() {
    const items = [{
        id: 1,
        brand: 'Apple',
        model: 'Iphone 13',
        price: 1000,
        discount: 2,
        image: 'https://images.pexels.com/photos/13706809/pexels-photo-13706809.jpeg?auto=compress&cs=tinysrgb&w=800',
        inStock: true
    }, {
        id: 2,
        brand: 'Apple',
        model: 'Iphone 14',
        price: 1100,
        discount: 5,
        image: 'https://images.pexels.com/photos/18403789/pexels-photo-18403789/free-photo-of-dark-color-iphones-12-13-14-15-pro-pro-max-luxury-fashion-brand-gentcreate.jpeg?auto=compress&cs=tinysrgb&w=800',
        inStock: false

    }, {
        id: 3,
        brand: 'Apple',
        model: 'Iphone 15',
        price: 1150,
        discount: 10,
        image: 'https://images.pexels.com/photos/18423742/pexels-photo-18423742/free-photo-of-handsome-man-with-glasses-holding-crocodile-leather-iphone-15-case-by-gentcreate.jpeg?auto=compress&cs=tinysrgb&w=800',
        inStock: true
    }];

    return <div>
        <h1>Product List</h1>
        <div>
            {items.map(i => <ProductItem key={i.id} item={i} />)}
        </div>
    </div>;
}

export default ProductList;