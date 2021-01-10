//Create a simple maze game using Matter JS library
//documentation for Matter JS at: https://brm.io/matter-js/

//import some of the elements from Matter JS library
const { Engine, Render, Runner, World, Bodies } = Matter;

const width = 600;
const height = 600;
//boilerplate code to create a basic Matter canvas
//create an engine. with the engine you create a world object
const engine = Engine.create();
const {world} = engine;
//create a canvas object (shows content on screen)
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    //fill the shapes, instead of outlines
    wireframes: false,
    //size of the canvas for our app
    width: width,
    height: height
  }
});
Render.run(render);
Runner.run(Runner.create(), engine);

//to add shapes to the canvas
//(posx,posy,sizex,sizey, {options})
// const shape = Bodies.rectangle(200,200,50,50, {
//   // isStatic: true //by default gravity is on in Matter
// });
// World.add(world, shape);

//Create Walls in the canvas
const walls = [
  Bodies.rectangle(width/2,0,width,40,{isStatic:true}),
  Bodies.rectangle(width/2,height,width,40,{isStatic:true}),
  Bodies.rectangle(0,height/2,40,height,{isStatic:true}),
  Bodies.rectangle(width,height/2,40,height,{isStatic:true})
];
//can pass arrays in World.add()
World.add(world, walls)

//Maze Generation

// with for loop for a 3x3 grid
// const grid = [];
// for (let i = 0; i < 3; i++) {
//   grid.push([]);
//   for (let j = 0; j < 3; j++) {
//     grid[i].push(false);}}

//concise way
const grid = Array(3).fill(null).map(()=>Array(3).fill(false));
//vertical and horizontal lines of the grid
const verticals = Array(3).fill(null).map(()=>Array(2).fill(false));
const horizontals = Array(3).fill(null).map(()=>Array(3).fill(false));