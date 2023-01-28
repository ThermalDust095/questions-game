import React, { Component } from 'react';
import './home.css'
import axios from 'axios';

class Home extends Component {
    state = { 
        username : "",
        question : ""
     }
    
    handleChangeU=event=>{
        this.setState({username: event.target.value})
    }

    handleChangeP=event=>{
        this.setState({question: event.target.value})
    }

    handleSubmit=event=>{
        event.preventDefault(); 
        console.log(this.state);
        axios({
            method:'post',
            url:'http://127.0.0.1:5000/users/',
            data:{
                username: this.state.username,
                question: this.state.question
            },
            headers:{
                "Content-Type": "application/json"
            }
        })
    } 
     
    render() { 
        return (
            <div className='home-page'>
            <div className='user-form'>
            <h1>Questions Game</h1>
            <form onSubmit={this.handleSubmit}>
            <div className='username-d'>
                <div>
                    <span className='username-labl'>@</span>
                    <input className='username-inp' type="text" value={this.state.username} onChange={this.handleChangeU}></input>
                </div>
                {/* <small>It need not be your real name</small> */}
            </div>
            <div className='questions-d'>
                <div>
                    <span className='questions-labl'>Questions:</span>
                </div>
                <textarea className='questions-inp' type="text" value={this.state.question} onChange={this.handleChangeP}></textarea>
            </div>
            <input id="sub-btn" type="submit" className='btn btn-outline-dark btn-lg' value="Submit"/>
            </form>
            </div>
            </div>

        );
    }
}
 
export default Home;