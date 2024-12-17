import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewProduct() {

    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: '',
        image: '',
        category: ''
    });

    const [isSuccess, setSuccess] = useState(false);
    const navigate = useNavigate();

    const onValueChange = (evt) => {
        const newProduct = { ...product, [evt.target.name]: evt.target.value };
        setProduct(newProduct);
    };

    const onSave = async () => {
        try {
            await axios.post('https://fakestoreapi.com/products', product);
            // setSuccess(true);
            navigate('/products');
        } catch (err) {
            console.error(err);
        }
    };

    return (<div className="m-8 text-gray-600">
        <h1 className="text-xl font-bold text-gray-700"> Add New Product</h1>
        {
            isSuccess && <div className="p-2 bg-green-600 rounded text-white">
                Successfully saved!
            </div>
        }
        <div className="my-2 space-y-2">
            <label className="block">Category</label>
            <select name="category" onChange={onValueChange} className="p-2 w-1/2 border rounded">
                <option value="">--Select--</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelery</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
            </select>
        </div>
        <div className="my-2 space-y-2">
            <label className="block">Title</label>
            <input onChange={onValueChange} name="title" className="p-2 rounded border w-1/2" type="text" />
        </div>
        <div className="my-2 space-y-2">
            <label className="block">Price</label>
            <input onChange={onValueChange} name="price" className="p-2 rounded border w-1/2" type="text" />
        </div>
        <div className="my-2 space-y-2">
            <label className="block">Image</label>
            <input onChange={onValueChange} name="image" className="p-2 rounded border w-1/2" type="text" />
        </div>
        <div className="my-2 space-y-2">
            <label className="block">Description</label>
            <textarea onChange={onValueChange} name="description" rows={3} className="p-2 rounded border w-1/2" type="text" />
        </div>
        <div className="my-2 space-y-2">
            <button onClick={onSave} className="py-2 px-6 bg-orange-500 hover:bg-orange-600 text-white">Save</button>
        </div>
    </div >);
}

export default NewProduct;