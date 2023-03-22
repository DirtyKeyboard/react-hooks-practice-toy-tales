import React, {useState} from "react";

function ToyForm({addToy}) {
  const [formData, setFormData] = useState({name: "", image:"", likes: 0})
  async function handleSubmit(e)
  {
  e.preventDefault()
   const resp = await fetch('http://localhost:3001/toys',{method: 'POST', headers: {'Content-Type': 'application/json'},body: JSON.stringify(formData)})
   const respJson = await resp.json();
   addToy(respJson)
   setFormData({name: "", image:"", likes: 0})
  }
  function handleChange(e)
  {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
