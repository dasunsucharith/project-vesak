import * as THREE from 'three'
import { GLTFLoader } from 'GLTFLoader'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGL1Renderer({
    canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio( window.devicePixelRatio )
renderer.setSize( window.innerWidth, window.innerHeight )
renderer.shadowMap.enabled = true
camera.position.setZ(60)

renderer.render( scene, camera )

var model1
var model2
var model3
var model4
var model5

const loader = new GLTFLoader()
loader.load('assets/wesak3.glb', function(glb) {
    model1 = glb.scene
    model1.scale.set(7, 7, 7)
    model1.position.set(-55, 10, -25)

    scene.add(model1)
}, undefined, function( error ){
    console.error( error )
})

loader.load('assets/wesak2.glb', function(glb) {
    model2 = glb.scene
    model2.scale.set(7, 7, 7)
    model2.position.set(-25, 10, -10)

    scene.add(model2)
}, undefined, function( error ){
    console.error( error )
})

loader.load('assets/wesak1.glb', function(glb) {
    model3 = glb.scene
    model3.scale.set(7, 7, 7)
    model3.position.set(0, 10, 10)

    scene.add(model3)
}, undefined, function( error ){
    console.error( error )
})

loader.load('assets/wesak2.glb', function(glb) {
    model4 = glb.scene
    model4.scale.set(7, 7, 7)
    model4.position.set(25, 10, -10)

    scene.add(model4)
}, undefined, function( error ){
    console.error( error )
})

loader.load('assets/wesak3.glb', function(glb) {
    model5 = glb.scene
    model5.scale.set(7, 7, 7)
    model5.position.set(55, 10, -25)

    scene.add(model5)
}, undefined, function( error ){
    console.error( error )
})

const backgroundTexture = new THREE.TextureLoader().load('assets/vesak-moon.jpg')
scene.background = backgroundTexture

const listener = new THREE.AudioListener()
camera.add( listener )

const sound = new THREE.Audio( listener )

const audioLoader = new THREE.AudioLoader()
audioLoader.load( 'assets/song.mp3', function( buffer ){
    sound.setBuffer( buffer )
    sound.setLoop( true )
    sound.setVolume( 0.5 )
    sound.play()
    sound.autoplay( true )
    sound.hasPlaybackControl( true )
})

const color = 0xFFFFFF;
const intensity = 0.8;
const light1 = new THREE.PointLight(color, intensity)
light1.position.set(30, 30, 30)
scene.add(light1)

const light2 = new THREE.PointLight(color, intensity)
light2.position.set(-30, 30, 30)
scene.add(light2)

const light3 = new THREE.PointLight(color, intensity)
light3.position.set(30, -30, 30)
scene.add(light3)

const light4 = new THREE.PointLight(color, intensity)
light4.position.set(30, 30, -30)
scene.add(light4)

function animate() {
    requestAnimationFrame( animate )

    model1.rotation.y += 0.005
    model2.rotation.y += 0.005
    model3.rotation.y += 0.005
    model4.rotation.y += 0.005
    model5.rotation.y += 0.005

    renderer.render( scene, camera )
}
animate()