<template>
  <div ref="box"></div>
</template>

<script>
import * as PIXI from 'pixi.js';
export default {
    mounted(){
        const app = new PIXI.Application({
            width:300,
            height: 300,
            antialias: true, // antialias使得字体的边界和几何图形更加圆滑
            transparent: false, // transparent将整个Canvas标签的透明度进行了设置
            resolution: window.devicePixelRatio,
            backgroundColor: 0x1d9ce0
        });

        let pic = '/bunny.png';
        let container = new PIXI.Container(); // 声明容器
        container.position.set(app.screen.width/2, app.screen.height/2); // 调整大小
        // container.pivot.x = container.width / 2+20;
        // container.pivot.y = container.height / 2+20;
        
        app.stage.addChild(container); // 添加到舞台
        container.addChild(new PIXI.Sprite.from(pic));
        app.ticker.add(()=>{ // 循环
            container.rotation -= 0.01; 
        })
        this.$refs.box.appendChild(app.view);
    }
}
</script>

<style>

</style>