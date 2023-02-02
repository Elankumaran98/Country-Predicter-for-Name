import { useState } from "react";
import axios from "axios";
import "./App.css";
import user from "./assest/img/user.png";
import allCountries from "./assest/json/country-abbreviation.json";

function App() {
  const [name, setName] = useState("");
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const search = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get("https://api.nationalize.io/?name=" + name).then((res) => {
      const result = [];
      const countries = res.data.country;
      console.log(allCountries);
      countries.forEach((country) => {
        allCountries.forEach((c) => {
          if (c.abbreviation === country.country_id) {
            country.fullName = c.country;
            result.push(country);
          }
        });
      });
      console.log(result);
      setResponse(res.data.country);
      setLoading(false);
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
                placeholder="Enter Your Name ..."
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
            {loading ? (
              <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : response?.length === 0 ? (
              <div className="alert alert-warning" role="alert">
                No Result
              </div>
            ) : (
              response?.map((country) => {
                return (
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{country.fullName}</div>
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
