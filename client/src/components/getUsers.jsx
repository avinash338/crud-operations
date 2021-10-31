import React, { Component } from 'react';
import axios from "axios";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users:[]
         }
    }
    componentDidMount(){
        this.getusers()
    }
    getusers = () => {
        axios.get("http://localhost:6000/users").then((response) => {
            console.log(response);
        }).catch(err=>{
            console.log(err);
        }) 
    }
    render() { 
        return ( <div></div> );
    }
}
 
export default Users;