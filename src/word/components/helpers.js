import { AxesHelper, GridHelper } from 'three';

/**
 * 创建坐标轴辅助对象
 */
function createAxesHelper() {
    const helper = new AxesHelper(3);
    helper.position.set(-3.5, 0, -3.5);

    return helper;
}

/**
 * 创建网格辅助对象
 */
function createGridHelper() {
    const helper = new GridHelper(6);

    return helper;
}

export { createAxesHelper, createGridHelper };
