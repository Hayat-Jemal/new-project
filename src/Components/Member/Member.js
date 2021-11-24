import React from 'react'
import "./member.css";
import member from "../Images/member.png"
import { useNavigate } from "react-router-dom";
const Member = () => {
    // const history = useHistory();
    const navigate = useNavigate();
    // function handleClick() {
    //   history.push("/donateForm");
    // }
    return (
      <div className="member__wrapper">
        <img src={member} alt="" />
        <p className="member__title">
          Take your first step towards making a lasting change for children with
          intellectual and developmental disabilities
        </p>
        <div className="">
          <div>
            {/* <p onClick={handleClick}>Make a One-Time Gift</p> */}
           
           <p onClick={() => {navigate("/about")}} className="member__lineone">Make a One-Time Gift
                    </p>
            <p>Make a Recurring Gift</p>
          </div>
        </div>
      </div>
    );
}

export default Member

