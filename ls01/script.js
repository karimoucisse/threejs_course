import * as THREE from 'three';
const canvas = document.querySelector('canvas.webgl')
const sizes = {
	width: 800,
	heigth: 600,
	z : 3
}
const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'red'})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.heigth)
camera.position.z = sizes.z
scene.add(camera)
const render = new THREE.WebGLRenderer({canvas})
render.setSize(sizes.width, sizes.heigth)
render.render(scene, camera)
