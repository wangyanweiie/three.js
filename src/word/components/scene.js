import { Color, Scene } from 'three';

function createScene() {
    // 创建场景对象
    const scene = new Scene();

    // 设置场景背景颜色
    scene.background = new Color('#87CEEB');

    return scene;
}

export { createScene };
