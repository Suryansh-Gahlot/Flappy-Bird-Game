import Phaser from 'phaser';
import PlayScene from './scenes/PlayScene';
import MenuScene from './scenes/MenuScene';
import PreloadScene from './scenes/PreloadScene';
import ScoreScene from './scenes/ScoreScene';
import PauseScene from './scenes/PauseScene';

const WIDTH = 800;
const HEIGHT = 600;
const BIRD_POSITION = {
  x: WIDTH / 10,
  y: HEIGHT / 2
};
const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
  startPosition: BIRD_POSITION
}

const Scenes = [PreloadScene, MenuScene, PlayScene, PauseScene, ScoreScene];
const initScenes = () => Scenes.map(createScene);
const createScene = Scene => new Scene(SHARED_CONFIG);

const config = {
  // WebGL(Web graphics library) JS API for rendering 2D and 3D graphics.
  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  pixelArt: true,
  physics: {
    // Arcade physics plugin, manages physics simulation
    default: 'arcade',
    arcade: {
      // gravity: { y: 200 },
      // debug: true,
    }
  },
  // scene: [PreloadScene, new MenuScene(SHARED_CONFIG), new PlayScene(SHARED_CONFIG)]
  scene: initScenes()
  // scene: {
  //   preload: preload,
  //   create: create,
  //   update: update
  // }
}
// Loading assests, such as images, music, animations ....


// const PipeVerticalDistanceRange = [150, 250];
// const pipeHorizontalDistanceRange = [350, 400];
// let PIPES_TO_RENDER = 4;
// let upperPipe = null;
// let lowerPipe = null;
// let pipeHorizontalDistance = 0;
// let bird = null;
// let pipes = null;
// const flapVelocity = 250;
// const VELOCITY = 200;
// const initailBirdPosition = { x: config.width / 10, y: config.height / 2 };

// function preload() {
// 'this' context - scene
// contains functions and properties we can use
// this.load.image('sky', 'assets/sky.png'); // 2 arguments (key, path)
// this.load.image('bird', 'assets/bird.png');
// this.load.image('pipe', 'assets/pipe.png');
// }

// function create() {
// Method 1, to set image
// this.add.image(config.width / 2, config.height / 2, 'sky'); // 3 arguments (x coordinates, y coordinates, key)
// Method 2, to set image
// this.add.image(0, 0, 'sky').setOrigin(0, 0);
// bird = this.physics.add.sprite(initailBirdPosition.x, initailBirdPosition.y, 'bird').setOrigin(0, 0);
// bird.body.gravity.y = 400;
// bird.body.velocity.x = VELOCITY;
// debugger

// pipes = this.physics.add.group();


// for (let i = 0; i < PIPES_TO_RENDER; i++) {
//   const upperPipe = pipes.create(0, 0, 'pipe').setOrigin(0, 1);
//   const lowerPipe = pipes.create(0, 0, 'pipe').setOrigin(0, 0);
//   placePipe(upperPipe, lowerPipe);
// }

// pipes.setVelocityX(-200);

// this.input.on('pointerdown', flap);
// this.input.keyboard.on('keydown_SPACE', flap);

// }

// 60 fps 
// 60 times per second
// 60 * 16ms = 1000ms
// function update(time, delta) {
// if (bird.x >= config.width - bird.width) {
//   bird.body.velocity.x = -VELOCITY;
// } else if (bird.x <= 0) {
//   bird.body.velocity.x = VELOCITY;
// }
// if (bird.y < 0 - bird.height || bird.y > config.height) {
//   restartBirdPosition();
// }
// recyclePipes();
// }


// function placePipe(uPipe, lPipe) {
//   // pipeHorizontalDistance += 400;
//   const rightMostX = getRightMostPipe();
//   let PipeVerticalDistance = Phaser.Math.Between(...PipeVerticalDistanceRange);
//   let PipeVericalPosition = Phaser.Math.Between(0 + 20, config.height - 20 - PipeVerticalDistance);
//   let pipeHorizontalDistance = Phaser.Math.Between(...pipeHorizontalDistanceRange);
//   uPipe.x = rightMostX + pipeHorizontalDistance;
//   uPipe.y = PipeVericalPosition;
//   lPipe.x = uPipe.x;
//   lPipe.y = uPipe.y + PipeVerticalDistance;

// }

// function recyclePipes() {
//   const tempPipes = [];
//   pipes.getChildren().forEach(pipe => {
//     if (pipe.getBounds().right <= 0) {
//       tempPipes.push(pipe);
//       if (tempPipes.length == 2) {
//         placePipe(...tempPipes);
//       }
//     }
//   })
// }

// function getRightMostPipe() {
//   let rightMostX = 0;
//   pipes.getChildren().forEach(function (pipe) {
//     rightMostX = Math.max(pipe.x, rightMostX);
//   })
//   return rightMostX;
// }

// function restartBirdPosition() {
//   alert("Your game is over");
//   bird.x = initailBirdPosition.x;
//   bird.y = initailBirdPosition.y;
//   bird.body.velocity.y = 0;
// }

// function flap() {
//   bird.body.velocity.y = -flapVelocity;
// }
new Phaser.Game(config);