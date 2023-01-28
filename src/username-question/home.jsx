import React, { Component } from 'react';
import './home.css'

class Home extends Component {
    state = { 
        username : "",
        question : ""
     } 
    render() { 
        return (
                <div className='home-page'>
            <div className='user-form'>
            <h1>Questions Game</h1>
            <form>
            <div className='username-d'>
                <div>
                    <span className='username-labl'>@</span>
                    <input className='username-inp'></input>
                </div>
                {/* <small>It need not be your real name</small> */}
            </div>
            <div className='questions-d'>
                <div>
                    <span className='questions-labl'>Questions:</span>
                </div>
                <input className='questions-inp'></input>
            </div>
            </form>
            </div>
            </div>

        );
    }
}
 
export default Home;