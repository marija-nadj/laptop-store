import React from 'react';
import {useContext} from 'react';
import {ProductContext} from '../context';
import Title from '../components/Title';


const getUnique = (items,value) =>{
    return [...new Set(items.map(item =>item[value]))]
}
export default function ProductFilter({products}) {
    const context = useContext (ProductContext);
    const {
        handleChange, 
        processor, 
        size, 
        RAM,
        brand,
        price, 
        minPrice,
        maxPrice, 
        condition,
        graphic_Card,
        operating_System
    } = context;

// get unique processors
    let processors = getUnique(products,'processor');


    // add all
    processors = ['all',...processors];
    //map to jsx
    processors = processors.map((item,index) => {
        return (
        <option value={item} key={index}>{item}</option>
        );
    })
    // brand
    let brands = getUnique(products,'brand');
    brands = ['all',...brands];
    brands = brands.map((item,index) => {
        return (
            <option value={item} key={index}>{item}</option>
        );
    })
    // condition
    let conditions = getUnique(products,'condition');
    conditions = ['all',...conditions];
    conditions = conditions.map((item,index) => {
        return (
            <option value={item} key={index}>{item}</option>
        )
    })


    let memory = getUnique(products,'RAM');
    memory = memory.map((item,index) => {
        return <option key={index} value={item}>{item}</option>
        
    });
    let screen = getUnique(products,'size');
    screen = screen.map((item,index) => {
        return <option key={index} value={item}>{item}</option>
    });

    return (
    <section className="filter-container">
        <Title title="search laptops"/>
        <form className="filter-form">
            {/* select processor*/}
            <div className="form-group">
                <label htmlFor="processor">Processor</label>
                <select name="processor" id="processor" value={processor}
                className="form-control" onChange={handleChange}>{processors}</select>

            </div>
            {/* end of select processor*/}
            {/* select RAM*/}
            <div className="form-group">
                <label htmlFor="RAM">RAM</label>
                <select name="RAM" id="RAM" value={RAM}
                    className="form-control" onChange={handleChange}>
                        {memory}
                        </select>
            </div>
            {/* end of select RAM*/}
            {/*product price*/}
            <div className="form-group">
                <label htmlFor="price">
                    product price ${price}
                </label>
                <input type="range" name="price" min={minPrice} max={maxPrice} id="price"
                value={price} onChange={handleChange} className="form-control"/>

            </div>
            {/*end of price*/}      
            {/*size*/}
                <div className="form-group">
                    <label htmlFor="size">Screen Size</label>
                    <select name="size" id="size" value={size}
                        className="form-control" onChange={handleChange}>
                        {screen}
                    </select>
                </div>
            {/*end of size*/}
                {/*brand*/}
                <div className="form-group">
                    <label htmlFor="brand">Brand</label>
                    <select name="brand" id="brand" value={brand}
                        className="form-control" onChange={handleChange}>{brands}</select>
                </div>
                {/*end of brand*/}
                {/*condition*/}
                <div className="form-group">
                    <label htmlFor="condition">Condition</label>
                    <select name="condition" id="condition" value={condition}
                        className="form-control" onChange={handleChange}>{conditions}</select>
                </div>
                {/*end of condition*/}
            {/*grafick card*/}
            <div className="form-group">
                <div className="single-extra">
                    <input
                    type="checkbox"
                    name="graphic_Card"
                    id="graphic_Card"
                    checked={graphic_Card}
                    onChange={handleChange}
                    />
                    <label htmlFor="graphic_Card">Graphic Card Integrated</label>
                </div>
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="operating_System"
                            id="operating_System"
                            checked={operating_System}
                            onChange={handleChange}
                        />
                        <label htmlFor="operating_System">Operating System Installed</label>
                    </div>
            </div>
                
            <div>
            </div>
            </form>
    </section> 
    );
}
