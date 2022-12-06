import React, { Component } from 'react'
import axios from 'axios';
import prof from '../prof.png'

export class Profile extends Component {

    state = {
        // id : null,
        data: {}
    }

    componentDidMount = () => {
        const data = this.props.match.params.profileId;
        // console.log(data);
        
        let payload = {
            token: "E4hbgZO-dlX-hapJRYBvLw",
            data: {
              name: "nameFirst",
              email: "internetEmail",
              phone: "phoneHome",
              _repeat: 10 
            }
        }; 
        
        axios({
          method: "post",
          url: "https://app.fakejson.com/q",
          data: payload
        }).then(resp => {
            console.log(resp)
            this.setState({
                data : resp.data[data],
            })
        }) .catch((error) => {
            if( error.response ){
                console.log(error.response.data); // => the response payload 
            }
        });
        
        // this.setState({
        //     id: data,
        // })
        
    }
    

  render() {

    const {email, name, phone} = this.state.data;


    return (
      <div className='container mt-3'>
         <h1>Profile</h1>

          <img className='d-flex justify-content-center' src={prof} height='80' alt='' />


         <ul className='list-group list-group-flush'>
            <li className='list-group-item'><strong> Nom:</strong>{name}</li>
            <li className='list-group-item'><strong> Email:</strong>{email} </li>
            <li className='list-group-item'><strong> Tel:</strong>{phone} </li>
         </ul>
      </div>
    )
  }
}


/* Methode avec Axios */

/* let payload = {
    token: "E4hbgZO-dlX-hapJRYBvLw",
    data: {
      name: "nameFirst",
      email: "internetEmail",
      phone: "phoneHome",
      _repeat: 300
    }
};

axios({
  method: "post",
  url: "https://app.fakejson.com/q",
  data: payload
}).then(function(resp) {
  // Do something with fake data
}); */



/* Methode jQuerry */

/* let payload = {
    token: "E4hbgZO-dlX-hapJRYBvLw",
    data: {
      name: "nameFirst",
      email: "internetEmail",
      phone: "phoneHome",
      _repeat: 300
    }
};

$.ajax({
  type: "POST",
  url: "https://app.fakejson.com/q",
  data: payload,
  success: function(resp) {
    // Do something with fake data
    }
}); */
	

export default Profile
