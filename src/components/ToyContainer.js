import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, deleteToy, updateLikes}) {
  return (
    <div id="toy-collection">{toys.map(el => (<ToyCard key={el.id} deleteToy={deleteToy} toy={el} updateLikes={updateLikes}/>))}</div>
  );
}

export default ToyContainer;
