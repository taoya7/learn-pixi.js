<template>
  <div ref="box"></div>
  <div>
      <el-button @click="removePic" type='success'>移除图片</el-button>
      <el-button @click="hidePic" type='success'>隐藏图片</el-button>
  </div>
</template>

<script>
import * as PIXI from 'pixi.js';
export default {
    methods: {
        removePic(){
            this.app.stage.removeChild(this.avatar);
        },
        hidePic(){
            this.avatar.visible = false;
        }
    },
    mounted(){
        const app = new PIXI.Application({
            width:300,
            height: 300,
            antialias: true, // antialias使得字体的边界和几何图形更加圆滑
            transparent: false, // transparent将整个Canvas标签的透明度进行了设置
            resolution: 1, // resolution让Pixi在不同的分辨率和像素密度的平台上运行变得简单
            backgroundColor: 0x1d9ce0
        });
        // Main
        const avatar = PIXI.Sprite.from('http://alicdn.taoya.art/img/20210706180632.jpg');
        avatar.scale.set(1,1);
        avatar.x = 100;
        avatar.y = 100;
        avatar.width = 100;
        avatar.height = 100;
        avatar.interactive = true;
        avatar.on('click', ()=>{
            avatar.alpha = 0.5;
        })
        app.stage.addChild(avatar);
        this.$refs.box.appendChild(app.view);
        // 
        this.avatar = avatar;
        this.app = app;
    }
}
</script>

<style>

</style>