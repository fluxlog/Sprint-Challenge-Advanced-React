import React from "react";
import { Card } from 'semantic-ui-react'

class PlayerCard extends React.Component{
    render(props){
        return(
            <Card>
            <Card.Content>
                <Card.Header><h1>Name: {this.props.name}</h1></Card.Header>
                <Card.Meta><h3>Country: {this.props.country}</h3></Card.Meta>
                <Card.Meta><h4>Searches: {this.props.searches}</h4></Card.Meta>
                <Card.Meta><h5>ID Number: {this.props.id}</h5></Card.Meta>
            </Card.Content>
        </Card>
        );
    }
}

export default PlayerCard; 