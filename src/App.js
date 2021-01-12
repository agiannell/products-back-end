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
        this.setState({name: e})
    }

    handlePriceInput = (e) => {
        this.setState({name: e})
    }

    handleImageInput = (e) => {
        this.setState({name: e})
    }

    handleSubmit = () => {
        const {name, desc, price, imageURL, products} = this.state;
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
            {name, desc, price, imageURL, products} = this.state;
        console.log(products);
        return (
            <section>
                <form>
                    <input type ='text' onChange ={e => handleNameInput(e.target.value)} placeholder='Name' />
                    <input type ='text' onChange ={e => handleDescInput(e.target.value)} placeholder='Description' />
                    <input type ='number' onChange ={e => handleImageInput(e.target.value)} placeholder='Price' />
                    <input type ='text' onChange ={e => handlePriceInput(e.target.value)} placeholder='Image URL' />
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </section>

        )
    }
}

export default App;