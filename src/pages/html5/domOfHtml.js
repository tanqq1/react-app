import React from 'react';

export default function DomOfHtml(){

    function addOlRow(){
        let element  = document.querySelector('ol');
        if(element){
            let liList = document.createElement('li');
            liList.appendChild(document.createTextNode("createTextNode"));
            element.appendChild(liList);
        }
    }

    return (
        <div>
            <h1>DOM操作方法</h1>
            <button onClick={addOlRow}>add a ol li</button>
            <h3>节点的操作方法s</h3>
            <ol>
                <li>appendChild</li>
                <li>removeChild</li>
                <li>clearChild</li>
            </ol>
            <h3>节点之间的关系</h3>
            <ul>
                <li>parentNode</li>
                <li>childNode</li>
                <li>firstChild</li>
                <li>lastChild</li>
                <li>nextSibleNode</li>
                <li>previousSibleNode</li>
            </ul>
            <h3>Document</h3>
            <ol>
                <li>document.getElementsByTagName()</li>
                <li>document.getElementsByClassName()</li>
                <li>document.getElementsByName()</li>
                <li>document.getElementById()</li>
                <li>document.querySelector()</li>
                <li>document.querySelectorAll()</li>
            </ol>
            <div className="text_break">
                no use, that is so hard!!this is a link，https://segmentfault.com/a/1190000015995283?utm_source=tag-newest ,so what we can see；
            </div>
        </div>
    )
}