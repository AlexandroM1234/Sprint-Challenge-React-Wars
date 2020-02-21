import React from "react"
import styled from "styled-components"

const StyledCard = styled.div`
    background-color:rgba(255,233,414,0.5);
    text-align:center;
    margin:2%
`

const StyledHeader=styled.h1`
    font-family: 'Permanent Marker';
    text-decoration:underline;
`

const StarCard =(person)=>{
    console.log(person);
    return(
        <StyledCard>
            <StyledHeader>Star Wars Character </StyledHeader>
            <p>Name: {person.name}</p>
            <p>Gender: {person.gender}</p>
            <p>Films appeared in: {person.films}</p>
        </StyledCard>
    )
}

export default StarCard