import React from "react";
import { CardGroup } from 'semantic-ui-react'
import PlayerCard from "./Card";

class PlayerList extends React.Component{
    render(props){
        return(
                <CardGroup>
                {this.props.data.map(player =>{
                    return(
                        <PlayerCard 
                            key={player.name}
                            name={player.name}
                            country={player.country}
                            searches={player.searches}
                            id={player.id}
                        />
                    );
                })}
                </CardGroup>
            
        );
    }
}

export default PlayerList; 


