import React from "react";

export const Card: React.FC<Props> = (props) => {
    return <div className = "w-2xs p-8">{props.name} <img src={props.image}></img></div>
}

interface Props {
    id: number;
    image:string;
    name:string;
    types:string[];
}