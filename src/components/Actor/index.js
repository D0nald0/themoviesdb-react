import React from "react";

//Styles
import {Wrapper,Image} from "./Actor.styles";

const Actor = ({name,charachter,imageUrl}) =>(
    <Wrapper>
        <Image src={imageUrl} alt='actor-thumb'/>
        <h3>{name}</h3>
        <p>{charachter}</p>
    </Wrapper>
);

export default Actor;