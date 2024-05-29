import { BoxGeometry, CylinderGeometry } from 'three';

function createGeometries() {
    /**
     * 创建矩形几何体对象
     * 参数：长度、宽度、高度
     */
    const cabin = new BoxGeometry(2, 2.25, 1.5);

    /**
     * 创建圆柱体几何体对象
     * 参数：顶部半径、底部半径、高度、径向段
     */
    const nose = new CylinderGeometry(0.75, 0.75, 3, 24);
    const wheel = new CylinderGeometry(0.4, 0.4, 1.75, 24);
    const chimney = new CylinderGeometry(0.3, 0.15, 0.5);

    return {
        cabin,
        nose,
        wheel,
        chimney,
    };
}

export { createGeometries };
