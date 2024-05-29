import { SphereGeometry, Group, MathUtils, Mesh, MeshStandardMaterial } from 'three';

function createMeshGroup() {
    const group = new Group();

    const geometry = new SphereGeometry(
        0.25, // 设置球体的半径
        16, // 设置球体的水平面分段数
        16 // 设置球体的垂直面分段数
    );

    const material = new MeshStandardMaterial({
        // 设置材质的颜色
        color: 'indigo',
        // 是否启用平面着色
        flatShading: true,
    });

    // 创建网格对象
    const protoSphere = new Mesh(geometry, material);

    // 将网格对象添加到组中
    group.add(protoSphere);

    for (let i = 0; i < 1; i += 0.05) {
        // 克隆网格对象
        const sphere = protoSphere.clone();

        // 将克隆的网格定位为围绕一个圆圈
        sphere.position.x = Math.cos(2 * Math.PI * i);
        sphere.position.y = Math.sin(2 * Math.PI * i);

        // 缩放球体
        sphere.scale.multiplyScalar(0.01 + i / 2);

        // 将网格对象添加到组中
        group.add(sphere);
    }

    // 缩放整个组
    group.scale.multiplyScalar(2);

    const radiansPerSecond = MathUtils.degToRad(30);

    // 添加 tick 方法
    group.tick = delta => {
        group.rotation.z -= delta * radiansPerSecond;
    };

    return group;
}

export { createMeshGroup };
