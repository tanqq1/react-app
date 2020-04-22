import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import Game from '../pages/game/index';
import RefsContainer from '../pages/refs/refsContainer';
import ContextReact from '../pages/others/contextReact';
import HooksExample from '../pages/hooks/index';
import Dialog from '../pages/others/propsChild';
import ReactIndex from '../App'
import CanvasOfHtml5 from '../pages/html5/canvasOfHtml5';
import DomOfHtml from '../pages/html5/domOfHtml';
import CssAndHtml5 from '../pages/html5/cssAndHtml5';
import SvgAndHtml from '../pages/html5/svgAndHtml';

// function getRouteComponent(paramC){
//     return React.lazy(() => import(paramC))
// }
const routes = [
    {
        path:'/ALL',
        component: ReactIndex,
        // component: getRouteComponent(import('../App')), //Object
        exact: true,
    },
    {
        path:'/refs',
        component: RefsContainer,
        exact: true,
    },
    {
        path:'/others',
        component: ContextReact,
        exact: true,
    },
    {
        path:'/hooks',
        component: HooksExample,
        exact: true,
    },
    {
        path:'/propsChild',
        component: Dialog,
        exact: true,
    },
    {
        path:'/game',
        component: Game,
        exact: false,
    },
    {
        path:'/canvasOfHtml5',
        component: CanvasOfHtml5,
        exact: false,
    },
    {
        path:'/domOfHtml',
        component: DomOfHtml,
        exact: false,
    },
    {
        path:'/cssAndHtml5',
        component: CssAndHtml5,
        exact: false,
    },
    {
        path:'/SvgAndHtml',
        component: SvgAndHtml,
        exact: false,
    },
]
export default function Routes(){
    return (
        <Switch>
            {
                routes.map(route => (
                    <Route  
                        key={route.path}
                        path={route.path} 
                        component={route.component} 
                    />
                ))
            }
        </Switch>
    )
}