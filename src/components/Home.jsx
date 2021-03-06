import React from 'react';
import Card from '../components/Cards';
import AddCard from './AddCard';
import { Link, Redirect } from 'react-router-dom';
import { Box } from '@material-ui/core';
import '../index.css';

const Home = props => {

    const {classes} = props;

    return (
        <>
            <div className="boxes">
                <Card className="game-box"/>
                <Card className="game-box"/>
                <Card className="game-box"/>
                <Card className="game-box"/>
            </div>
        </>
    );
};

export default Home;