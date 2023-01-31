import { useState } from "react";
import "./App.css";
import user from "./assest/img/user.png";

function App() {
  const [name, setName] = useState("");
  const search=(e)=>{
    e.preventDefault();
    console.log(name);
    
  }
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card border-0" style={{ width: "25rem" }}>
        <nav className="navbar navbar-dark bg-dark rounded">
          <div className="container-fluid">
            <form
              className="d-flex w-100"
              onSubmit={search}
            >
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
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
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Cras justo odio
              </div>
              <span className="badge bg-primary rounded-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Cras justo odio
              </div>
              <span className="badge bg-primary rounded-pill">14</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
