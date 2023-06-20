import React,{useState} from 'react'
import '../index.css'
import {AiOutlineClose} from 'react-icons/ai'

const LoginAd = () => {
    const [openArticle,setOpenArticle]=useState(false)
    

  return (
   
    <>
{
    (!openArticle
    ) ? <article className='login-ad-container'>
    <AiOutlineClose onClick={()=>{
        if(window.innerWidth <= 800){
            setOpenArticle(!openArticle)
            setisClicked(!isClicked)
        }
        }}  className='close-icon'/>
    <h3>Give your business a
SalesCaptain Upgrade</h3>
<p>Our AI-powered tools help local businesses modernize how they communicate with their customers by facilitating online reviews, personalized marketing campaigns, web chats, payments, and more.

</p>
<p>To learn more, talk to an expert today.</p>
<button className='ad-button'>Book an Appointment</button>
</article>:null
}
    
    </>
  )
}

export default LoginAd