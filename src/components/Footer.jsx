import React from 'react'
import FooterImg from '../assets/footer.png'
import { products } from '../data/data.js'
import { productsExtra } from '../data/data.js'
import { Industry } from '../data/data.js'
import { partner } from '../data/data.js'
import { address } from '../data/data.js'

const Footer = () => {
  return (
    <main className="foooter-container">
<footer>
    <img src={FooterImg} alt="" />
    <div className="products-container foot">
        <p className='product-heading'>Products</p>
        <div className='product'>
        {
    
    products.map((product)=>(
        <ul>
            <li className='single-product '>{product}</li>
        </ul>
    ))
            }

        </div>
        
    </div>
    <div className="extra-products foot">
            {
                productsExtra.map((item)=>(
                    <ul>
                        <li className='single-product '>{item}</li>
                    </ul>
                ))
            }
        </div>
        <div className="industry-footer-container foot">
            <p className='product-heading'>Industry</p>
            <div className="industry-footer">
                {
                    Industry.map((item)=>(
                        <ul>
                            <li className='single-product'>{item}</li>
                        </ul>
                    ))
                }
            </div>
        </div>
        <div className="partner-container-footer foot">
            <p className="product-heading">
        Partner
            </p>
            <div className="partner-footer">
                {
                    partner.map((item)=>(
                        <ul>
                            <li className='single-product'>{item}</li>
                        </ul>
                    ))
                }
            </div>
        </div>
        <div className="address-container-footer foot">
            {
                address.map(({id,title,address})=>(
                <article key={id}>
                        <p className='product-heading'>{title}</p>
                        <p className='single-product'>{address}</p>
                </article>
                ))
            }
        </div>
</footer>
<div className="socials">
    <img className='socials-img' src="	https://assets.website-files.com/62a83ee090ccdee139c347e5/62af585d1036bf0791c31e8b_Group%2017124.svg" alt="facebook" />
    <img className='socials-img' src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af585ec5d9c15c1e77be28_Group%2017127.svg" alt="twitter" />
    <img className='socials-img' src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af585d612c975d00d3f286_Group%2017130.svg" alt="instagram" />
    <img className='socials-img' src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af585e3249a91eabae0c8e_Group%2017132.svg" alt="linkedin" />
</div>
    </main>

  )
}

export default Footer