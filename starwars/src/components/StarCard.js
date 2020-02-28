import React from "react"
import styled from "styled-components"

const StyledCard = styled.div`
    background-color:rgba(255,233,414,0.8);
    text-align:center;
    margin:2%;
    padding:1.5%;
    border-radius:15px;
`

const StyledH1=styled.h1`
    font-family: 'Permanent Marker';
    text-decoration:underline;
`

const StarCard =(person)=>{
    console.log(person);
    return(
        <StyledCard>
            <StyledH1>Star Wars Character </StyledH1>
            <p>Name: {person.name}</p>
            <p>Gender: {person.gender}</p>
            <p>Films appeared in: {person.films}</p>
        </StyledCard>
    )
}

export default StarCard