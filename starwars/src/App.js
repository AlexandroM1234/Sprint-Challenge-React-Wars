import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios"
import StarCard from './components/StarCard';
import styled from "styled-components"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [people,setPeople]=useState([]);

  const StyledApp = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;
    flex-wrap:wrap;
  `
  const StyledHeader=styled.h1`
font-family: 'Press Start 2P';
`


  useEffect(()=>{
    axios
      .get("https://swapi.co/api/people/")
      .then(response =>{
        setPeople(response.data.results)
    })
  },[]);

  return (
    <StyledApp>
      <StyledHeader>React Wars</StyledHeader>
      {people.map(person =>{
        return <StarCard key={person.id}name={person.name} gender={person.gender} films={person.films.length} />
      })}
    </StyledApp>
  );
}

export default App;
