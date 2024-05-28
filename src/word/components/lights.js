import { HemisphereLight, DirectionalLight } from 'three';

function createLights() {
    const ambientLight = new HemisphereLight('white', 'darkslategrey', 5);

    // 创建灯光对象
    const mainLight = new DirectionalLight('white', 8);

    // 改变照射方向
    mainLight.position.set(10, 10, 10);

    return { ambientLight, mainLight };
}

export { createLights };
