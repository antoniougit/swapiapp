import React from 'react';
import VehiclesCard from './vehiclesCard';

const VehiclesList = ({ vehicles }) => {
    return(
        <div>
            {vehicles.map((user,i) => {
                return (
                    <VehiclesCard
                    key={i} 
                    name={vehicles[i].name.toLowerCase()} 
                    model={vehicles[i].model.toLowerCase()}
                    manufacturer={vehicles[i].manufacturer.toLowerCase()}
                    cost_in_credits={vehicles[i].cost_in_credits} 
                    length={vehicles[i].length}
                    max_atmosphering_speed={vehicles[i].max_atmosphering_speed}
                    crew={vehicles[i].crew}
                    passengers={vehicles[i].passengers}
                    cargo_capacity={vehicles[i].cargo_capacity}
                    consumables={vehicles[i].consumables}
                    vehicle_class={vehicles[i].vehicle_class.toLowerCase()}

                    />
                );
            })}
        </div>
    );
}

export default VehiclesList;