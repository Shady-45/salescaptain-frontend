import React from 'react'
import { ResourceData } from '../data/data.js'
const Resources = () => {
  return (
    <>
    <main className='container-resource'>
    <h2 className="leading-text">Expert Insights and Resources</h2>
    <p className='resource-text'>Get the latest business intelligence relevant to your industry, designed to help you grow.</p>
    <div className='resource-data-container resp'>
    {
    ResourceData.map(({id,title,desc,img})=>(
        <article className='resource-container' key={id}>
            <img className='resource-img' src={img} alt={title} />
            <h2 className='resource-title'>{title}</h2>
            <p className='resource-desc' >{desc}</p>
        </article>
    ))
}
    </div>
    <h3 className="resource-text-blue">View all resources</h3>
    </main>
    
    </>
  )
}

export default Resources