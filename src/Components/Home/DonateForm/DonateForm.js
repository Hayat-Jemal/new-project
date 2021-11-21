import React from 'react'
import { Link } from 'react-router-dom';
import "./donateForm.css"
const DonateForm = () => {
    return (
      <div className="donateForm__conainer">
       
          <div className="donate__subscription">
            <button className="donate__oneTime">GIVE ONCE</button>
            <button className="donate__monthly">MONTHLY</button>
          
        </div>
        <div className="form__wrapper">
          <div className="form__header">Choose an amount to give per month</div>
          <form action="">
           
            <input type="text" placeholder="$10GBP/mo" />
            <input type="text" name="" id="" placeholder="$20GBP/mo" />
            <input type="text" name="" id="" placeholder="$40GBP/mo" />
            <input type="text" name="" id="" placeholder="$100GBP/mo" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Other amount"
              className="input__otherAmount"
            />
             <Link to="/ceckout">
            <button className="donation__button">DONATE MONTHLY</button>
          </Link>
          </form>
        </div>
      </div>
    );
}

export default DonateForm
