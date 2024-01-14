"use client";
import { Store } from 'react-notifications-component';


const notify = (props)=>{
        Store.addNotification({
          title: props.title,
          message: props.message,
          type: props.type,
          insert: 'top',
          container: 'top-right',
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: props.time,
            onScreen: true,
            showIcon: true
          }
        });

}


export default notify;