import React from 'react';
import { payment } from '../data';
import Card from '../Ul/card';

const Payment = () => {
    return (

        <section className='payment'>
            <h1 className='payment-header'>Ecosystem</h1>
            <h2 className='payment-header-2'>Payment <span>Ecosystem</span></h2>
            <p className='payment-text'>Officia dignissimos incidunt nisi ipsam minima dolore. <br />
                Animi facilis exercitationem quam, perspiciatis illum,  <br />
                ipsum dolorem corrupti nisi necessitatibus impedit ea consequatur hic!Lorem ipsum dolor sit,  <br />
                amet consectetur adipisicing elit. Officia dignissimos incidunt nisi ipsam minima dolore. Animi facilis exercitationem quam, perspiciatis illum, <br />
            </p>
            <div className='payment-container'>
                {
                    payment.map(({icon, title, info, id}) => {
                        return (
                            <Card key={id} className='payment-card'>
                                <img src={icon} alt=""  className='payment-img'/>
                                <h4 className='payment-title'>{title}</h4>
                                <small className='payment-info'>{info}</small>
                            </Card>
                        )
                    })
                }
            </div>
        </section>
    )
}


export default Payment;