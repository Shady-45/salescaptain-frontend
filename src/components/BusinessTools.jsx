import React from 'react'
import { ToolsData } from '../data/data'
import '../index.css'

const BusinessTools = () => {
  return (
    <>
    <h2 className='leading-text'>Tools to take your business to next level</h2>
    <div className='business resp'>
    {
        ToolsData.map(({id,title,titleDesc,productReviews})=>(
            <article className='business-tools-data-container' key={id}>
                <div>
                <h2 className='business-heading'>{title}</h2>
                <p>{titleDesc}</p>
                </div>
              
                {
                    productReviews.map(({img,detail,details})=>(
                        <div className='review-container'>
                            <img src={img} alt={detail} />
                            <div>
                                <h3 className='business-text'>{detail}</h3>
                                <p>{details}</p>
                            </div>
                        </div>
                    ))
                }
            </article>
        ))
    }
    </div>
    
    </>
  )
}

export default BusinessTools