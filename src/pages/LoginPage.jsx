import React,{ useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import '../index.css'
import LoginLogo from '../assets/login-logo.png'
import LoginImage from '../assets/login-image.jpg'
import LoginAd from '../components/LoginAd'

const LoginPage = () => {
    
    const navigate = useNavigate()
    const emailRef = useRef(null)
    const paswdRef = useRef(null)
    const handleSubmit = ()=>{
        
        const mail = emailRef.current.value
        const paswd = paswdRef.current.value
        
        if (mail  && paswd) {
            navigate('/home')
        }
    }
  return (
    <>
    <main className='login-container'>
        <div className="left-component">
            <img className='login-logo' src={LoginLogo} alt="logo" />
            <h2>Login</h2>
            <form className='login-form' onSubmit={handleSubmit} action="">
                <input ref={emailRef} className='login-credentials' type="email" name="" id="" />
                <input  ref={paswdRef} className='login-credentials' type="password" name="" id="" />
                <button  className='login-btn' type='submit'>Sign In</button>
            </form>
            <p className='login-text'>Forgot Password</p>

        </div>
        <div className="right-component">
        <img className='login-img' src={LoginImage} alt="image" />
        
            <LoginAd/>
    
        </div>
    </main>
    </>
  )
}

export default LoginPage