import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
import { createControls } from './systems/controls.js';

let camera;
let renderer;
let scene;
let loop;

/**
 * 现在，我们可以继续并开始构建 World 类。
 * 我们需要一个 constructor 方法来处理设置（创建场景、渲染器、立方体和相机，设置场景的大小，并将画布元素添加到容器中），以及一个 render 方法来渲染场景。
 * 打开或创建 src/World/World.js 模块，创建 World 类，并在其中添加这两个方法。
 * 在文件的底部，导出类，以便我们可以从 main.js 中使用它。
 */
class World {
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        loop = new Loop(camera, scene, renderer);

        // 当我们创建渲染器时，<canvas> 元素也会被创建并存储在 renderer.domElement 中，将其添加到容器中。
        container.append(renderer.domElement);

        const controls = createControls(camera, renderer.domElement);

        const cube = createCube();
        const { ambientLight, mainLight } = createLights();

        // 将立方体添加到 updatables 数组中，以便在每次帧时更新它
        // loop.updatables.push(cube);
        loop.updatables.push(controls);

        // 将立方体与光照添加到场景中
        scene.add(cube, ambientLight, mainLight);

        // 创建一个 Resizer 类，该类将监听窗口调整大小事件，并在发生调整时生成一个新帧
        const resizer = new Resizer(container, camera, renderer);

        // resizer.onResize = () => {
        //     this.render();
        // };
    }

    render() {
        // 渲染场景
        renderer.render(scene, camera);
    }

    start() {
        loop.start();
    }

    stop() {
        loop.stop();
    }
}

export { World };
