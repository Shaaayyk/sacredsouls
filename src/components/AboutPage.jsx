import React from 'react'
import aboutbg from '../images/aboutbg.png'

export default function AboutPage() {
  return (
    <div className="aboutContainer">
      <div className="about-section-one">
        <div className="imgInfo">
          <h1>Komal Majmundar</h1>
          <h3>Owner &amp; Yoga Instructor</h3>
          <p>Yoga was present in my life from a young age. I remember as a child there were yoga books around the house, and sometimes I would look through them and try poses.  But my curiosity was not much more than that until college, when I started struggling with anxiety and depression. One day, a close friend helped me through a panic attack by teaching me a breathing exercise and suggested I try yoga. His example was an inspiration for me, and set me on a path of self-discovery. <div className="linebreak "></div>
            After some time practicing on my own, I understood that I needed a teacher. I decided to get my certification and completed a Teacher Training course at Atmananda Yoga in Manhattan, where I taught classes before I decided to open my own studio. Ultimately, I hope that students who come in to take my yoga classes experience more physical vitality and better emotional health.</p>
        </div>
        <img className="aboutPic" />
      </div>

      <div className="mapArea">
        <div className="map">
          <iframe className="mapsize" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.219219933013!2d-74.06563748458979!3d40.73520154413277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25730469d485b%3A0x22ac55428423bf22!2s2983%20John%20F.%20Kennedy%20Blvd%20%23403%2C%20Jersey%20City%2C%20NJ%2007306!5e0!3m2!1sen!2sus!4v1574284212674!5m2!1sen!2sus"></iframe>
        </div>
        <div className="aboutInfo">
          <div className="location">
            <h1>location</h1>
            <p>Located just a few steps from Journal Square PATH- we offer a variety of classes for those at all levels in their practice from beginner to advanced.<div className="mapInfoLineBreak"></div>
              SACRED SOULS YOGA STUDIO<br />
              2983 John F. Kennedy Blvd., Suite 403<br />
              Jersey City, NJ 07306</p>
          </div>
          <div className="contact">
            <h1>Contact</h1>
            <p>sacredsoulsyoga@gmail.com<div className="mapInfoLineBreak"></div>
              Tel: 201-238-9903</p>
          </div>
        </div>
      </div>
    </div>
  )
}
