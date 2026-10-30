# 原神角色分布

原神角色按元素、武器的分布情况。

## 本地开发

```sh
npm install
npm run dev
```

裁剪字体（发布时会自动裁剪，这个只用于本地预览）：

```sh
npm run predev
```

## 维护数据

编辑 `src/data/characters.ts`，格式如下：

```js
{
    name: '雷电将军',
    rank: 5,  # 星级
    element: '雷',
    weapon: '长柄武器',
    image: 'characters/雷电将军.avif',
}
```

图像放到 `public/images/characters/`，必须使用`.avif`格式。
