import React, {useState} from "react";
import axios  from "axios";


export default function Home() {
  const [data, setData] = useState([]);
  const handleFetch = async() => {
    await axios.get("/posts/").then((res) => {
      setData(res.data.data);
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })
  }
  
  return <div>
       <button
        type="button"
        className="btn btn-outline-light"
        onClick={handleFetch}
      >
        Create
      </button>
      {data.map((elem) => {
        return <div className="card" key = {elem._id} style = {{width: "80%", margin: " 5px auto"}}>
        <div className="card-body" >
          <h5 className="card-title">{elem.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{elem.username}</h6>
          <p className="card-text">{elem.desc}</p>
         
        </div>
      </div>
      })}
    </div>
   
 
}
