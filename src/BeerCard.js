import React from 'react'

export default function BeerCard(props) {
  return (
    <li style={{ listStyle: "none"}}>
        <img style={{height: "200px"}} src={props.image_url}></img>
        <h3>Name:{props.name}
            <span>First Brewed:{props.first_brewed}</span>
        </h3>
        <h4>Tagline:{props.tagline}</h4>
        <p>
            <span>ABV:{props.abv} </span>
            Description: {props.description}
        </p>
    </li>
  )
}
