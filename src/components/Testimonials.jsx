import React from 'react'
import { TestimonialsData } from '../data/data'
import '../index.css'
const Testimonials = () => {
  return (

    <>
    
        {
            TestimonialsData.map((item)=>(
                <article className='testimonial-data'>
                    <div className="user-details-container">
                    <img className='user-profile' src={item.profile} alt={item.name} />
                    <div className="user-details">
                    <h2>{item.name}</h2>
                    <p>{item.desc}</p>
                    </div>
                    


                        </div>
                    
                    <p>{item.feedback}</p>
                    <div>
                    <h1>{item.profit}</h1>
                    <p>{item.profitDesc}</p>
                    </div>
                    
                    <div className='product-items'>
                        <p>Products used:</p>
                        {
                            item.products.map((product)=>(
                                <button className='product-item'>{product}</button>
                            ))
                        }
                    </div>
                </article>
            ))
        }
    
    </>
  )
}

export default Testimonials