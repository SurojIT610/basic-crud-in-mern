import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Showme = () => {
  const [item, setItem] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`http://localhost:5000/showme/${id}`);
        if (!response.ok) {
          const errorMessage = `HTTP error! Status: ${response.status}`;
          throw new Error(errorMessage);
        }
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          // If response is not JSON, throw an error
          throw new Error('Unexpected response format: Not JSON');
        }
        const result = await response.json();
        if (!Array.isArray(result)) {
          // If response is not an array, set the single item directly
          setItem(result);
        } else {
          // If response is an array, throw an error
          throw new Error('Unexpected response format: Should be a single object, not an array');
        }
      } catch (error) {
        setError(error.message);
      }
    }

    getData();
  }, [id]);

  const handleUpdate = (_id) => {
    navigate(`/update/${_id}`);
  };

  const handleDelete = (_id) => {
    navigate(`/delete/${_id}`);
  };

  const handleAll = () => {
    navigate('/all');
  };

  return (
    <div className="container my-2">
      <h2 className="text-center">Person Details</h2>
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      {item && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Email: {item.email}</p>
            <p className="card-text">Age: {item.age}</p>
            <button className="btn btn-primary" onClick={() => handleUpdate(item._id)}>Update</button>
            <button className="btn btn-danger" onClick={() => handleDelete(item._id)}>Delete</button>
            <button className="btn btn-primary" onClick={() => handleAll()}>Show All</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Showme;
