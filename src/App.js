import {Component} from 'react';
import axios from 'axios';
import './reset.css';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            desc: '',
            price: 0,
            imageURL: '',
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

    handleNameInput = (e) => {
        this.setState({name: e})
    }

    handleDescInput = (e) => {
        this.setState({desc: e})
    }

    handlePriceInput = (e) => {
        this.setState({price: e})
    }

    handleImageInput = (e) => {
        this.setState({imageURL: e})
    }

    handleSubmit = (e) => {
        const {name, desc, price, imageURL} = this.state;
        axios.post('/api/products', {name, description: desc, price, image_url: imageURL})
            .then(res => {
                this.setState({products: res.data})
            })
            .catch(err => console.log(err));

        this.setState({
            name: '',
            desc: '',
            price: 0,
            imageURL: ''
        })    
    }

    render() {
        const {handleNameInput, handleDescInput, handlePriceInput, handleImageInput, handleSubmit} = this,
            {name, products} = this.state;
        console.log(products);
        console.log(name);
        return (
            <section>
                <header>
                    <h1>Products Back End</h1>
                </header>
                <div className='form'>
                    <input type ='text' onChange ={e => handleNameInput(e.target.value)} placeholder='Name' />
                    <input type ='text' onChange ={e => handleDescInput(e.target.value)} placeholder='Description' />
                    <input type ='number' onChange ={e => handleImageInput(e.target.value)} placeholder='Price' />
                    <input type ='text' onChange ={e => handlePriceInput(e.target.value)} placeholder='Image URL' />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
                {/* {products.map((e, i) => (
                    <div key={i}>
                        <p>{e.name}</p>
                        <p>{e.price}</p>
                        <img src={e.imageURL} alt={e.name} />
                    </div>
                ))} */}
            </section>

        )
    }
}

export default App;