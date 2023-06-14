import React from "react";
import "./index.css";

export default function SmartCss() {
  return (
    <div>
      <h2 class="linear">引入鼠标点击效果试试看</h2>
      <h3>
        原理：
        字体透明，沿用背景色作为字体色，通过裁剪背景色为文字范围实现字体渐变
      </h3>
      <pre>
        <code>
          background-clip: border-box | padding-box | content-box border-box:
          背景裁剪到边框区 padding-box: 背景裁剪到内边距区 content-box:
          背景裁剪到内容区 其中text,裁剪到文本区，还存在兼容性
        </code>
      </pre>

      <h2 text="第二种文字渐变的实现方式">第二种文字渐变的实现方式</h2>
      <h3>
        原理： mask属性, 蒙层属性, 透明区域会被隐藏， 使用渐变背景，
        覆盖程度跟透明度成 反比， 透明度越高， 覆盖度越低。
        简而言之，越透明，原图展示的越多
      </h3>
      <pre>
        <code>
          mask-clip mask-composite mask-image: 图片蒙层-使用图片作为蒙层， 同
          background-image使用一致，可以使用url 也可以使用渐变 mask-mode
          mask-origin mask-position mask-repeat mask-size mask-type
        </code>
      </pre>

      {/* <div class="mask"></div> */}

      {/* <canvas
        id="firework"
        width="500"
        height="300"
        style="border:1px solid red"
      ></canvas> */}
    </div>
  );
}
