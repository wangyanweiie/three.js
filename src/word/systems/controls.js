// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function createControls(camera, canvas) {
    // 创建控制器对象
    const controls = new OrbitControls(camera, canvas);

    // 启用阻尼以增加真实感
    controls.enableDamping = true;

    // 添加 tick 方法
    controls.tick = () => controls.update();

    return controls;
}

export { createControls };
