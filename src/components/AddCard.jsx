import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Box } from '@material-ui/core';
import '../index.css';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    background: '#222222',
    color: '#ffffff'
  },

  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'DotGothic16',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    },

    bullet: {
        display: 'inline-block',
        margin: '0 px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default class AddCard extends React.Component {

    constructor(){
        super();
        this.state = {
            cardname:'',
            author:'',

        };

    };
    

    updateInfo = (event) =>{
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        if(fieldName === 'cardname') {
            this.setState({cardname: fieldValue});
        }
        else if(fieldName === 'author'){
            this.setState({author:fieldValue});
        }
};


    addCard=(e)=>{

    let {cardname,author}=this.state;
    fetch('localhost:3000/add_card', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            cardname:cardname,
            author:author,

        })
        }).then(response=>response.json()).then(data=>{
            window.alert(data)
            //Do anything else like Toast etc.
    })

    }

    render(){

    return(

    <div className="game-box">

    <div>
        <label>Game Name</label>
        <input onChange={this.updateInfo} name="cardname" value={this.state.cardname}/>
    </div>
    <div>
        <label >Path to the EXE</label>
        <input onChange={this.updateInfo} name="author" value={this.state.author}/>
    </div>

    <button onClick={this.addCard}>Add</button>                                 

    </div>

        )
}
}