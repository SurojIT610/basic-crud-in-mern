import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const [item, setItem] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleUpdateConfirmation = async () => {
    try {
      const response = await fetch(`http://localhost:5000/update/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
      if (response.ok) {
        alert('Item updated successfully');
        navigate('/all');
      } else {
        alert('Failed to update the item');
      }
    } catch (err) {
      setError(err)
      console.error('Error:', err);
    }
  };

  return (
    <div className='container'>
      <h2>Update Item</h2>
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" name="name" value={item.name || ''} onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" name="email" value={item.email || ''} onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label>Age</label>
        <input type="number" className="form-control" name="age" value={item.age || ''} onChange={handleInputChange} />
      </div>
      <button className='btn btn-primary mt-2' onClick={() => handleUpdateConfirmation(id)}>Update</button>

      <button className='btn btn-secondary mt-2' onClick={() => navigate('/all')}>Cancel</button>
    </div>
  );
}

export default Update;
