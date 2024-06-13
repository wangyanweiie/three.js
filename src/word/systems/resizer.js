const setSize = (container, camera, renderer) => {
    // 设置相机的或纵横比：场景的宽度与高度的比率。
    camera.aspect = container.clientWidth / container.clientHeight;

    // 如果相机的一些属性发生了变化，需要执行 updateProjectionMatrix() 方法更新相机的投影矩阵数学对象
    camera.updateProjectionMatrix();

    // 设置渲染器的大小（单位: 像素 px）
    renderer.setSize(container.clientWidth, container.clientHeight);

    // 设置屏幕设备像素比，这是防止 HiDPI 显示器模糊所必需的 （也称为视网膜显示器）
    renderer.setPixelRatio(window.devicePixelRatio);
};

class Resizer {
    constructor(container, camera, renderer) {
        setSize(container, camera, renderer);

        // 添加一个事件侦听器并在事件触发时再次调用 setSize
        window.addEventListener('resize', () => {
            setSize(container, camera, renderer);
            this.onResize();
        });
    }

    // onResize 是一个空方法，我们可以从 Resizer 类的外部自定义
    onResize() {}
}

export { Resizer };
