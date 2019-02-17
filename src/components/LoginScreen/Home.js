import React, { Component } from 'react';
import firebase from '../../firebase.js';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout() {
        firebase.auth().signOut();
    }
  
    render() {
        return (
               <div>
                <h1>Welcome to Home</h1>
                  <h1>
                 User ID is:
                   <script type="text/javascript">
                    var userID = firebase.auth().currentUser.uid;
                   document.write(userID)
                   </script>
                 </h1>
               <button onClick={this.logout}>Logout</button>
              </div>
        );

    }

}

export default Home;