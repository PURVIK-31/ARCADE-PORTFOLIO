import { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Float, PerspectiveCamera, Stars, Text, Center } from '@react-three/drei';
import * as THREE from 'three';

const ArcadeText = () => {
  const textRef = useRef();
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    textRef.current.position.y = Math.sin(t) * 0.2;
  });

  return (
    <group ref={textRef} position={[0, 2, 0]}>
      <Center>
        <Text
          font="https://fonts.gstatic.com/s/pressstart2p/v15/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff"
          fontSize={0.5}
          maxWidth={4}
          lineHeight={1}
          letterSpacing={0.05}
          textAlign="center"
        >
          PRESS START
          <meshStandardMaterial
            color="#ff00ff"
            emissive="#b829f7"
            emissiveIntensity={2}
            metalness={0.8}
            roughness={0.2}
          />
        </Text>
      </Center>
    </group>
  );
};

const GridFloor = () => {
  const gridSize = 20;
  const gridDivisions = 20;
  
  const gridHelper = useMemo(() => {
    const grid = new THREE.GridHelper(gridSize, gridDivisions, '#ff00ff', '#00f7ff');
    grid.material.opacity = 0.2;
    grid.material.transparent = true;
    return grid;
  }, []);

  useFrame(({ clock }) => {
    gridHelper.position.z = (clock.getElapsedTime() % 2) * 2;
  });

  return <primitive object={gridHelper} position={[0, -2, 0]} rotation={[0, 0, 0]} />;
};

const ArcadeCrystal = () => {
  const meshRef = useRef();
  const [spring] = useSpring(() => ({
    scale: [1, 1, 1],
    config: { mass: 1, tension: 280, friction: 60 },
  }));

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.3;
    meshRef.current.rotation.z = t * 0.1;
    meshRef.current.scale.x = 1 + Math.sin(t * 2) * 0.1;
    meshRef.current.scale.y = 1 + Math.sin(t * 2) * 0.1;
    meshRef.current.scale.z = 1 + Math.sin(t * 2) * 0.1;
  });

  return (
    <animated.mesh ref={meshRef} scale={spring.scale}>
      <dodecahedronGeometry args={[1, 2]} />
      <meshPhysicalMaterial
        color="#ff00ff"
        emissive="#b829f7"
        emissiveIntensity={0.5}
        metalness={1}
        roughness={0}
        transmission={0.5}
        thickness={0.5}
        envMapIntensity={1}
      />
    </animated.mesh>
  );
};

const NeonRing = ({ radius, speed, color, rotationAxis = [0, 0, 1] }) => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = rotationAxis[0] * t * speed;
    meshRef.current.rotation.y = rotationAxis[1] * t * speed;
    meshRef.current.rotation.z = rotationAxis[2] * t * speed;
    meshRef.current.scale.x = 1 + Math.sin(t * 2) * 0.1;
    meshRef.current.scale.y = 1 + Math.sin(t * 2) * 0.1;
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[radius, 0.05, 16, 100]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};

export function Scene() {
  return (
    <>
      <color attach="background" args={['#0a0a0f']} />
      <fog attach="fog" args={['#0a0a0f', 5, 15]} />
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      
      <ambientLight intensity={0.2} />
      <spotLight
        position={[10, 10, 5]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        color="#ff00ff"
      />
      <pointLight position={[-10, -10, -5]} intensity={1} color="#00f7ff" />
      
      <Stars
        radius={50}
        depth={50}
        count={3000}
        factor={4}
        saturation={1}
        fade
        speed={1}
      />

      <GridFloor />
      <ArcadeText />

      <Float
        speed={4}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <ArcadeCrystal />
      </Float>

      <group>
        <NeonRing radius={2} speed={0.2} color="#ff00ff" rotationAxis={[1, 0, 0]} />
        <NeonRing radius={2.5} speed={-0.3} color="#00f7ff" rotationAxis={[0, 1, 0]} />
        <NeonRing radius={3} speed={0.1} color="#b829f7" rotationAxis={[0, 0, 1]} />
      </group>
    </>
  );
}