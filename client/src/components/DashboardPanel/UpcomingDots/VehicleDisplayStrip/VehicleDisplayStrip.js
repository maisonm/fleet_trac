import React, { Component } from 'react'

//Components
import VehicleStrip from './VehicleStrip/VehicleStrip'



class VehicleDisplayStrip extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fleets: [],
            error: '',
        }

    }

    componentDidMount() {
        //Local storage object saved as stringified JSON - must be parsed when retrieved
        const user = JSON.parse(sessionStorage.getItem('user'));

        fetch(`fleets/${user.userId}/user`, {
            method: "get",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        })
            .then(response => response.json())
            .then(res => {
                this.setState({ fleets: res.fleets });
            })
            .catch(err => console.log(err));
        
    }
    

  render() {
    return <div>
            {this.state.fleets.map((vehicle, i) => 
             <VehicleStrip key={i} vehicle={vehicle} />
            )}
        </div>
  }
}


export default  VehicleDisplayStrip;

//MUST GET CUSTOMER NAME SOMEHOW!
//In fetch response create logic that will only send fleet vehcles that have DOT due dates within < 7 days