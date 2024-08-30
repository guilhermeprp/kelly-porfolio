// @ts-nocheck
"use client";

import useBannerParallax from "@/hooks/bannerParallax";
import { useGLTF } from "@react-three/drei";
import { Canvas, GroupProps, useFrame, useThree } from "@react-three/fiber";
import React from "react";
import { Euler, Group, Object3DEventMap, Vector3 } from "three";

const filePath = "/airports_world.glb";

useGLTF.preload(filePath);

export default function Scene() {
	const { style: { opacity } } = useBannerParallax();

	return (
		<div style={{ opacity: opacity }} className="absolute inset-0 w-dvw h-dvh z-0 contrast-75 grayscale">
			<Canvas>
				<Model />
			</Canvas>
		</div>
	);
}

function Model(props: GroupProps) {
	const { nodes, materials } = useGLTF(filePath);
	const { viewport } = useThree();
	const globeRef = React.useRef<Group<Object3DEventMap>>();

	useFrame((_state, delta) => {
		if (!globeRef.current) return;

		(globeRef.current.position! as Vector3).y = -(window.scrollY / 1500);
		(globeRef.current.rotation! as Euler).y += delta / 7;
	});

	return (
		<>
			<directionalLight color="grey" intensity={30} position={[15, 0, 3]} />
			<directionalLight
				color="hsl(220, 25.7%, 10%)"
				intensity={15}
				position={[-30, 0, 3]}
			/>
			<group
				{...props}
				matrix={[0, 0, 0]}
				position={[0, 0, viewport.width < 5.5 ? viewport.width / 2 : 3]}
				dispose={null}
			>
				<group ref={globeRef}>
					<mesh
						castShadow
						receiveShadow
						rotation={[-1.5, 0, 0]}
						geometry={nodes.Object_2.geometry}
						material={materials.matairport_material}
					/>
					<mesh
						castShadow
						receiveShadow
						rotation={[-1.5, 0, 0]}
						geometry={nodes.Object_3.geometry}
						material={materials.matairport_material}
					/>
					<mesh
						castShadow
						receiveShadow
						rotation={[-1.5, 0, 0]}
						geometry={nodes.Object_4.geometry}
						material={materials.matsurface_material}
					/>
				</group>
			</group>
		</>
	);
}
