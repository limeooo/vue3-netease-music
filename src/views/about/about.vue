<template>
  <div class="about">
    <el-card header="关于作者" shadow="always">
      <Descriptions :column="2" :table-data="authorInfo" />
    </el-card>
    <el-card header="技术栈" shadow="always">
      <Descriptions :column="2" :table-data="technologyStacks" />
      <Descriptions
        title="生产环境依赖"
        :column="2"
        :table-data="dependencies"
      />
      <Descriptions
        title="开发环境依赖"
        :column="2"
        :table-data="devDependencies"
      />
    </el-card>
    <el-card header="项目规范" shadow="always">
      <Descriptions
        title="文件命名规范"
        :column="1"
        :table-data="namingSpecification"
      />
      <Descriptions
        title="编写组件规范"
        :column="1"
        :table-data="componentsSpecification"
      />
      <Descriptions
        title="Git提交规范"
        :column="1"
        :table-data="gitSpecification"
      />
    </el-card>
    <el-card header="目录结构" shadow="always">
      <div class="directory-content">{{ directoryConfig }}</div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import Descriptions from '@/components/descriptions/Descriptions.vue'

import {
  directoryConfig,
  dependencies,
  devDependencies,
  technologyStacks,
  namingSpecification,
  componentsSpecification,
  gitSpecification,
  authorInfo
} from './config'
</script>

<style lang="less" scoped>
.about {
  .directory-content {
    white-space: pre-wrap;
    font-size: 15px;
    color: var(--color-text);
  }
}
</style>
