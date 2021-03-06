import React from 'react';
import Card from './Cards';
import AddCard from './AddCard';
import { Link, Redirect } from 'react-router-dom';
import { Box } from '@material-ui/core';
import '../index.css';
import Logo from '../imgs/brie.png';

const NewGame = props => {

    const {classes} = props;

    return (
        <>
        <div className="card">
            <div>
                <h2>Add a new game, ass-hole</h2>
            </div>
            
            <div className="container">
                <AddCard />
            </div>
        </div>
        </>
    );
};

export default NewGame;