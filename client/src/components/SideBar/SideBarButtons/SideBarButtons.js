import React, { Component } from 'react';

//Assets
import HomeIcon from './assets/home.svg';
import CustomersIcon from './assets/customers.svg';
import UrgentIcon from './assets/alert.svg';

//Styles 
import { SideBarButton, SideBarIcon } from './styles';

class SideBarButtons extends Component {
    render() {
        return (
            <div>
                <SideBarButton> 
                   <SideBarIcon src={HomeIcon} alt="sidebar icon" /> 
                   <p>Dashboard</p> 
                </SideBarButton>
                <SideBarButton> <SideBarIcon src={CustomersIcon} alt="sidebar icon" /> <p>Customers</p> </SideBarButton>
                <SideBarButton> <SideBarIcon src={UrgentIcon} alt="sidebar icon" /> <p>Urgent</p> </SideBarButton>
            </div>
        )
    }
}


export default SideBarButtons;

