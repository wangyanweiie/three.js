import { PerspectiveCamera } from 'three';

function createCamera() {
    /**
     * 创建相机对象
     * @param {number} fov 或视野：相机的视野有多宽，以度为单位。
     * @param {number} aspect 或纵横比：场景的宽度与高度的比率。
     * @param {number} near 或近剪裁平面：任何比这更靠近相机的东西都是不可见的。
     * @param {number} far 或远剪裁平面：任何比这更远离相机的东西都是不可见的。
     *
     * const aspect = container.clientWidth / container.clientHeight;
     * 我们使用了一个虚拟值 1 作为纵横比，因为它依赖于 container 的尺寸。
     * 我们想避免不必要地传递东西，所以我们将推迟设置纵横比，直到后面我们创建 Resizer 系统。
     */
    const camera = new PerspectiveCamera(35, 1, 0.1, 100);

    // 设置相机的位置
    // camera.position.set(0, 0, 10);
    camera.position.set(-5, 5, 7);

    return camera;
}

export { createCamera };
