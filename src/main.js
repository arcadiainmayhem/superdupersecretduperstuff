import Alpine from './gameState.js'
import * as THREE from 'three'

//Start Alpine 
Alpine.start()

const canvas = document.getElementById('game-canvas')
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth, window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true
})


//** Renderer */
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

//**Camera */
camera.position.z = 0.5

//** Scene */
scene.background = new THREE.Color('#0a0a0a')



//** Handle Resizing */
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth , window.innerHeight)
})



//** Animation Loop */
function animate() {
    
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    



}

animate()