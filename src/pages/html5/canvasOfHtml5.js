import React, { useState, } from 'react';
import './style.css';

function CanvasOfHtml5(){

    function getCanvasNode(){
        let canvas = document.querySelector("#canvas");
        let ctx = canvas.getContext('2d');
        return ctx;
    }


    function addRect(){
        const ctx = getCanvasNode();
        ctx.fillStyle = 'red';
        ctx.fillRect(10,10,150,100);

        ctx.fillStyle = 'pink';
        ctx.fillRect(50,50,150,100);

        ctx.strokeRect(40,60,100,100);
    }

    function clearRect(){
        let ctx = getCanvasNode();
        ctx.clearRect(40,40,50,100);
    }

    function addOtherGraph(){
        const ctx = getCanvasNode();
        ctx.beginPath();
        ctx.moveTo(200,200);
        ctx.lineTo(230,230);
        ctx.lineTo(200,260);
        ctx.lineTo(170,230);
        ctx.fillStyle="blue";
        ctx.fill();
    }

    function addArc(){
        const arcUnit = Math.PI / 180;
        const canvas = getCanvasNode();
        canvas.beginPath()
        canvas.arc(300,300,40,0, Math.PI * 2, true);
        // canvas.stroke();
        // canvas.fillStyle = 'pink';
        canvas.fillStyle = '#6ebade';
        canvas.fill();
        canvas.moveTo(280,280);
        canvas.arc(280,280,5, 0, arcUnit * 360, false);
        canvas.stroke();
        canvas.moveTo(320,280);
        canvas.arc(320,280,5,0, arcUnit * 360, false);
        canvas.stroke();
        canvas.moveTo(300,320);
        canvas.beginPath();
        canvas.arc(300,320,10,0,Math.PI, false);
        canvas.stroke();
    }

    function bezierGraph(){
        const graphNode = getCanvasNode();
        graphNode.beginPath();
        graphNode.moveTo(300,300);
        graphNode.quadraticCurveTo(350,350,380,400);
        // graphNode.strokeStyle = 'blue';
        // graphNode.stroke();
        graphNode.quadraticCurveTo(320, 360, 350,400);
        // graphNode.strokeStyle = 'red';
        // graphNode.stroke();
        graphNode.bezierCurveTo(280,400,320, 360,240,300);
        graphNode.strokeStyle = '#000000';
        // graphNode.rect(260, 260, 50, 60); //绘制矩形
        graphNode.stroke()
    }
    
    function bezierGraphRight(){
        const graphNode = getCanvasNode();
        graphNode.beginPath();
        graphNode.moveTo(300,300);
        graphNode.quadraticCurveTo(230, 360, 200,420);
        graphNode.quadraticCurveTo(240, 380, 250, 380);
        graphNode.bezierCurveTo(250, 480, 310, 350, 355, 300);
        graphNode.strokeStyle = '#000000';
        graphNode.stroke()
    }

    return (
        <div>
            <h1>Canvas</h1>
            <div>
                <ol>
                    <li>fillRect(x,y,width,height)--填充矩形</li>
                    <li>strokeRect(x,y,width,height)--矩形框描边</li>
                    <li>clearRect(x,y,width,height)--清理矩形区域</li>
                    <li>fillStyle="pink" - 设置填充颜色</li>
                </ol>

                <ul>
                    <li>beginPath()开始绘制</li>
                    <li>moveTo(x,y)移动笔触</li>
                    <li>lineTo(x,y)绘制直线</li>
                    <li>fill()填充</li>
                    <li>storke()描边</li>
                    <li>closePath()闭合路径</li>
                </ul>
                <ol>
                    <li> arc(x,y,radius,begin,end,direct)绘制圆弧(圆心x\y,半径,开始弧线位置，结束弧线位置，方向(顺、逆) )</li>
                    <li>quadrativCurveTo(cp1x, cp1y, x, y)二次贝塞尔曲线</li>
                    <li>bezierCuerveTo(cp1x, cp1y, cp2x, cp2y, x, y)三次贝塞尔曲线</li>
                </ol>
                <h3>new Path2D() 记录路径</h3>
            </div>
            <div>
                <button onClick={addRect}>画一个矩形</button>
                <button onClick={clearRect}>clear region</button>
                <button onClick={addOtherGraph}>菱形</button>
                <button onClick={addArc}>笑脸</button>
                <button onClick={bezierGraph}>通过贝塞尔曲线来绘制</button>
                <button onClick={bezierGraphRight}>通过贝塞尔曲线来绘制</button>
            </div>
            <canvas id="canvas" width="500" height="500">该浏览器版本不支持canvas</canvas>
        </div>
    )

}

export default CanvasOfHtml5;
