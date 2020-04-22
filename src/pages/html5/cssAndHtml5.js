import React, { useEffect } from 'react';
import './style.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierLakesideDark,  railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function(){

    useEffect(() => {
        addListen()
    },[])

    function addListen(){
        const btnId = document.querySelector('button');
        // const btnId = document.getElementById('butn');
        btnId.addEventListener('click',bgOnClick);
        // btnId.removeEventListener('click',bgOnClick);
    }

    function toNewPage(){
        let newWin = window.open('https://dohko.mis.tiaofangzi.com/?redirectURL?redirectURL#/');
        newWin.opener = null;
    }
    function playAudio(){
        let audio = document.getElementsByTagName('audio')[0];
        if(audio.paused){
            audio.play();
        }else{
            audio.pause();
        }
    }
    function playAudio2(){
        let audio2 = document.getElementById('audio2');
        if(audio2.paused){
            audio2.play();
        }else {
            audio2.pause();
        }
    }

    function getRgbRandom(num) {
        return Math.random() * num;
    }
    function bgOnClick(e){
        const color = 'rgb('+ getRgbRandom(255) + ',' + getRgbRandom(255) + ',' + getRgbRandom(255) + ')';
        e.target.style.color = color;
    }

    function sayHi(name){
        console.log("hello",name)
    }

    const ID = setTimeout(sayHi,3000,'tqq');

    return(
        <div>
            <button id="butn">click</button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
            <h1>追随ing,何时是尽头</h1>
            {/* <a href="index.html">测试base标签</a> */}
            <a href="#myself" name="myself">jump to my self</a>
            <div style={{marginBottom: 20}}>
                <p>这是div下的p</p>
            </div>
            <div>
                {/* <!-- 三角图标的制作 --> */}
                {/* <a href="audio.m4a" download>下载</a> */}
                <div style={{fontWeight: 700,color: 'green'}}>
                    listen it:
                    <div id="triggleRight" onClick = {playAudio}></div>
                </div>
                {/* <!-- <audio preload="none" src="audio.m4a">支持的话</audio> --> */}
                <audio preload="none" src="http://api.clink.cn/20191113/3001961-20191113112050-18628888892-01042675210-record-10.10.59.102-1573615250.54575.mp3?enterpriseId=3001961&userName=admin&pwd=acea712c8197e3ae2ac37842551bed93&seed=aaa">支持的话</audio>
            </div>
            <div>
                <h2 onClick = {playAudio2}>second audio</h2>
                {/* <audio src="audio2.m4a" id="audio2"></audio> */}
                {/* <a href="audio2.m4a" download="audio2.m4a">是下载的吗</a> */}
            </div>
            {/* <div className="left"></div> */}
            <div>
                address标签的使用
                <address>
                    <p>联系人：15765582315</p>
                </address>
            </div>
            {/* <div className="maiodian">
                <ul>
                    <li><a href="#mao" id="index">锚点 </a></li>
                    <li><a href="#cssVar" id="index">css 变量 </a></li>
                    <li><a href="#position" id="index">定位 </a></li>
                    <li><a href="#cssCounter" id="index">css的计数 </a></li>
                    <li><a href="#bfc" id="index">什么是BFC </a></li>
                    <li><a href="#algorithm" id="index">算法 </a></li>
                    <li><span id="noIndex">预加载懒加载？ </span></li>
                    <li><span id="noIndex">webPack </span></li>
                    <li><a href="#chooseCss" id="index">css选择器 </a></li>
                </ul>
            </div> */}
            <h4 id="mao">锚点的使用</h4>
            <div id="divContainer">
            <SyntaxHighlighter language="javascript" style={atelierLakesideDark}>
                    {
                        `关于锚点的使用：
                        1·锚点的设置1：可以通过超链接标签<a></a>的name属性来指定锚点名
                        2·锚点的设置2：可以通过其他标签的id属性来制定锚点名
                        3·如何跳转到锚点名：通过超链接标签<a></a>的href属性来跳转到指定的锚点<a href="#锚点名"></a>
                    锚点实现效果：
                        如果目标链接所在页面位置距离底部足够远，点击锚点将会跳转到目标位置并且目标行置顶
                    扩展：
                        ***点击某行让改行置浏览器视窗顶部---可以设定锚点与链接在同一个标签上，如：<a href="#self" name="self"></a>
                        ***当存在同名时，id的优先级会大于name,即超链接为相对路径时,浏览器会优先去查找是否存在同名的id属性，如果没有，将会去
                        查找同名的name属性`
                    }
                </SyntaxHighlighter>
            </div>
            <h4 id="cssVar">css变量的使用</h4>
            <div id="divContainer">
                    通过--来定义css 变量,通过 var 来使用变量:css变量同js变量一样，也存在作用域，即定义所在的元素类才能使用，：root
                        相当于js中的全局变量
                        <SyntaxHighlighter language="javascript" style={atelierLakesideDark}>
                            {`:root {
                            --titleColor: darkGreen
                            --px20: 20px;
                            --pColor:darkcyan;
                            }
                            h1 {
                                color: var(--titleColor);
                                font-size: var(--px20);
                            }
                        
    
                        //在该例中，p只有作为div的子元素 font-size才会生效；因为dSize变量是定义在div元素下的
                        div {
                            --dColor: blue;
                            --dSize: 18px;
                        }
                        p{
                            color: var(--pColor);
                            font-size: var(--dSize);
                        }
                        `}
                        </SyntaxHighlighter>

            </div>
            <h4 id="position">定位解析</h4>
            <div id="divContainer">
            <SyntaxHighlighter language="javascript" style={railscasts}>
                    position ['relative','absolute','fixed','inherit','sticky','static']
            </SyntaxHighlighter>
            </div>
            <h4 id="cssCounter">css的计数属性</h4>
            <div id="divContainer" style={{float: 'left'}}>
            <SyntaxHighlighter language="javascript" style={atelierLakesideDark}>
                {`body {
                    background-color: #f7f7f7;
                    //初始化计数，默认初始值为0，如果带num则初始值为num,例如OuterItemCount初始值为5
                    counter-reset: OuterItemCount 5 InnerItemCount  count;   
                }
                #outerList > li::before {
                    content: counter(OuterItemCount) '.';
                    counter-increment: OuterItemCount 2; //这里增量为2
                }
                #innerList > li::before{
                    content: counter(InnerItemCount, lower-alpha) '.';
                    counter-increment: InnerItemCount; //增量，默认为0
                }`}
                </SyntaxHighlighter>
            </div>
            <div style={{float: 'left', width: '15%' }}>
                <ul id="outerList">
                    <li>bananas</li>
                    <li>magos,including:</li>
                    <ul id="innerList">
                        <li>test 1</li>
                        <li>test 2</li>
                        <li>test 3</li>
                    </ul>
                    <li>cherries</li>
                    <li>others:</li>
                    <ul id="innerList">
                        <li>test4</li>
                        <li>test5</li>
                        <li>test6</li>
                    </ul>
                </ul>
            </div>
            <h4 id="bfc" style={{clear: 'both'}}>什么是BFC</h4>
            <div id="divContainer">
                <a href="https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context" target="_blank">BFC</a>
            </div>
            <h4 id="algorithm">简单算法</h4>
            <div id="divContainer">
                <code>
                    快排(二分法)；插入排序；冒泡排序
                </code>
            </div>
            <h4 id="chooseCss">css选择器</h4>
            <div id="divContainer">
                <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors" target="_blank">查看文档</a>
                <SyntaxHighlighter language="javascript" style={atelierLakesideDark}>
                {` css选择器的分类：
                1、元素选择器
                2、类选择器
                3、ID选择器
                4、通配选择器
                5、属性选择器
            关系选择器
                1、相邻兄弟选择器 +  ----> p + span p元素后的span元素  
                2、通用兄弟选择器 ~  ----> p ~ span p后的所有同级span元素，无需相邻
                3、子选择器 >   ---->p > span 
                4、后代选择器 ''`}
                </SyntaxHighlighter>
                <span>front</span>
                <p title="en-p">P文本</p>
                <span>back</span>
                <span>second</span>
                <h5 title="en-h5">h5文本</h5>
                <p>
                    <span>span1 ....
                        <span>span2</span>
                    </span>
                    <span>span3</span>
                </p>
                <span>span4</span>  
            </div>
            <div>
                <button onClick = {toNewPage}>跳转到新页面啦</button>
            </div>
        </div>
    )

}
