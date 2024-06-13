import { Clock } from 'three';

const clock = new Clock();

class Loop {
    constructor(camera, scene, renderer) {
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;

        // 保存类中的动画对象列表
        this.updatables = [];
    }

    /**
     * 开启动画
     */
    start() {
        this.renderer.setAnimationLoop(() => {
            // 需要在每一帧开始时运行
            this.tick();

            // 渲染场景
            this.renderer.render(this.scene, this.camera);
        });
    }

    /**
     * 停止动画
     */
    stop() {
        this.renderer.setAnimationLoop(null);
    }

    /**
     * 更新动画
     */
    tick() {
        // clock.getDelta()：测量跨帧时间
        const delta = clock.getDelta();

        // 我们将在 “对象本身上” 定义更新每个对象的逻辑，每个对象都将使用自己的 .tick 方法暴露该逻辑。
        for (const object of this.updatables) {
            object.tick(delta);
        }
    }
}

export { Loop };
