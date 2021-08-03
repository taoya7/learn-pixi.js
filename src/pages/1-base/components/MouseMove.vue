<template>
  <div ref="box"></div>
</template>

<script>
import * as PIXI from 'pixi.js';
export default {
    mounted(){
        let width = 600;
        let height = 600;
        const app = new PIXI.Application({
            width: width,
            height: height,
            antialias: true, 
            transparent: false, 
            resolution: 1, 
            backgroundColor: 0x1d9ce0
        });
        app.stage.interactive = true;  // 打开事件监听
        // Box
        let box = new PIXI.Graphics();
        box.beginFill(0xffffff);
        box.drawRect(0 ,0, 100, 100);
        box.endFill();
        app.stage.addChild(box);
        // End
        app.stage.on('pointermove', (e)=>{
            box.position.x = e.data.global.x-50;
            box.position.y = e.data.global.y-50;
            if(box.position.x >= 600){
                box.position.x = 300;
                box.position.y = 300;
            }
        })
        this.$refs.box.appendChild(app.view);
    },
    unmounted(){

    }
}
</script>

<style>

</style>