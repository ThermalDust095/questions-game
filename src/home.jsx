import React, { Component } from 'react';
import './home.css'
import serverReq from './RqData';

var sr = new serverReq();

class Home extends Component {
    state = { 
        username : "",
        question : "",
        u_place : "",
        q_place : ""
     }
    
    handleChangeU=event=>{
        this.setState({username: event.target.value})
    }

    handleChangeP=event=>{
        this.setState({question: event.target.value})
    }

    handleSubmit=event=>{
        event.preventDefault(); 
        if(this.state.username.length>=1 && this.state.question.length>=3){
        console.log(this.state);
        this.props.hasSubmit();
        sr.submitForm(this.state.username,this.state.question);
        this.setState({username:"",question:""});}
        else{
            this.setState({u_place:"Enter a Username",
                q_place:"Enter a valid Question"});
        }
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
                    <input className='username-inp' type="text" value={this.state.username} onChange={this.handleChangeU} placeholder={this.state.u_place}></input>
                </div>
                {/* <small>It need not be your real name</small> */}
            </div>
            <div className='questions-d'>
                <div>
                    <span className='questions-labl'>Questions:</span>
                </div>
                <textarea className='questions-inp' type="text" value={this.state.question} onChange={this.handleChangeP} placeholder={this.state.q_place}></textarea>
            </div>
            <input id="sub-btn" type="submit" className='btn btn-outline-dark btn-lg' value="Submit"/>
            </form>
            </div>
            </div>

        );
    }
}
 
export default Home;