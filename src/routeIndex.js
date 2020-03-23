import React from 'react';
import { 
    BrowserRouter as Router,
    } from 'react-router-dom';
import SiderBar from './containers/siderBar';
import Routes from './routes/route';
import './index.css';

export default function RouterIndex(){
    return (
        <Router>
            <div className="container">
                <div className="siderBar">
                    <SiderBar />
                </div>
                <div className="pageContent">
                    <Routes />
                </div>
            </div>
        </Router>
    )
}