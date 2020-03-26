import React from 'react';
import './style.css';
import Svg from './demo.svg';

export default function SvgAndHtml(){
    return (
        <div>
            <svg version="1.1" baseProfile="full" width="1000" height="1000" xmlns="http://www.w3.org/2000/svg" zoomAndPan="magnify">

                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor:'#ffff00', stopOpacity:1}} />
                        <stop offset="50%" style={{stopColor:'#00ff00', stopOpacity:1}} />
                        <stop offset="100%" style={{stopColor:'#ff0000', stopOpacity:1}} />
                    </linearGradient>
                    <radialGradient id="grad2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:0}} />
                        <stop offset="100%" style={{stopColor:'#0000ff', stopOpacity:1}} />
                    </radialGradient>
                    <filter id="f1" x="0" y="0" width="200%" height="200%">
                        <feOffset result="offOut" in="SourceGraphic" dx="20" dy="20" />
                        <feBlend in="SourceGraphic" in2="offOut" mode="normal" />
                    </filter>
                </defs>
                {/* Rect */}
                <rect x="20" y="20" width="300" height="200" fill="red" />
                {/* <rect x="20" y="20" width="300" height="200" fill="red" filter="url(#f1)" /> */}
                <circle cx="170" cy="120" r="80" fill="green" />
                <text x="170" y="145" fontSize="60" textAnchor="middle" fill="white">SVG</text>
                {/* circle 圆*/}
                <circle cx="500" cy="140" r="120" stroke="orange" strokeWidth="2" fill="white" />
                <circle cx="500" cy="140" r="100" fill="blue" />
                <circle cx="500" cy="140" r="80" fill="white" />
                <text x="460" y="150" fill="red" fontSize="30" strokeWidth="2" stroke="red">circle</text>
                {/* rect 矩形 */}
                <rect x="20" y="400" width="60" height="40" style={{fill:'yellow', stroke:'black', strokeWidth: 2, fillOpacity:0.5, strokeOpacity:0.6, rx:3 }} />
                <text x="25" y="425" fill="black" fontSize="24">rect</text>
                {/* ellipse  椭圆*/}
                <ellipse cx="80" cy="300" rx="60" ry="40" fill="url(#grad1)" style={{ stroke: 'black', strokeWidth:4 }} />
                <ellipse cx="200" cy="300" rx="60" ry="40" fill="url(#grad2)" style={{stroke: 'black', strokeWidth:4 }} />
                <ellipse cx="320" cy="300" rx="60" ry="40" style={{fill:'purple', stroke: 'black', strokeWidth:4 }} />
                <text x="45" y="310" fontSize="24" fill="white">ellipse</text>
                <text x="170" y="310" fontSize="24" fill="white">ellipse</text>
                <text x="290" y="310" fontSize="24" fill="white">ellipse</text>
                {/* line 直线 */}
                <line x1="650" y1="50" x2="690" y2="150" stroke="#34870b" strokeWidth="6" />
                <text x="670" y="90" fontSize="30" fill="black">line</text>
                {/* polygon  多边形 */}
                <polygon 
                    points="800,20,760,40,730,40,760,60,730,80,800,60,850,80,830,60,860,40,830,20"
                    strokeWidth="1"
                    stroke="black"
                    fill="pink"
                    fillRule="evenodd"
                />
                {/* polyline 折线 */}
                <polyline points="200,400,260,400,260,440,320,440" stroke="orange" fill="white" strokeWidth="2" fillRule="nozero" />
                {/* path 路径 */}
                <path d="M300 400 L350 400 T400 400 Z" stroke="purple" strokeWidth="2" />
            </svg>
        </div>
        
    )
}

