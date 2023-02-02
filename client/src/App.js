import { useState } from "react";
import axios from "axios";
import "./App.css";
import user from "./assest/img/user.png";

function App() {
  const [name, setName] = useState("");
  const [response, setResponse] = useState();
  const search = (e) => {
    e.preventDefault();
    console.log(name);
    axios.get("https://api.nationalize.io/?name=" + name).then((res) => {
      console.log(res.data);
      setResponse(res.data.country);
    });
  };
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card border-0" style={{ width: "25rem" }}>
        <nav className="navbar navbar-dark bg-dark rounded">
          <div className="container-fluid">
            <form className="d-flex w-100" onSubmit={search}>
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (e.target.value === "") {
                    setResponse(null);
                  }
                }}
                className="form-control me-2 w-100"
                type="search"
                placeholder="Enter our Name ..."
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Predict
              </button>
            </form>
          </div>
        </nav>
        <img src={user} className="card-img-top w-50 mx-auto p-3" alt="user" />
        <div className="card-body">
          <h5 className="card-title">Your Name is: {name}</h5>
          <ul className="list-group ">
            {(response?.length === 0) ? 
              <div className="alert alert-primary" role="alert">
              No Result
            </div>
             : (
              response?.map((country) => {
                return (
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{country.country_id}</div>
                    </div>
                    <span className="badge bg-primary rounded-pill">
                      {(country.probability * 100).toFixed(2)}%
                    </span>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
