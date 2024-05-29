import { HemisphereLight, DirectionalLight } from 'three';

function createLights() {
    // 创建环境光照对象
    const ambientLight = new HemisphereLight(
        'white', // 天空颜色
        'darkslategrey', // 地面颜色
        3 // 强度
    );

    // 创建直接光照对象
    const mainLight = new DirectionalLight('white', 2);

    // 改变照射方向
    mainLight.position.set(10, 10, 10);

    return { ambientLight, mainLight };
}

export { createLights };
