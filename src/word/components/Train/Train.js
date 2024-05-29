import { Group, MathUtils } from 'three';
import { createMeshes } from './meshes.js';

const wheelSpeed = MathUtils.degToRad(24);

/**
 * 声明 Train 类继承 Group 类
 * 注意 super() 的使用，这意味着 Train 类现在具有 Group 的所有常规功能。
 * 特别是，我们可以向其中添加对象，我们可以直接将其添加到我们的场景中。
 *
 * 通过继承 Group，一旦我们创建了一个火车，我们就可以将它直接添加到我们的场景中。
 * 通过继承 Group，我们可以在构造函数中为火车添加一个网格。
 */
class Train extends Group {
    constructor() {
        // 调用父类构造函数
        super();

        // 创建网格对象
        this.meshes = createMeshes();

        // 将网格对象添加到组中
        this.add(
            this.meshes.nose,
            this.meshes.cabin,
            this.meshes.chimney,
            this.meshes.smallWheelRear,
            this.meshes.smallWheelCenter,
            this.meshes.smallWheelFront,
            this.meshes.bigWheel
        );
    }

    /**
     * 添加 tick 方法，每帧调用一次
     */
    tick(delta) {
        this.meshes.smallWheelRear.rotation.y += wheelSpeed * delta;
        this.meshes.smallWheelCenter.rotation.y += wheelSpeed * delta;
        this.meshes.smallWheelFront.rotation.y += wheelSpeed * delta;
        this.meshes.bigWheel.rotation.y += wheelSpeed * delta;
        this.meshes.chimney.rotation.y += wheelSpeed * delta;
    }
}

export { Train };
