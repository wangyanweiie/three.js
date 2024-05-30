import { AnimationMixer } from 'three';

function setupModel(data) {
    // 从加载的数据中提取网格模型
    const model = data.scene.children[0];

    // 从加载的数据中提取剪辑
    const clip = data.animations[0];

    // 创建动画混合器：允许我们将静态对象转换为动画对象
    const mixer = new AnimationMixer(model);

    // 创建动画动作，传入剪辑
    const action = mixer.clipAction(clip);

    // 播放动作
    action.play();

    // 添加 tick 方法
    model.tick = delta => mixer.update(delta);

    return model;
}

export { setupModel };
