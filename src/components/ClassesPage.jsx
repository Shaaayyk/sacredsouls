import React from 'react'
import DownDog from '../images/downward-dog.jpg'
import DownArrow from '../images/down-arrow.png'


export default function ClassesPage() {
  return (
    <div id='class-page'>
      <img src={DownDog} />
      <h1 className='class-title'>YOGA CLASSES</h1>
      <div id='class-list'>
        <h2>Hatha Yoga I <img src={DownArrow} /></h2>
        <h2>Hatha Yoga II <img src={DownArrow} /></h2>
        <h2>Core Yoga <img src={DownArrow} /></h2>
        <h2>Gentle/Meditative Yoga <img src={DownArrow} /></h2>
        <h2>Kids Yoga <img src={DownArrow} /></h2>
        <h2>Private Lessons <img src={DownArrow} /></h2>
      </div>
      <h1 className='class-title'>HOW TO PREPARE FOR YOUR FIRST CLASS</h1>
      <div id='prepare-list'>
        <div className='prepare-single'>
          <h2>CLAIM YOUR SPOT</h2>
          <p>Reservations are recommended for all our classes. You can sign up for your class online or by phone to ensure you have a spot.</p>
        </div>
        <div className='prepare-single'>
          <h2>COME ON A EMPTY STOMACH</h2>
          <p>Try not to eat 2-3 hours before class. With all the stretching and twisting, we find you will be more comfortable if your body isn’t also trying to break down a snack.</p>
        </div>
        <div className='prepare-single'>
          <h2>BE COMFORTABLE</h2>
          <p>Wear comfortable, loose fitting clothing to allow for all the class poses. Also, please remember to take off any shoes or socks once in the main room, as our yoga classes are done barefoot. Don’t worry, they won’t go anywhere.</p>
        </div>
        <div className='prepare-single'>
          <h2>STAY HYDRATED</h2>
          <p>A hydrated body is a happy body. We suggest bringing a water bottle with you to class if you wish, and also provide water to those who have forgotten theirs.</p>
        </div>
        <div className='prepare-single'>
          <h2>DISCONNECT</h2>
          <p>Yoga is a chance to reconnect with your body, mind, and soul, not your phone. Please turn off or silence any mobile devices to make sure all class participants can enjoy the class without distraction. </p>
        </div>
        <div className='prepare-single'>
          <h2>YOGA MAT</h2>
          <p>If you prefer, you can bring your own yoga mat - if not, we have plenty of mats at the studio that are available to use free of charge.</p>
        </div>
      </div>
      <div>
        <h1 className='class-title'>PRICES</h1>
        <h2 className='price-title'>PER CLASS</h2>
        <div id='top-price-list'>
          <div className='top-price-box' id='left-box'>
            <h3>Single Class</h3>
            <p>$15</p>
          </div>
          <div className='top-price-box' id='right-box'>
            <h3>10-Class Pack</h3>
            <p>$120</p>
            <p id='fade'>expires in 4 months</p>
          </div>
        </div>
      </div>
      <h2 className='price-title'>PER MONTH</h2>
      <div id='bottom-price-list'>
        <div className='bottom-price-box' id='first-bottom-box'>
          <h3>First Month of Yoga - Beginner's Package</h3>
          <p>$50</p>
          <p id='fade'>includes any Hatha I classes</p>
        </div>
        <div className='bottom-price-box' id='second-bottom-box'>
          <h3>1 Month</h3>
          <h3>Unlimited Classes</h3>
          <p>$100</p>
        </div>
        <div className='bottom-price-box' id='third-bottom-box'>
          <h3>3 Months</h3>
          <h3>Unlimited Classes</h3>
          <p>$250</p>
        </div>
        <div className='bottom-price-box' id='fourth-bottom-box'>
          <h3>6 Months</h3>
          <h3>Unlimited Classes</h3>
          <p>$450</p>
        </div>
      </div>
    </div>
  )
}
