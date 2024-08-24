"use client"

import { Container } from "@chakra-ui/react"
import { Html, useGLTF, useProgress } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import React, { Suspense } from "react"

const filePath = '/airports_world.glb';

useGLTF.preload(filePath)

function Loader() {
	const { progress, active } = useProgress()

	return (
		<Html center>
			<Container pos="absolute" inset={0} zIndex={99} display={active ? "block" : "none"} bg="black">
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<p className="text-2xl font-bold">Loading...</p>
					<p className="text-2xl font-bold">{progress} %</p>
				</div>
			</Container>
		</Html>
	)
}

export default function Scene() {
	return (
		<div className="absolute inset-0 w-dvw h-dvh z-0 contrast-75 grayscale">
			<Canvas>
				<Suspense fallback={<Loader />}>
					<Model />
				</Suspense>
			</Canvas>
		</div>
	)
}

function Model(props) {
	const { nodes, materials } = useGLTF(filePath);
	const { viewport } = useThree();
	const directionalLightRef = React.useRef();
	const globeRef = React.useRef();

	useFrame((state, delta) => {
		globeRef.current.position.y = window.scrollY / 1500;
		globeRef.current.rotation.y += (delta / 7);
	})
	console.log("🚀 ~ Model ~ viewport.width:", viewport.width);

	return (
		<>
			<directionalLight color="grey" intensity={30} position={[15, 0, 3]} />
			<directionalLight color='hsl(220, 25.7%, 10%)' intensity={15} position={[-30, 0, 3]} />
			<group matrix={[0, 0, 0]} position={[0, 0, viewport.width < 5.5 ? viewport.width / 2 : 3]} {...props} dispose={null}>
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
	)
}