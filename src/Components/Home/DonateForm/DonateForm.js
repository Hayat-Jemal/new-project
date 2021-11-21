import React from 'react'
import "./donateForm.css"
import LockIcon from "@material-ui/icons/Lock";

const DonateForm = () => {
    return (
      <div className="donateForm__conainer">
        <div className="donate__subscription">
          <button className="donate__oneTime">GIVE ONCE</button>
          <button className="donate__monthly">MONTHLY</button>
        </div>
        <div className="form__header">Choose an amount to give per month</div>
        <div className="form__wrapper">
          {/* <div className="form__header">Choose an amount to give per month</div> */}
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

            <button className="donation__button">DONATE MONTHLY</button>
            <div className="donation__text">
              <p>
                Your £40.00 monthly donation can give 16 people clean water
                every year. 100% funds water projects.
              </p>
            </div>
          </form>
        </div>
        <div className="donation__secure">
          <LockIcon style={{ marginTop: "10px" }} />
          <p>
            Secure Payment · This site is protected by reCAPTCHA and the Google
            Privacy Policy and Terms of Service apply.
          </p>
        </div>
      </div>
    );
}

export default DonateForm
