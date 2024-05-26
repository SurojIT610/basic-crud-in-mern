import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Read = () => {
  const [allData, setAllData] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function getData() {
    try {
      const response = await fetch("http://localhost:5000/all");
      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "An error occurred while processing your request.");
      }
      const result = await response.json();
      setAllData(result);
      console.log(result)
    } catch (error) {
      setError(error.message);
    }
    
  }
  

  useEffect(() => {
    getData();
  }, []);

  const handleUpdate = (_id) => {
    navigate(`/update/${_id}`);
  };

  const handleDelete = (_id) => {
    navigate(`/delete/${_id}`);
  };
  const handleShow=(_id)=>{
    navigate(`/showme/${_id}`);
  }

  return (
    <div className='container my-2'>
      <h2 className='text-center'>ALL DATA</h2>
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {allData?.map((item, _id) => (
          <div className="col" key={_id}>
            <div className="card h-100">
              <img src={item.image || "placeholder_image_url"} className="card-img-top" alt={item.name || "image"} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.email}</p>
                <p className="card-text">{item.age}</p>
                <button className="btn btn-sm btn-primary me-2" onClick={() => handleUpdate(item._id)}>Update</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(item._id)}>Delete</button>
                <button className="btn btn-sm btn-primary me-2" onClick={() => handleShow(item._id)}>Show Me</button>
              </div>
              <div className="card-footer">
                <small className="text-muted">{new Date(item.updatedAt).toLocaleDateString()}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Read;
