import React from 'react';
import { benefit } from "../data";
import Card from '../Ul/card';
import Image from '../images/hero-img-removebg-.jpg'

const Benefit = () => {
    return (
        <main>
           <h2 className="benefit-header">Benefits</h2>
            <h1 className="benefit-header-2"> <span>Benefits</span> Using E-Wallet <br /> Paylite For You</h1>
                <p className="benefit-text">Lorem ipsum dolor sit, amet consectetur amet consectetur. <br />
                    Lorem ipsum dolor sit, amet consectetur.
                    Lorem ipsum dolor sit, <br /> amet consectetur.
                    Lorem ipsum dolor sit,  amet consectetur. 
                </p> 
                                
            <section className='benefit'>
                <div className='benefits'>
                {
                    benefit.map(({icon, title, info, id}) => {
                        return (
                            <Card key={id} className='benefit-card'>
                            <img src={icon} alt=""  className='benefit-img'/>
                            <h4 className='benefit-title'>{title}</h4>
                            <small className='benefit-info'>{info}</small>


                        </Card>
                        )
                    })
                }

            </div>
                <div>
                    <img src={Image} alt='' className='benefit-heroimg'/>
                </div>

        </section>

        </main>

    )
}

export default Benefit;