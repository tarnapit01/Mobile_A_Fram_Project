AFRAME.registerComponent('movement-bounds', {
    schema: {
      minX: {type: 'number', default: -4},  // Left boundary
      maxX: {type: 'number', default: 4},   // Right boundary
      minZ: {type: 'number', default: -14}, // Back boundary
      maxZ: {type: 'number', default: 2},   // Front boundary
      minY: {type: 'number', default: 1},   // Bottom boundary
      maxY: {type: 'number', default: 3}    // Top boundary
    },
  
    init: function() {
      // Store the original position
      this.originalPosition = this.el.object3D.position.clone();
      
      // Bind the tick function
      this.tick = AFRAME.utils.throttleTick(this.tick.bind(this), 11);
    },
  
    tick: function() {
      const position = this.el.object3D.position;
      const data = this.data;
  
      // Check and clamp X position
      if (position.x < data.minX) position.x = data.minX;
      if (position.x > data.maxX) position.x = data.maxX;
  
      // Check and clamp Z position
      if (position.z < data.minZ) position.z = data.minZ;
      if (position.z > data.maxZ) position.z = data.maxZ;
  
      // Check and clamp Y position
      if (position.y < data.minY) position.y = data.minY;
      if (position.y > data.maxY) position.y = data.maxY;
    }
  });