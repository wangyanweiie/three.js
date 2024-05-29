import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { setupModel } from './setupModel.js';

async function loadBirds() {
    const loader = new GLTFLoader();

    const [parrotData, flamingoData, storkData] = await Promise.all([
        loader.loadAsync('/assets/models/Parrot.glb'),
        loader.loadAsync('/assets/models/Flamingo.glb'),
        loader.loadAsync('/assets/models/Stork.glb'),
    ]);

    const parrot = setupModel(parrotData);
    parrot.position.set(0, 0, 0);
    parrot.scale.set(0.5, 0.5, 0.5);

    const flamingo = setupModel(flamingoData);
    flamingo.position.set(2.5, 0, -5);
    flamingo.scale.set(0.5, 0.5, 0.5);

    const stork = setupModel(storkData);
    stork.position.set(-2.5, 0, -2.5);
    stork.scale.set(0.5, 0.5, 0.5);

    return {
        parrot,
        flamingo,
        stork,
    };
}

export { loadBirds };
