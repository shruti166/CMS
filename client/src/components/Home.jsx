import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit, FaTrash } from "react-icons/fa";


export default function Home() {
  const [data, setData] = useState([]);
  const page = 1;

  const handlePrev = async () => {
  
    toast("Fetching posts for you");
    await axios
      .get(`/posts/?page=${page-1}&limit=3`)
      .then((res) => {
        setData(res.data.posts);
      
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleNext = async () => {

    toast("Fetching posts for you");
    await axios
      .get(`/posts/?page=${page+1}&limit=3`)
      .then((res) => {
        setData(res.data.posts);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const handleFetch = async () => {
    toast("Fetching posts for you");
    await axios
      .get('/posts/')
      .then((res) => {
        setData(res.data.posts);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-light"
        onClick={handleFetch}
      >
        Show all posts
      </button>
      {data.map((elem) => {
        return (
          <div
            className="card"
            key={elem._id}
            style={{ width: "80%", margin: " 5px auto" }}
          >
            <div className="card-body">
              <h1 className="card-title">{elem.title}</h1>
              <p className="card-text">{elem.desc}</p>
              <span style={{ color: "gray" }}> - By {elem.username}</span>
              <br></br>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "10%",
                  padding: "5px",
                }}
              >
                <FaEdit />
                <FaTrash />
              </div>
            </div>
          
          </div>
          
        );
      })}
        <div style = {{display: 'flex', justifyContent:'center'}}>
              <button
                type="button"
                className="btn btn-outline-light"
                onClick={handlePrev}
                
              >
                Prev
              </button>
              <button
                type="button"
                className="btn btn-outline-light"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
    </div>
  );
    }
