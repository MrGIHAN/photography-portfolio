// ThreeScene.js - Improved version
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating camera-like elements
    const geometries = [
      new THREE.RingGeometry(0.5, 0.7, 32),
      new THREE.BoxGeometry(0.8, 0.8, 0.2),
      new THREE.CircleGeometry(0.6, 32)
    ];

    const material = new THREE.MeshBasicMaterial({ 
      color: 0xd4af37,
      transparent: true,
      opacity: 0.15,
      wireframe: true
    });

    const elements = [];
    for (let i = 0; i < 12; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const element = new THREE.Mesh(geometry, material);
      
      element.position.x = (Math.random() - 0.5) * 20;
      element.position.y = (Math.random() - 0.5) * 20;
      element.position.z = (Math.random() - 0.5) * 10;
      
      element.rotation.x = Math.random() * Math.PI;
      element.rotation.y = Math.random() * Math.PI;
      
      element.scale.setScalar(Math.random() * 0.8 + 0.3);
      scene.add(element);
      elements.push(element);
    }

    camera.position.z = 8;

    const animate = () => {
      requestAnimationFrame(animate);
      
      elements.forEach((element, index) => {
        element.rotation.x += 0.005;
        element.rotation.y += 0.005;
        element.position.y += Math.sin(Date.now() * 0.001 + index) * 0.003;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
      geometries.forEach(geo => geo.dispose());
      material.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" />;
};

export default ThreeScene;