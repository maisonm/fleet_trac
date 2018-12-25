import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

//Components
import VehicleStrip from './VehicleStrip/VehicleStrip'



class VehicleDisplayStrip extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fleets: [],
            error: {},
        }

    }

    componentDidMount() {
        //Local storage object saved as stringified JSON - must be parsed when retrieved
        //If sessionStorage is empty, value is null
        const user = JSON.parse(sessionStorage.getItem('user'));
        const { userId, userToken } = user;

        fetch(`fleets/${userId}/user`, {
            method: "get",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${userToken}`,
                "Content-Type": "application/json"
            },
        })
            .then(response => response.json())
            .then(res => {
                const { status, message } = res;
                // //If there is a status message, it is a result of a failed DB request. Returned status code and message is saved to state. Errors initialize a pop up warning displaying the message
                if (status.message) { 
                    this.setState({
                        error: {
                            status,
                            message,
                        }
                    });
                } else if (status === 200) {
                    this.setState({ fleets: res.fleets });
                // //If 403 or 500 status returns from the route, the JWT token did not authenticate against the route. The is considered unauthorized and re-routed back to the sign-in page for a fresh token.
                } else if (status === 403 || 500) {
                    return this.props.history.push('/');
                }
            })
            .catch(err => console.log(err));
        
    }
    

  render() {
      const { fleets } = this.state;
    return <div>
            { fleets ? 
                fleets.map((vehicle, i) => 
                <VehicleStrip key={i} vehicle={vehicle} />
                )
                :
                null
            }
        </div>
  }
}


export default  withRouter(VehicleDisplayStrip);

//MUST GET CUSTOMER NAME SOMEHOW!
//In fetch response create logic that will only send fleet vehcles that have DOT due dates within < 7 days
//This component must handle errors with a warning panel comonent pop up