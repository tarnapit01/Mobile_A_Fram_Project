function generateFloor(sceneSelector, modelPath, minZ, maxZ, step, maxX) {
    const scene = document.querySelector(sceneSelector);

    if (!scene) {
        console.error(`Scene with selector "${sceneSelector}" not found.`);
        return;
    }

    for (let z = minZ; z >= maxZ; z += step) {
        for (let x = -maxX; x <= maxX; x++) {
            // Create a new entity
            let entity = document.createElement('a-entity');
            entity.setAttribute('gltf-model', modelPath);
            entity.setAttribute('scale', '0.5 0.5 0.5');
            entity.setAttribute('position', `${x} 0 ${z}`);
            scene.appendChild(entity);
        }
    }
}

function generateTree(sceneSelector, modelPath, minZ, maxZ, step) {
    const scene = document.querySelector(sceneSelector);

    if (!scene) {
        console.error(`Scene with selector "${sceneSelector}" not found.`);
        return;
    }

    for (let z = minZ; z >= maxZ; z += step) {
            // Create a new entity
            let entity = document.createElement('a-entity');
            entity.setAttribute('gltf-model', modelPath);
            entity.setAttribute('scale', '0.5 0.5 0.5');
            entity.setAttribute('position', `5 0 ${z}`);
            scene.appendChild(entity);
        
    }

    for (let z = minZ; z >= maxZ; z += step) {
        // Create a new entity
        let entity = document.createElement('a-entity');
        entity.setAttribute('gltf-model', modelPath);
        entity.setAttribute('scale', '0.5 0.5 0.5');
        entity.setAttribute('position', `-5 0 ${z}`);
        scene.appendChild(entity);
    
}
}

AFRAME.registerComponent('tooltip', {
    schema: {
      message: {type: 'string', default: 'Hover Message'},
      offset: {type: 'vec3', default: {x: 0, y: 0.5, z: 0}},
    },
    
    init: function() {
      // Create tooltip entity
      const tooltipEntity = document.createElement('a-text');
      tooltipEntity.setAttribute('value', this.data.message);
      tooltipEntity.setAttribute('position', this.data.offset);
      tooltipEntity.setAttribute('align', 'center');
      tooltipEntity.setAttribute('scale', '0.5 0.5 0.5');
      tooltipEntity.setAttribute('visible', false);
      
      this.tooltipEntity = tooltipEntity;
      this.el.appendChild(tooltipEntity);
      
      // Add event listeners
      this.el.addEventListener('mouseenter', () => {
        this.tooltipEntity.setAttribute('visible', true);
      });
      
      this.el.addEventListener('mouseleave', () => {
        this.tooltipEntity.setAttribute('visible', false);
      });
    }
  });