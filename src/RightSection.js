"use client";
import React, { useState } from 'react';
import styles from './styles/RightSection.module.css'
import chatgptlogo from './assets/chatgptlogo.png'
import chatgptlogo2 from './assets/chatgptlogo2.png'
import nouserlogo from './assets/nouserlogo.png'

const Right_section = () => {
  const [message , setMessage] = useState('')
  const [allMesseages , setAllMessages] = useState([])
  const sendMessage = async ()=>{
    console.log(message)
  }
  return (
    <div className={styles.rightSection}>
      <div className={styles.chatgptversion}>
        <p className={styles.text1}>ChatGPT 3.5</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      <div className={styles.nochat}>
        <div className={styles.s1}>
          <img src={chatgptlogo} alt="chatgpt" height={70} width={70} />
          <h1>How can I help you today?</h1>  
        </div>
        <div className={styles.s2}>
          <div className={styles.suggestioncard}>
            <h2>Recommend activities</h2>
            <p>psychology behind decision-making</p>
          </div>
          <div className={styles.suggestioncard}>
            <h2>Recommend activities</h2>
            <p>psychology behind decision-making</p>
          </div>
          <div className={styles.suggestioncard}>
            <h2>Recommend activities</h2>
            <p>psychology behind decision-making</p>
          </div>
          <div className={styles.suggestioncard}>
            <h2>Recommend activities</h2>
            <p>psychology behind decision-making</p>
          </div>
        </div>        
      </div>
      <div className={styles.bottomsection}>
        <div className={styles.messagebar}>
          <input
            type='text'
            placeholder='Message ChatGPT...'
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

        </div>

      </div>
    </div>
  )
}

export default Right_section
