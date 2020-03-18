import React from 'react';
import { 
    Link, 
    Route, 
    BrowserRouter as Router,
    Switch,
    Redirect
    } from 'react-router-dom';
import RefsContainer from './pages/refs/refsContainer';
import ContextReact from './pages/others/contextReact';
import HooksExample from './pages/hooks/index';
import Dialog from './pages/others/propsChild';
import Game from './pages/game/index';

export default function RouterIndex(){
    return (
        <Router>
            <div>
                <ol>
                    <li>
                        <Link to="/pages/refs/refsContainer">refs</Link>
                    </li>
                    <li>
                        <Link to="/pages/others/contextReact">context</Link>
                    </li>
                    <li>
                        <Link to="/pages/hooks/index">hooks</Link>
                    </li>
                    <li>
                        <Link to="/pages/others/propsChild">Dialog</Link>
                    </li>
                    <li>
                        <Link to="/pages/game/index">Game</Link>
                    </li>
                    <li>
                        <Link to="/pages/game/index1">Redirect</Link>
                    </li>
                </ol>
            </div>
            <div>
                <Switch>
                    <Route path="/pages/refs/refsContainer">
                        <RefsContainer />
                    </Route>
                    <Route path="/pages/others/contextReact">
                        <ContextReact />
                    </Route>
                    <Route path="/pages/hooks/index">
                        <HooksExample />
                    </Route>
                    <Route path="/pages/others/propsChild">
                        <Dialog />
                    </Route>
                    <Route path="/pages/game/index">
                        <Game />
                    </Route>
                    <Route path="/pages/game/index1">
                        <Redirect to="/pages/hooks/index" />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}