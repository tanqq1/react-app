import React from 'react';
import { Link } from 'react-router-dom';

const SierBarList = [
    {
        title:'ALLPage',
        router:'/ALL'
    },
    {
        title:'refs',
        router:'/refs'
    },
    {
        title:'context',
        router:'/others'
    },
    {
        title:'hooks',
        router:'/hooks'
    },
    {
        title:'Dialog',
        router:'/propsChild'
    },
    {
        title:'Game',
        router:'/game'
    },
    {
        title:'Redirect',
        router:'/game'
    },
    {
        title:'canvasOfHtml5',
        router:'/canvasOfHtml5'
    },
    {
        title:'domOfHtml',
        router:'/domOfHtml'
    },
    {
        title:'cssAndHtml5',
        router:'/cssAndHtml5'
    },
    {
        title:'SVG',
        router:'/SvgAndHtml'
    },
    {
        title:'FunTest',
        router:'/FunTest'
    },

]

export default function SiderBar(){
    return (
        <ul>
        {
            SierBarList.map(item => (
                <li key={item.title}>
                    <Link to={item.router}>{item.title}</Link>
                </li>
            ))
        }
        </ul>
    )
}

