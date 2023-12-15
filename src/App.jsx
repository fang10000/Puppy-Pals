import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  // console.log(puppies);

  function handleClick() {
    // to be added
  }

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  // console.log(featuredPup);

  return (
    <div className="App">
      <div className="Puplist">
      <h2 style={{ color: 'Purple' }}> Puppy List </h2>
      {puppies.map((puppy) => {
        return (
          <p className="PuppyName"
            onClick={() => {
              setFeatPupId(puppy.id);
            }}
            key={puppy.id}
          >
            {puppy.name}
          </p>
        );
      })}
      </div>
      <div className="ThePup">
        {featPupId && (
          <div>
            <h2 style={{ color: 'Purple' }}>{featuredPup.name}</h2>
            <ul style={{ color: 'Purple' }}>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
