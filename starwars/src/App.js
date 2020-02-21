import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios"
import StarCard from './components/StarCard';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [people,setPeople]=useState([]);

  useEffect(()=>{
    axios
      .get("https://swapi.co/api/people/")
      .then(response =>{
        setPeople(response.data.results)
        console.log(response.data.results)
    })
  },[]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {people.map(person =>{
        return <StarCard key={person.id}name={person.name}/>
      })}
    </div>
  );
}

export default App;
