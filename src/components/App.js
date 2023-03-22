import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  useEffect(async() => {
    const rawData = await fetch('http://localhost:3001/toys')
    const data = await rawData.json();
    setToys(data)
  }, [])
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy(newToy)
  {
    setToys([...toys, newToy])
  }

  function deleteToy(toyId)
  {
    const newToys = toys.filter(el => (el.id!==toyId))
    setToys(newToys)
  }

  function updateLikes(toyId)
  {
    const newToys = [...toys]
    newToys.map(el => {
      if (el.id === toyId)
        el.likes = el.likes+1;
    })
    setToys(newToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} deleteToy={deleteToy} updateLikes={updateLikes}/>
    </>
  );
}

export default App;
