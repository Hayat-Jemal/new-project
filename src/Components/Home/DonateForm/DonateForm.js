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
            <input type="text" name="" id="" placeholder="$40GBP/mo" />
            <input type="text" name="" id="" placeholder="$100GBP/mo" />
            <input type="text" name="" id="" placeholder="Other amount" />
          </form>
        </div>
      </div>
    );
}

export default DonateForm
