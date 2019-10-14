import React from "react";
import {Card, Container, CardTitle, CardText} from 'reactstrap'

const PlayerCard = props => {
  return (
    <Container fluid>
        <Card>
            <CardTitle>{props.name}</CardTitle>
            <CardText>
            <p>Country: {props.country}</p>
           <p> Searches: {props.searches}</p>
            </CardText>
           
           
        </Card>
    </Container>
               
  );
};

export default PlayerCard;
