import { createCamera } from './components/camera.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';
// import { createCube } from './components/cube.js';
// import { createMeshGroup } from './components/meshGroup.js';
// import { Train } from './components/Train/Train.js';
import { loadBirds } from './components/birds/birds.js';

import { createRenderer } from './systems/renderer.js';
import { Loop } from './systems/Loop.js';
import { createControls } from './systems/controls.js';
import { Resizer } from './systems/Resizer.js';

let camera;
let scene;
let renderer;
let loop;
let controls;

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

        // 创建控制器对象
        controls = createControls(camera, renderer.domElement);

        // 创建光照对象
        const { ambientLight, mainLight } = createLights();

        /**
         * 1.普通网格
         */
        // 创建网格对象
        // const cube = createCube;
        // 将网格对象添加到 updatables 数组中，以便在每次帧时更新它
        // loop.updatables.push(cube);
        // 将网格对象与光照添加到场景中
        // scene.add(cube, ambientLight, mainLight);

        /**
         * 2.组
         */
        // const meshGroup = createMeshGroup();
        // loop.updatables.push(controls, meshGroup);
        // scene.add(meshGroup, ambientLight, mainLight);

        /**
         * 3.火车
         */
        // const train = new Train();
        // loop.updatables.push(controls, train);
        // scene.add(train, ambientLight, mainLight);

        /**
         * 4.GLTF
         */
        loop.updatables.push(controls);
        scene.add(ambientLight, mainLight);

        // 创建一个 Resizer 类，该类将监听窗口调整大小事件，并在发生调整时生成一个新帧
        const resizer = new Resizer(container, camera, renderer);
        // resizer.onResize = () => {
        //     this.render();
        // };
    }

    /**
     * 我们不能将构造函数 constructor 标记为异步
     * 一个常见的解决方案是创建一个单独的 init 方法
     */
    async init() {
        const { parrot, flamingo, stork } = await loadBirds();

        // controls.target.copy(parrot.position);
        loop.updatables.push(parrot, flamingo, stork);
        scene.add(parrot, flamingo, stork);
    }

    /**
     * 渲染场景
     */
    render() {
        renderer.render(scene, camera);
    }

    /**
     * 开启循环
     */
    start() {
        loop.start();
    }

    /**
     * 停止循环
     */
    stop() {
        loop.stop();
    }
}

export { World };
