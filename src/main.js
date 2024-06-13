import { World } from './word/Word.js';

async function main() {
    const container = document.querySelector('#scene-container');
    const world = new World(container);

    await world.init();

    // 对于偶尔更新的应用程序，我们将在需要新帧时调用 .render，按需渲染
    // world.render();

    // 对于具有恒定动画的应用程序，我们将使用 .start 循环运行
    world.start();
}

main().catch(error => {
    console.error(error);
});
