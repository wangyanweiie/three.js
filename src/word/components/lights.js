import { DirectionalLight } from 'three';

function createLights() {
    // 创建灯光对象
    const light = new DirectionalLight('white', 8);

    // 改变照射方向
    light.position.set(10, 10, 10);

    return light;
}

export { createLights };
