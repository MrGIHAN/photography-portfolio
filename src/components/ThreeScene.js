import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Simplified camera geometries (lighter version)
    const createCameraGeometry = () => {
      const group = new THREE.Group();
      
      // Camera body
      const body = new THREE.BoxGeometry(1.5, 1, 0.8);
      const bodyMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x333333,
        wireframe: true,
        transparent: true,
        opacity: 0.3
      });
      const bodyMesh = new THREE.Mesh(body, bodyMaterial);
      
      // Lens
      const lens = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 32);
      const lensMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x666666,
        wireframe: true,
        transparent: true,
        opacity: 0.4
      });
      const lensMesh = new THREE.Mesh(lens, lensMaterial);
      lensMesh.position.z = 0.5;
      
      group.add(bodyMesh);
      group.add(lensMesh);
      
      return group;
    };

    // Create fewer elements for better performance
    const elements = [];
    for (let i = 0; i < 6; i++) {
      const element = createCameraGeometry();
      
      element.position.x = (Math.random() - 0.5) * 15;
      element.position.y = (Math.random() - 0.5) * 15;
      element.position.z = (Math.random() - 0.5) * 8;
      
      element.rotation.x = Math.random() * Math.PI;
      element.rotation.y = Math.random() * Math.PI;
      
      const scale = Math.random() * 0.8 + 0.4;
      element.scale.set(scale, scale, scale);
      
      scene.add(element);
      elements.push(element);
    }

    camera.position.z = 10;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      elements.forEach((element, index) => {
        element.rotation.x += 0.005;
        element.rotation.y += 0.005;
        element.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" />;
};

export default ThreeScene;