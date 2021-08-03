<template>
  <div ref="box"></div>
</template>

<script>
import * as PIXI from 'pixi.js';
export default {
    mounted(){
        /*
            Pixi拥有一个Pixi应用对象来帮助你创建它。它会自动创建一个<canvas>HTML标签并且计算出怎么去让你的图片在这个标签中显示。

        */
        const app = new PIXI.Application({
            width:300,
            height: 300,
            antialias: true, // antialias使得字体的边界和几何图形更加圆滑
            transparent: false, // transparent将整个Canvas标签的透明度进行了设置
            resolution: 1, // resolution让Pixi在不同的分辨率和像素密度的平台上运行变得简单
            // backgroundColor: 0x1d9ce0
        });
        app.renderer.resize(100, 100);
        app.renderer.backgroundColor = '0xff00ff';
        app.renderer.view.style.position = 'absolution';
        this.$refs.box.appendChild(app.view);
    }
}
</script>

<style>

</style>