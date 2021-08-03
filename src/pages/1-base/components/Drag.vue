<template>
  <div ref="box"></div>
</template>

<script>
import * as PIXI from 'pixi.js';
export default {
    mounted(){
        let width = 600;
        let height = 600;
        let isDraging = false;
        const app = new PIXI.Application({
            width: width,
            height: height,
            antialias: true, 
            transparent: false, 
            resolution: 1, 
            backgroundColor: 0x1d9ce0
        });
        app.stage.interactive = true;  
        // Box
        let box = new PIXI.Graphics();
        box.beginFill(0xffffff);
        box.drawRect(0 ,0, 100, 100);
        box.endFill();
        box.interactive = true; // 打开事件监听
        box.buttonMode = true;
        app.stage.addChild(box);
        box.mousedown = ()=>{
            isDraging = true;
        }
        box.mousemove = (e)=>{
            if(isDraging){
                box.x = e.data.global.x-50;
                box.y = e.data.global.y-50;
            }
        };
        box.mouseup = ()=>{
            isDraging = false;
        }
        this.$refs.box.appendChild(app.view);
    },
    unmounted(){

    }
}
</script>

<style>

</style>