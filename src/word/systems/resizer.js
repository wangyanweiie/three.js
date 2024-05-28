const setSize = (container, camera, renderer) => {
    // 设置相机的或纵横比：场景的宽度与高度的比率。
    camera.aspect = container.clientWidth / container.clientHeight;

    // 如果相机的一些属性发生了变化，需要执行 updateProjectionMatrix() 方法更新相机的投影矩阵数学对象
    camera.updateProjectionMatrix();

    // 设置输出画布的尺寸（单位: 像素 px）
    renderer.setSize(container.clientWidth, container.clientHeight);

    // 设置屏幕设备像素比，以免渲染模糊问题
    renderer.setPixelRatio(window.devicePixelRatio);
};

class Resizer {
    constructor(container, camera, renderer) {
        setSize(container, camera, renderer);

        window.addEventListener('resize', () => {
            setSize(container, camera, renderer);

            // 在发生调整时执行一些自定义行为
            this.onResize();
        });
    }

    onResize() {}
}

export { Resizer };
