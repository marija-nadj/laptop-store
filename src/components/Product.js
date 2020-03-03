import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import {ProductConsumer} from "../context";
import styled from "styled-components";

export default function Product({ product }) {
    const { name, slug, images, price } = product;
    return (
    <article className="product">
        <div className="img-container">
            <img src={images[0]} alt="single product"/>
            <div className="price-top">
                <h6>${price}</h6>
            </div>
            <Link to={`/products/${slug}`} className="btn-primary product-link">Features</Link>
        </div>
        <p className="product-info">{name}</p>
    </article>
    ); 
}




Product.propTypes = {
    product: PropTypes.shape({
        id:PropTypes.number,
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
        inCart: PropTypes.bool.isRequired
    } )
}