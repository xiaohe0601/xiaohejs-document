---
title: ArrayUtils 数组
---

::: info
Since：<badge text="0.0.4" vertical="middle"></badge>

作者：小何同学
:::

### ArrayUtils.flat2tree

<badge text="0.0.4" vertical="middle"></badge> 扁平数组转树形结构数组

#### 参数

- `array` (any[])：扁平数组

- `[options]` ([IFlat2TreeOptions](#iflat2treeoptions))：配置项

#### 类型

##### IFlat2TreeOptions

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|key|节点唯一标识属性名|string|-|id|
|parentKey|父节点唯一标识属性名|string|-|pid|
|processor|节点数据处理器|(item: T) => T|-|`(item) => (item)`|

#### 返回

`T[]`：树形结构数组

::: details 使用示例（点击展开查看）
```javascript
const array = [{
  id: 1,
  pid: 0,
  name: "test1"
}, {
  id: 2,
  pid: 1,
  name: "test2"
}, {
  id: 3,
  pid: 2,
  name: "test3"
}, {
  id: 4,
  pid: 0,
  name: "test4"
}, {
  id: 5,
  pid: 4,
  name: "test5"
}, {
  id: 6,
  pid: 0,
  name: "test6"
}];

ArrayUtils.flat2tree(array);
// =>
// [{
//   id: 1,
//   pid: 0,
//   name: "test1",
//   children: [{
//     id: 2,
//     pid: 1,
//     name: "test2",
//     children: [{
//       id: 3,
//       pid: 2,
//       name: "test3"
//     }]
//   }]
// }, {
//   id: 4,
//   pid: 0,
//   name: "test4",
//   children: [{
//     id: 5,
//     pid: 4,
//     name: "test5"
//   }]
// }, {
//   id: 6,
//   pid: 0,
//   name: "test6"
// }]
```
:::

### ArrayUtils.tree2flat

<badge text="0.0.4" vertical="middle"></badge> 树形结构数组转扁平数组

#### 参数

- `array` (any[])：树形结构数组

- `[options]` ([ITree2FlatOptions](#itree2flatoptions))：配置项

#### 类型

##### ITree2FlatOptions

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|childrenKey|子节点集合属性名|string|-|children|
|processor|节点数据处理器|(item: T) => T|-|`(item) => (item)`|

#### 返回

`T[]`：扁平数组

::: details 使用示例（点击展开查看）
```javascript
const tree = [{
  id: 1,
  name: "test1",
  children: [{
    id: 2,
    name: "test2",
    children: [{
      id: 3,
      name: "test3"
    }]
  }]
}, {
  id: 4,
  name: "test4",
  children: [{
    id: 5,
    name: "test5"
  }]
}, {
  id: 6,
  name: "test6"
}];

ArrayUtils.tree2flat(array);
// =>
// [{
//   id: 1,
//   name: "test1"
// }, {
//   id: 2,
//   name: "test2"
// }, {
//   id: 3,
//   name: "test3"
// }, {
//   id: 4,
//   name: "test4"
// }, {
//   id: 5,
//   name: "test5"
// }, {
//   id: 6,
//   name: "test6"
// }]
```
:::

### ArrayUtils.recursiveTraversal

<badge text="0.0.4" vertical="middle"></badge> 递归遍历树形结构数组

#### 参数

- `array` (any[])：树形结构数组

- `[options]` ([IRecursiveTraversalOptions](#irecursivetraversaloptions))：配置项

#### 类型

##### IRecursiveTraversalOptions

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|childrenKey|子节点集合属性名|string|-|children|
|parent|父节点数据|any|-|-|
|processor|节点数据处理器|(item: T, parent?: T) => void|-|-|

::: details 使用示例（点击展开查看）
```javascript
const tree = [{
  id: 1,
  name: "test1",
  children: [{
    id: 2,
    name: "test2",
    children: [{
      id: 3,
      name: "test3"
    }]
  }]
}, {
  id: 4,
  name: "test4",
  children: [{
    id: 5,
    name: "test5"
  }]
}, {
  id: 6,
  name: "test6"
}];

ArrayUtils.recursiveTraversal(tree, {
  processor(item, parent) {
    console.log(item, parent);
  }
});
// => 依次为 test1、test2、test3、test4、test5、test6 对象本身及其父节点的引用
```
:::