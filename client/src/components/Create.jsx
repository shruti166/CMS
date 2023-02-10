import React, { useState } from "react";
import axios from "axios";

export default function Create() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [data, setData] = useState({});

  const handleCreate = async(e) => {
    e.preventDefault();
    
    const post = {
      title: title,
      desc: desc,
      username: name
    };
    
    await axios
      .post("/posts/create", post)
      .then((res) => {
        console.log(res.data)
        setData(res.data);
        console.log(data)
        alert("Post Created successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div >
    <div style={{ width: "60%", margin: "auto" }}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Your title goes here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
          placeholder="Body.."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Username
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Created By"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="btn btn-outline-light"
        onClick={handleCreate}
      >
        Create
      </button>
    </div>
   
   
    </div>
    
  );
}
