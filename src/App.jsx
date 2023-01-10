
import React, { useEffect, useRef } from 'react';
import './App.css'

const grecaptcha = window.grecaptcha

function App() {

  const captchaRef = useRef()

  useEffect(() => {
    if(grecaptcha) {
      captchaRef.current = grecaptcha
    }
  }, [])
  

  return <form onSubmit={async (e) => {
    e.preventDefault()
    
    const token = await captchaRef.current.execute('6LeIqbsZAAAAAAHq5zlP_PxnZIYi6kmpgl9YGlJA', {action: 'submit'})
    console.log({
      email: e.target[0].value,
      password: e.target[1].value,
      token
    })
    console.log(token)
  }}>
    <input type="text" name="email" id="email"/>
    <input type="password" name="pass" id="pass" />
    <input type="submit" value="Login" />
  </form>
}

export default App
