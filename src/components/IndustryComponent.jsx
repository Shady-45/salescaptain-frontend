import React from 'react'
import { IndustryData } from '../data/data'
const IndustryComponent = () => {
    

  return (
    <>
    <div className='industry-component'>
    <h2 className="leading-text">SalesCaptain is designed for your business</h2>
    <p className='industry-skill'>Select your industry to see how it works</p>
    </div>
   
    <div className='industry-component-container'>
    {
        IndustryData.map(({productdata})=>(
           <article className='industry-data-container'>
            {
                productdata.map(({id,img,title})=>(
                    <article className='industry-data' key={id}>
                        <img className='data-img' src={img} alt={title} />
                        <h3>{title}</h3>
                    </article>
                ))
            }
           </article>
        ))
}
    </div>

    
    </>
  )
}

export default IndustryComponent