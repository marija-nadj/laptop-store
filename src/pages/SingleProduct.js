import React, { Component } from 'react';
import defaultBcg from '../images/product-1.JPEG';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from "react-router-dom";
import { ProductContext } from '../context';
import StyledHero from '../components/StyledHero';

export default class SingleProduct extends Component {
    constructor(props){
        super(props)
        //console.log(this.props)
        this.state = {
            slug:this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = ProductContext;
    //componentDidMount(){


    
    render() {
        const {getProduct} = this.context;
        const product = getProduct(this.state.slug);
        if (!product) {
            return ( 
            <div className="error">
                <h3>no such product could be found...</h3>
                <Link to='/products' className="btn-primary">
                back to products
                </Link>
            </div>
            );
        }
        const {
          name,
          description,
          processor,
          RAM,
          size,
          price,
          brand,
          condition,
          graphic_Card,
          operating_System,
          package_contents,
          images
        } = product;
        
        return (
          <>
            <StyledHero img={images[0]}>
              <Banner title={`${name}`}>
                <Link to="/products" className="btn-primary">
                  back to products
                </Link>
              </Banner>
            </StyledHero>
            <section className="single-product">
              <div className="single-product-images">
                {images.map((item, index) => {
                  return <img key={index} src={item} alt={name} />;
                })}
              </div>
              <div className="single-product-info">
                <article className="desc">
                  <h3>product information</h3>
                  <p>{description}</p>
                </article>
                <article className="info">
                  <h3>Tech Spec:</h3>
                  <h6>Screen size: {size}inch</h6>
                  <h6>Processor: {processor}</h6>
                  <h6>RAM: {RAM}GB</h6>
                  <h6>Brand:{brand}</h6>
                  <h6>Condition: {condition}</h6>
                  <h6>
                    {operating_System
                      ? "Operating System Installed"
                      : "Operating System not Installed"}
                  </h6>
                  <h6>{graphic_Card && "Graphics Card Integrated"}</h6>
                </article>
              </div>
            </section>
            <section className="product-package-contents">
              <h6>Package Contents:</h6>
              <ul className="package-contents">
                  {package_contents.map((item,index) => {
                      return <li key={index}>- {item}</li>;
                  })}
                  </ul>
            </section>
          </>
        );
}
}


