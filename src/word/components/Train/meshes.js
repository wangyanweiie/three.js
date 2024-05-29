import { Mesh } from 'three';
import { createGeometries } from './geometries.js';
import { createMaterials } from './materials.js';

function createMeshes() {
    const geometries = createGeometries();
    const materials = createMaterials();

    // 货舱网格
    const cabin = new Mesh(geometries.cabin, materials.body);
    cabin.position.set(1.5, 1.4, 0);

    // 鼻子网格
    const nose = new Mesh(geometries.nose, materials.body);
    nose.position.set(-1, 1, 0);
    nose.rotation.z = Math.PI / 2;

    // 烟囱网格
    const chimney = new Mesh(geometries.chimney, materials.detail);
    chimney.position.set(-2, 1.85, 0);

    // 车轮网格：后小轮
    const smallWheelRear = new Mesh(geometries.wheel, materials.detail);
    smallWheelRear.position.y = 0.5;
    smallWheelRear.rotation.x = Math.PI / 2;

    // 车轮网格：中小轮
    const smallWheelCenter = smallWheelRear.clone();
    smallWheelCenter.position.x = -1;

    // 车轮网格：前小轮
    const smallWheelFront = smallWheelRear.clone();
    smallWheelFront.position.x = -2;

    // 车轮网格：大轮
    const bigWheel = smallWheelRear.clone();
    bigWheel.position.set(1.5, 0.9, 0);
    bigWheel.scale.set(2, 1.25, 2);

    return {
        nose,
        cabin,
        chimney,
        smallWheelRear,
        smallWheelCenter,
        smallWheelFront,
        bigWheel,
    };
}

export { createMeshes };
