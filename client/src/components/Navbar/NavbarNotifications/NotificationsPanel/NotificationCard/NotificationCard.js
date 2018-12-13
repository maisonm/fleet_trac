import React, { Component } from 'react'


//Styles
import { NotificationDetailCard, NotifictionTitle, NotificationDetails } from './styles';

class NotificationCard extends Component {
  render() {
    return (
        <NotificationDetailCard>
            <NotifictionTitle>
                <p>
                    Service Upcoming • <span>Forward Air</span>
                </p>
            </NotifictionTitle>
            <NotificationDetails>
                DOT service is upcoming on unit #619822 in 5 days.
        </NotificationDetails>
        </NotificationDetailCard>
    )
  }
}

export default NotificationCard;