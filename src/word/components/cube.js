import { TextureLoader, BoxGeometry, MeshBasicMaterial, MeshStandardMaterial, Mesh, MathUtils } from 'three';

function createMaterial() {
    // 创建纹理加载器对象
    const textureLoader = new TextureLoader();
    const texture = textureLoader.load('/assets/textures/uv-test-col.png');

    // 创建材质对象
    const material = new MeshStandardMaterial({
        map: texture,
    });

    return material;
}

function createCube() {
    // 创建几何体对象
    const geometry = new BoxGeometry(2, 2, 2);

    /**
     * 创建材质对象：MeshStandardMaterial
     * 这是一种高质量、通用、物理精确的材料，可以使用真实世界的物理方程对光做出反应。
     * 顾名思义，MeshStandardMaterial 应该是几乎所有情况下的首选 “标准” 材料。
     * 通过添加精心制作的纹理，我们可以使用 MeshStandardMaterial 重建几乎任何常见的表面。
     */
    const material = createMaterial();

    // 创建网格对象
    const cube = new Mesh(geometry, material);

    const radiansPerSecond = MathUtils.degToRad(30);
    cube.tick = delta => {
        cube.rotation.z += radiansPerSecond * delta;
        cube.rotation.x += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
    };

    return cube;
}

export { createCube };
