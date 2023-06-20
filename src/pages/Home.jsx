import React from "react";
import Navbar from "../components/Navbar";
import '../index.css'
import ImgOne from '../assets/Image-1.jpg'
import ImgTwo from '../assets/Image-2.jpg'
import ImgThree from '../assets/Image-3.jpg'
import ImgFour from '../assets/Image-4.jpg'
import ImgFive from '../assets/Image-5.jpg'
import Testimonials from "../components/Testimonials";
import BusinessTools from "../components/BusinessTools";
import IndustryComponent from "../components/IndustryComponent";
import CustomerComponent from "../components/CustomerComponent";
import Resources from "../components/Resources";
import Achievements from "../components/Achievements";
import Footer from "../components/Footer";
import chatIcon from '../assets/chat.png'


const Home = () => {

const images =[ImgOne,ImgTwo,ImgThree,ImgFour,ImgFive]
const brandImages = ['https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969c99e10c822b37179e8_Group%2018532.webp','https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cae70f01d34820d129_Group%2018531.webp','https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969ca4e2bcd235bf57982_Group%2018533.webp','https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969ca47165b7b29cd5bfa_Group%2018534.webp','https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cb054ce48a81f23d47_Group%2018535.webp','https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969caa274fa886bbafd69_Group%2018536.webp']
  return(
    <main>
<Navbar/>
<div className="main-heading-container">
  <h1 className="home-height" >Best way to grow your</h1>
  <h1  > local business</h1>
  <p className="main-home">Artificial Intelligence powered easy-to-use tools to get more customers & give them a better experience</p>
  <div className="home-btns">
    <input placeholder="Enter your Email" className="home-mail" type="email" name="" id="" />
    <button className="home-btn">Get Demo</button>
  </div>
</div>
<div className="mess">
  <p></p>
<img className="chat-icon" src={chatIcon} alt="" />
</div>

<section className="img-section">
  {
    images.map((image)=>(
      <img className="home-images" src={image} alt="" />
    ))
  }
</section>
<div className="companies-clients">
  <h2 className="client-text-heading">Trusted by 100,000+ local businesses globally</h2>
  <div className="companies-images">
  {
    brandImages.map((image)=>(
      <img src={image} alt="" />
    ))
  }
  </div>
  
</div>
<section className="testimonials">
  <Testimonials/>
</section>
<div className="tools">
  <BusinessTools/>
</div>
<div className="industry">
  <IndustryComponent/>
</div>
<div className="customer-component-main">
  <CustomerComponent/>
</div>
<div className="resource">
  <Resources/>
</div>
<div className="achievements">
  <Achievements/>
</div>
<div className="footer">
  <Footer/>
  <div className="copyrights-label">
    <p>© SalesCaptain Inc 2023 (A division of SalesBook Technologies Pvt Ltd)</p>
    <div className="conditions">
      <p>Terms and condition</p>
      <p>Privacy</p>
      <p>Refund Policy</p>
      <p>CCPA</p>

    </div>
  </div>
</div>
    </main>
    
    
  );
};

export default Home;
