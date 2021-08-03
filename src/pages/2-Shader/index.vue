<template>
  <div>
      <el-card>
          <h3 class="card-title">导读</h3>
          <el-link target='_blank' href='https://www.shadertoy.com/'>https://www.shadertoy.com/</el-link>
      </el-card>
      <el-card>
          <h3 class="card-title">背景</h3>
          Shader from https://www.shadertoy.com/view/MdlGRr
          <Example1 />
      </el-card>
  </div>
</template>

<script setup>
import Example1 from './Example1/Example1.vue';
</script>