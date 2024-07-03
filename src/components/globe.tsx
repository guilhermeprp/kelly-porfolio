'use client'

import { useEffect } from 'react';
import * as THREE from 'three';

export default function Globe() {

	const scene = new THREE.Scene();
	const geometry = new THREE.SphereGeometry(15, 32, 16);
	const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
	const sphere = new THREE.Mesh(geometry, material);

	useEffect(() => {
		scene.add(sphere);
	}, [])

	return (
		<div></div>
	)
}
