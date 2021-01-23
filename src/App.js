import {Component} from 'react';
import axios from 'axios';
import ItemsList from './Components/ItemsList';
import './reset.css';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            price: 0,
            image_url: '',
            products: []
        }
    }

    componentDidMount() {
        this.getAllProducts();
    }

    getAllProducts = () => {
        axios.get('/api/products')
            .then(res => {
                this.setState({products: res.data});
            })
            .catch(err => console.log(err));
    }

    deleteProduct = (id) => {
        axios.delete(`/api/products/${id}`)
            .then(res => {
                this.setState({products: res.data})
            })
            .catch(err => console.log(err));
    }

    handleNameInput = (e) => {
        this.setState({name: e})
    }

    handleDescInput = (e) => {
        this.setState({description: e})
    }

    handlePriceInput = (e) => {
        this.setState({price: e})
    }

    handleImageInput = (e) => {
        this.setState({image_url: e})
    }

    handleSubmit = () => {
        const {name, description, price, image_url} = this.state;
        axios.post('/api/products', {name, description, price, image_url})
            .then(res => {
                this.setState({products: res.data})
            })
            .catch(err => console.log(err));

        this.setState({
            name: '',
            description: '',
            price: 0,
            image_url: ''
        })    
    }

    render() {
        const {handleNameInput, handleDescInput, handlePriceInput, handleImageInput, handleSubmit, deleteProduct} = this,
            {name, description, price, image_url, products} = this.state;
        // console.log(products);
        return (
            <section>
                <header>
                    <h1>Products Back End</h1>
                </header>
                <div className='form'>
                    <input value={name} type ='text' onChange ={e => handleNameInput(e.target.value)} placeholder='Name' />
                    <input value={description} type ='text' onChange ={e => handleDescInput(e.target.value)} placeholder='Description' />
                    <input value={price} type ='number' onChange ={e => handlePriceInput(e.target.value)} placeholder='Price' />
                    <input value={image_url} type ='text' onChange ={e => handleImageInput(e.target.value)} placeholder='Image URL' />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
                <ItemsList products={products} deleteFn={ deleteProduct } />
            </section>

        )
    }
}

export default App;