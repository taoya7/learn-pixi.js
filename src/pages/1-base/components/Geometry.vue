<template>
    <div style="line-height: 1.8em;">
    使用图片纹理是制作精灵最有效的方式之一，但是Pixi也提供了自己低级的绘画工具。你可以使用它们来创造矩形、线段、复杂的多边形以及文本。并且它使用和Canvas Drawing API几乎一致的api，所以如果你熟悉canvas的话，那么几乎没有什么新东西需要学习。当然另一个巨大的优势在于，不同于Canvas的绘画api，你使用Pixi绘制的图形是通过WebGL在GPU上渲染的。Pixi能够让你获得所有未触碰到的性能。
    </div>
    <div ref="box"></div>
    <div>
        
    </div>
</template>

<script>
import * as PIXI from 'pixi.js';
export default {
    mounted(){
        const app = new PIXI.Application({
            width:600,
            height: 600,
            antialias: true, // antialias使得字体的边界和几何图形更加圆滑
            transparent: false, // transparent将整个Canvas标签的透明度进行了设置
            resolution: 1, // resolution让Pixi在不同的分辨率和像素密度的平台上运行变得简单
            backgroundColor: 0x1d9ce0
        });
        // Main
            // 矩形
            /**
             * 1. 调取实例
             * 2. 调用beginFill和一个16进制的颜色值来设置矩形的填充颜色
             * 3. 给图形设置一个轮廓，使用lineStyle方法。下面展示如何给矩形设置一个4像素宽alpha值为1的红色轮廓
             * 4. 调用drawRect方法来画一个矩形。它的四个参数是x, y, width 和 height
             * 5. 调用endFill结束绘制。
             */
            let rectangle = new PIXI.Graphics();
            rectangle.beginFill(0x66ccff);
            rectangle.lineStyle(4, 0xff3300, 1);
            rectangle.drawRect(20 ,20, 100, 100);
            rectangle.endFill();
            app.stage.addChild(rectangle);
            // End

            // 圆形
            let circle = new PIXI.Graphics();
            circle.beginFill(0x9966FF);
            circle.drawCircle(0,0, 32);
            circle.endFill();
            circle.x = 0+32+20;
            circle.y = 200;
            app.stage.addChild(circle);
            // End

            // 椭圆
            let ellipse = new PIXI.Graphics();
            ellipse.beginFill(0xffff00);
            ellipse.drawEllipse(0,0,50, 20);
            ellipse.endFill();
            ellipse.x = 200;
            ellipse.y = 130;
            app.stage.addChild(ellipse);
            // End

            // 圆角矩形
            let roundBox = new PIXI.Graphics();
            roundBox.lineStyle(4, 0x99CCFF, 1);
            roundBox.beginFill(0xFF9933);
            roundBox.drawRoundedRect(0, 0, 84, 36, 10)
            roundBox.endFill();
            roundBox.x = 248;
            roundBox.y = 190;
            app.stage.addChild(roundBox);
            // End

            // 线
            let line = new PIXI.Graphics();
            line.lineStyle(4, 0xFFFFFF, 1);
            line.moveTo(0, 0);
            line.lineTo(80, 50);
            line.x = 332;
            line.y = 32;
            app.stage.addChild(line);
            // End

            // 多边形
            let triangle = new PIXI.Graphics();
            triangle.beginFill(0x66FF33);
            triangle.drawPolygon([
                -32, 64,             //First point
                32, 64,              //Second point
                0, 0                 //Third point
            ]);
            triangle.endFill();
            triangle.x = 180;
            triangle.y = 222;
            app.stage.addChild(triangle);
            // End

            // 文本
            let message = new PIXI.Text("Hello Pixi!");
            message.position.set(354, 96);
            let style = new PIXI.TextStyle({
                fontFamily: "Arial",
                fontSize: 36,
                fill: "white",
                stroke: '#ff3300',
                strokeThickness: 4,
                dropShadow: true,
                dropShadowColor: "#000000",
                dropShadowBlur: 4,
                dropShadowAngle: Math.PI / 6,
                dropShadowDistance: 6,
            });
            message.style = {
                fill: 'white',
                font: '32px',
            }
            app.stage.addChild(message);
            // app.stage.addChild(message, style);
            // End
        // End
        this.$refs.box.appendChild(app.view);
    }
}
</script>

<style>

</style>