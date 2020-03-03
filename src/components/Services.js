import React, { Component } from 'react';
import Title from './Title';
import {FaCreditCard, FaCogs, FaLaptop, FaLaptopMedical} from 'react-icons/fa';

export default class Services extends Component {
    state= {
        services:[
            {
                icon:<FaCreditCard/>,
                title:"Financing & leasing",
                info: "Overcome budget limitations and get the technology you need.See how our financing and equipment leasing services can help."
            },
            {
                icon: <FaCogs/>,
                title: "Lifecycle services",
                info: "Explore our configurator and get assistance with planning, purchasing, deployment, and IT asset management and support."
            },
            {
                icon: <FaLaptop/>,
                title: "Repair Services",
                info: "We repair all brands of Laptops notebook computers in fastest turnaround time, no more time waste."
            },
            {
                icon: <FaLaptopMedical/>,
                title: "Sell Used Laptop",
                info: "We buy broken laptops from leading manufacturers. We even buy non-functional laptops that fail to boot or have major technical issues."
            }

        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services'/>
                <div className="services-center">
                {this.state.services.map((item,index)=> {
                return (
                <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>
                );
                })}
                </div>
            </section>
        );
    }
}
