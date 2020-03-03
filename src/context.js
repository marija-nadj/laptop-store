import React, { Component } from 'react';
import items from "./data";


const ProductContext = React.createContext();
// 
class ProductProvider extends Component {
    state = {
        products:[],
        sortedProducts:[],
        featuredProducts:[],
        loading:true,
        processor: 'all',
        RAM:4,
        brand: 'all',
        price:0,
        minPrice:0,
        maxPrice:0,
        size:14,
        condition: 'all',
        graphic_Card:false,
        operating_System:false
    };

    // getData
    componentDidMount(){
        let products = this.formatData(items);
        let featuredProducts = products.filter(product => product.featured === true);
        let maxPrice = Math.max(...products.map(item =>item.price));

        this.setState({
            products, 
            featuredProducts, 
            sortedProducts:products, 
            loading:false,
            price:maxPrice,
            maxPrice,
        });
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let product = {...item.fields,images,id};
            return product;
        });
        return tempItems;
    }
    getProduct = (slug) => {
        let tempProducts = [...this.state.products];
        const product = tempProducts.find((product)=>product.slug === slug);
        return product;
    }
    handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox"? target.checked : target.value;
        const name = event.target.name
        this.setState(
            {
                [name] : value
            },
            this.filterProducts
        );
    };
    filterProducts = () => {
        let {
            products, processor,RAM,brand,price,size,condition,graphic_Card,operating_System
        } = this.state

        let tempProducts = [...products];
        //all the products
        //transform value
        RAM = parseInt(RAM)

        // filter by processor

        if(processor !=='all') {
            tempProducts = tempProducts.filter(product =>product.processor===processor)
        }
        // filter by RAM
        if (RAM!==4) {
            tempProducts = tempProducts.filter(product =>product.RAM>=RAM)
        }
        // filter by price
        tempProducts = tempProducts.filter(product => product.price <= price)
        // filter by size
        if (size!==11.6) {
            tempProducts = tempProducts.filter(product =>product.size>=size)
        }
        // filter by graphic card
        if(graphic_Card) {
            tempProducts = tempProducts.filter(product => product.graphic_Card===true)
        }
        // filter by operating system
        if (operating_System) {
            tempProducts = tempProducts.filter(product => product.operating_System === true)
        }
        // filter by brand
        if(brand!=='all'){
            tempProducts = tempProducts.filter(product => product.brand===brand)
        }
        // filter by condition
        if(condition!='all') {
            tempProducts = tempProducts.filter(product => product.condition===condition)
        }



        // change state

        this.setState({
            sortedProducts:tempProducts

        }

        )
    };


    render() {
        return (
        <ProductContext.Provider
         value={{
             ...this.state,
             getProduct: this.getProduct,
             handleChange: this.handleChange,
             handleDetail: this.handleDetail,
             }}>
            {this.props.children}
        </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export function withProductConsumer(Component){
    return function ConsumerWrapper (props){
        return <ProductConsumer>
            {value => <Component {...props} context={value}/>}
        </ProductConsumer>
    }
}



export {ProductProvider, ProductConsumer,ProductContext};