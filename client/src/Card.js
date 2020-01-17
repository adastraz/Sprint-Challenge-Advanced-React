import React from 'react'
import styled from 'styled-components'
const Pretty = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width: 22%;
justify-content: space-around;
padding:1% 1%;
background: plum;
margin:2% 0;
color:powderblue;
border-radius:20px;
`
const Card = props => {
    return(
        <Pretty>
            <p>Name : {props.item.name}</p>
            <p>Country : {props.item.country}</p>
        </Pretty>
    )
    
}
export default Card