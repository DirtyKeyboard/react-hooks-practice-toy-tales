import React from "react";

function ToyCard({toy, deleteToy, updateLikes}) {
  let {name, image, likes} = toy;
  async function handleDelete()
  {
    const api_call = await fetch(`http://localhost:3001/toys/${toy.id}`, {method: 'DELETE'})
      deleteToy(toy.id)
  }
  async function handleLike()
  {
    const api_call = await fetch(`http://localhost:3001/toys/${toy.id}`, {method: 'PATCH', headers:{'Content-Type': 'application/json'}, body: JSON.stringify({likes: likes+1})})
      updateLikes(toy.id)
  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
