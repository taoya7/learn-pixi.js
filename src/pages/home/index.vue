<template>
  <div>
      <el-card>
        <p>
          Pixi是一个超快的2D渲染引擎。这意味着它会帮助你用JavaScript或者其他HTML5技术来显示媒体，创建动画或管理交互式图像，从而制作一个游戏或应用。它拥有语义化的，简洁的API接口并且加入了一些非常有用的特性。比如支持纹理贴图集和为精灵（交互式图像）提供了一个简单的动画系统。它也提供了一个完备的场景图，你可以在精灵图层里面创建另一个精灵，当然也可以让精灵响应你的鼠标或触摸事件。最重要的的是，Pixi没有妨碍你的编程方式，你可以自己选择使用多少它的功能，你可以遵循你自己的编码风格，或让Pixi与其他有用的框架无缝集成。
        </p>
      </el-card>
      <el-card>
        <el-link href="https://github.com/pixijs/pixijs" target="_blank" type='success'>Github</el-link>
        <el-link href="https://www.pixijs.com/" target="_blank" type='success' >官网</el-link>
        <el-link href="http://pixijs.download/release/docs/PIXI.Application.html" target="_blank" type='info'>Docs</el-link>
        <img src="imgs/1.png" alt="" draggable="false" style="width:100%;object-fit:cover;">
      </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
.el-card {
 .el-link {
   display: inline-block;
   margin-right: 2em;
   margin-bottom: 2em;
   margin-top: 2em;
 }
}
</style>