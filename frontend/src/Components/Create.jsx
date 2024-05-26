import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");
const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addUser = { name, email, age };

    try {
      const response = await fetch("http://localhost:5000/", {
        method: "POST",
        body: JSON.stringify(addUser),
        headers: {
          "Content-type": "application/json"
        }
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setError("");
        setName("");
        setEmail("");
        setAge("");
        navigate("/all")
      } else {
        const result = await response.json();
        console.log(result);
        setError(result.error || "An error occurred while processing your request.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while processing your request.");
    }
  };

  return (
    <div className='container'>
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      <h2 className='text-center'>Please enter your Details</h2>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-auto col-md-12">
          <label htmlFor="text1" className="visually-hidden">Name</label>
          <input type="text" className="form-control" id="text1" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="col-auto col-md-12">
          <label htmlFor="email1" className="visually-hidden">Email</label>
          <input type="email" className="form-control" id="email1" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="col-auto col-md-12">
          <label htmlFor="num1" className="visually-hidden">Age</label>
          <input type="number" className="form-control" id="num1" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
        </div>
      </form>
    </div>
  );
}

export default Create;
