import React from 'react'
import '../index.css'

const Achievements = () => {
  return (
    <>
    <section className='achievements-container'>
        <h2 className='achieve-heading'>Ready to grow?</h2>
        <h3 className='achieve-desc'>See why 100,000+ businesses trust us. Book a personalized demo to see
how SalesCaptain provides you the right tools to grow your business.</h3>
<div className="home-btns">
    <input placeholder="Enter your Email" className="home-mail" type="email" name="" id="" />
    <button className="home-btn">Get Demo</button>
  </div>
<div className='review-container-1'>
<img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af532e37289b6270d7aba8_stars.webp" alt="image" />
<p>500 + reviews</p>
</div>

<div className='companies'>
<img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af562b0cd76f4e7026cba9_18-187112_google-transparent-white-logo.webp" alt="" />
<img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af5631b8d59acd37236ca0_c-dark.webp" alt="" />
<img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af562bb61c17fbd3d37043_6033de5cf82f810004782cb7.webp" alt="" />
</div>

    </section>
    
    </>
  )
}

export default Achievements