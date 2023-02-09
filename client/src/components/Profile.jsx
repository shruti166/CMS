import React from "react";

export default function Profile() {
  return <div>
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            {/* <span className="settingsDeleteTitle">Delete Account</span> */}
        </div>
        <form className="settingsForm" >
            <label>Profile Picture</label>
            <div className="settingsPP">
              
                <label htmlFor="fileInput">
               
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
            </div>
            <label htmlFor="">Username</label>
            <input type="text" placeholder = "username" />
            <label htmlFor="">Email</label>
            <input type="email" />
            <label htmlFor="">Password</label>
            <input type="password" />
            <button className="settingsSubmit" type="submit">Update</button>
            
              <span style={{color :"green", textAlign: "center", marginTop:"20px"}}>Profile has been updated.</span>
            
        </form>
      </div>
    
    </div>
  </div>;
}
