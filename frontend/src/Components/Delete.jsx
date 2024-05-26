import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Delete = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams(); // Change _id to name

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/delete/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Item deleted successfully');
        navigate('/');
      } else {
        alert('Failed to delete the item');
      }
      console.log(response)
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    }
  };

  return (
    <div className='container'>
      <h2>Delete Item</h2>
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      <button className='btn btn-danger mt-2' onClick={handleDelete}>Delete</button>
      <button className='btn btn-secondary mt-2' onClick={() => navigate('/all')}>Cancel</button>
    </div>
  );
}

export default Delete;
