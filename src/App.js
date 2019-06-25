import React from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import ReactNotification from "react-notifications-component";

import './App.css';
// import 'react-notifications/lib/notifications.css';
import 'font-awesome/css/font-awesome.css';
import 'react-notifications-component/dist/theme.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addNotification = this.addNotification.bind(this);
    this.notificationDOMRef = React.createRef();
  }

  createNotification(type) {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
        default:
      }
    }
  }

  addNotification() {
    this.notificationDOMRef.current.addNotification({
      title: "Awesomeness",
      message: "Awesome Notifications!",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 2000 },
      dismissable: { click: true }
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <button className='btn btn-info'
            onClick={this.createNotification('info')}>Info
          </button>
          <br />
          <button className='btn btn-success'
            onClick={this.createNotification('success')}>Success
          </button>
          <br />
          <button className='btn btn-warning'
            onClick={this.createNotification('warning')}>Warning
          </button>
          <br />
          <button className='btn btn-danger'
            onClick={this.createNotification('error')}>Error
          </button>
          <br />
          <button className='btn btn-info'
            onClick={() => NotificationManager.info('Body message', 'Title', 5000, () => { }, true)}>Info Priority
          </button>

          <NotificationContainer />
        </div>
        <hr />
        <div className="app-content">
          <ReactNotification ref={this.notificationDOMRef} />
          <button onClick={this.addNotification} className="btn btn-primary">
            Add Awesome Notification
        </button>
        </div>
      </div>
    );
  }
}