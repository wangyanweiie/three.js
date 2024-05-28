import { WebGLRenderer } from 'three';

function createRenderer() {
    // 创建渲染器对象
    const renderer = new WebGLRenderer({
        // 启用抗锯齿
        antialias: true,
    });

    // 要打开物理上正确的照明
    renderer.physicallyCorrectLights = true;

    return renderer;
}

export { createRenderer };
