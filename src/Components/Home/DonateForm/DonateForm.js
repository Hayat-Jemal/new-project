import React from 'react'

const DonateForm = () => {
    return (
      <div>
        <div>
          <button>GIVE ONCE</button>
          <button>MONTHLY</button>
        </div>
        <div>
          <div className="form__header">Choose an amount to give per month</div>
          <form action="">
            <input type="text" placeholder="$10GBP/mo" />
            <input type="text" name="" id="" placeholder="$20GBP/mo" />
          </form>
        </div>
      </div>
    );
}

export default DonateForm
