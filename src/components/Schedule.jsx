import React from 'react'
import DownArrow from '../images/down-arrow.png'
// import moment from 'moment'

export default function Schedule() {
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return (
    <div id='schedule'>
      <p id='main-statement'>First time? Sign up for your class online, over the phone, or in-person. Drop-ins are welcome.</p>
      <div className="title">
        <ul>
          <li>Find a Class</li>
        </ul>
      </div>

      <div className="month">
        <ul>
          <li>November</li>
        </ul>
      </div>

      <ul className="weekdays">
        <li>M</li>
        <li>T</li>
        <li>W</li>
        <li>Th</li>
        <li>F</li>
        <li>S</li>
        <li>S</li>
      </ul>

      <ul className="days">
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
      </ul>

      <div className="fullCalendar">
        <ul>
          <li>Full Calendar</li>
          {/* <li className="down">&#10094;</li> */}
          <input
            type="date"
            name="calendar"
            id="calendar"
          />
        </ul>
      </div>

      <h1 id='one-day'>Friday, November 22</h1>

      <div id='class-detail-container'>
        <div className='class-details'>
          <h2 className='time'>5:30 PM - 6:00 PM</h2>
          <div className='middle-details'>
            <h2>Gentle/Meditative Yoga</h2>
            <p>Komal Majmundar</p>
            <h3>View Details <img src={DownArrow} /></h3>
          </div>
          <button>SIGN UP</button>
        </div>

        <div className='class-details'>
          <h2 className='time'>5:30 PM - 6:00 PM</h2>
          <div className='middle-details'>
            <h2>Kids Yoga</h2>
            <p>Komal Majmundar</p>
            <h3>View Details <img src={DownArrow} /></h3>
          </div>
          <button>SIGN UP</button>
        </div>

        <div className='class-details'>
          <h2 className='time'>6:30 PM - 7:30 PM</h2>
          <div className='middle-details'>
            <h2>Gentle/Meditative Yoga</h2>
            <p>Komal Majmundar</p>
            <h3>View Details <img src={DownArrow} /></h3>
          </div>
          <button>SIGN UP</button>
        </div>

        <div className='class-details'>
          <h2 className='time'>6:30 PM - 7:30 PM</h2>
          <div className='middle-details'>
            <h2>Gentle/Meditative Yoga</h2>
            <p>Komal Majmundar</p>
            <h3>View Details <img src={DownArrow} /></h3>
          </div>
          <button>SIGN UP</button>
        </div>

        <div className='class-details'>
          <h2 className='time'>6:30 PM - 7:30 PM</h2>
          <div className='middle-details'>
            <h2>Gentle/Meditative Yoga</h2>
            <p>Komal Majmundar</p>
            <h3>View Details <img src={DownArrow} /></h3>
          </div>
          <button>SIGN UP</button>
        </div>

        <div className='class-details'>
          <h2 className='time'>6:30 PM - 7:30 PM</h2>
          <div className='middle-details'>
            <h2>Gentle/Meditative Yoga</h2>
            <p>Komal Majmundar</p>
            <h3>View Details <img src={DownArrow} /></h3>
          </div>
          <button>SIGN UP</button>
        </div>

        <div className='class-details'>
          <h2 className='time'>6:30 PM - 7:30 PM</h2>
          <div className='middle-details'>
            <h2>Gentle/Meditative Yoga</h2>
            <p>Komal Majmundar</p>
            <h3>View Details <img src={DownArrow} /></h3>
          </div>
          <button>SIGN UP</button>
        </div>

        <div className='class-details'>
          <h2 className='time'>6:30 PM - 7:30 PM</h2>
          <div className='middle-details'>
            <h2>Gentle/Meditative Yoga</h2>
            <p>Komal Majmundar</p>
            <h3>View Details <img src={DownArrow} /></h3>
          </div>
          <button>SIGN UP</button>
        </div>

      </div>
    </div>
  )
}
