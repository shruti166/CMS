import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Home() {
  const [data, setData] = useState([]);
  const handleFetch = async () => {
    toast("Fetching posts for you");
    await axios
      .get("/posts/")
      .then((res) => {
        setData(res.data.data);
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
    </div>
  );
}
