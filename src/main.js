import { World } from './word/Word.js';

function main() {
    const container = document.querySelector('#scene-container');
    const world = new World(container);

    // world.render();
    world.start();
}

main();
