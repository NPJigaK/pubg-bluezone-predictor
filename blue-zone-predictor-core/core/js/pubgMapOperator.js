// ToDO https://github.com/KagiJPN/pubg-bluezone-predictor/issues/10
let stage;
let mapLayer;
let mainLayer;
let mapSize;
let mapScale;

/*init*/
async function initKonvaObject() {
  let stage = new Konva.Stage({
    container: "container",
    draggable: true,
    dragBoundFunc: function(pos) {
      return reposition(pos);
    }
  });

  // zoom function
  var scaleBy = 1.4;
  stage.on("wheel", e => {
    e.evt.preventDefault();
    var oldScale = stage.scaleX();

    var mousePointTo = {
      x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
      y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale
    };

    var newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;
    newScale = Math.max(newScale, this.mapScale);
    stage.scale({ x: newScale, y: newScale });

    var newPos = {
      x: -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
      y: -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale
    };
    newPos.x = Math.min(newPos.x, 0);
    newPos.x = Math.max(newPos.x, this.mapSize * (this.mapScale - newScale));
    newPos.y = Math.min(newPos.y, 0);
    newPos.y = Math.max(newPos.y, this.mapSize * (this.mapScale - newScale));
    stage.position(newPos);
    stage.batchDraw();
  });

  // press key function
  var container = stage.container();
  // make it focusable
  container.tabIndex = 1;
  // focus it
  // also stage will be in focus on its click
  container.focus();
  container.addEventListener('keydown', function(e) {
    e.preventDefault();
    // console.log(`press a ${e.keyCode} key`)
    // press a space key
    if (e.keyCode === 32) {
      clickPredictionButton();
    } else {
      return;
    }
  });
  
  this.stage = stage;
  this.mapLayer = new Konva.Layer();
  this.mainLayer = new Konva.Layer();

  await this.stage.add(this.mapLayer);
  await this.stage.add(this.mainLayer);
}

function reposition(pos, scale, config) {
  scale = scale || this.stage.scaleX();

  pos.x = Math.min(pos.x, 0);
  pos.x = Math.max(pos.x, 780 - this.mapSize * scale);
  pos.y = Math.min(pos.y, 0);
  pos.y = Math.max(pos.y, 780 - this.mapSize * scale);
  return pos;
}

/*Load selected match */
async function clickMatchLoading(trObj) {
  // clear layer
  this.mainLayer.destroyChildren();
  this.mapLayer.destroyChildren();

  tr = trObj.parentNode.parentNode;

  await drawMap(tr.cells[1].innerHTML);

  await drawFlightPath(JSON.parse(tr.cells[3].innerHTML));

  initScoreBoard(JSON.parse(tr.cells[4].innerHTML));

  startPredictor(JSON.parse(tr.cells[4].innerHTML));

  // Coloring selected match
  [].forEach.call(document.getElementsByClassName('selectedMatch'), function(elem) {
	    elem.classList.remove('selectedMatch');
  })
  tr.classList.add("selectedMatch");
}

async function drawMap(mapName) {
  this.stage.clear();

  let map = new Konva.Image({
    image: await syncGetImage(
      `../blue-zone-predictor-core/core/resource/maps/${mapName}.jpg`
    )
  });

  // resize stage
  this.mapSize = PUBG_MAPS.getByValue("name", mapName).mapSize;
  this.stage.width(this.mapSize);
  this.stage.height(this.mapSize);
  fitStageIntoParentContainer(this.stage);

  // Draw map image
  this.mapLayer.add(map);
  this.mapLayer.batchDraw();
}

function drawFlightPath(flightPath) {
  var circle = new Konva.Circle({
    x: flightPath.first.x,
    y: flightPath.first.y,
    radius: 5 / this.mapScale,
    fill: "white",
    stroke: "red",
    strokeWidth: 1 / this.mapScale
  });

  var line = new Konva.Arrow({
    points: [
      flightPath.first.x,
      flightPath.first.y,
      flightPath.last.x,
      flightPath.last.y
    ],
    stroke: "red",
    strokeWidth: 1 / this.mapScale,
    pointerWidth: 10 / this.mapScale,
    pointerLength: 10 / this.mapScale
  });

  this.mainLayer.add(circle);
  this.mainLayer.add(line);
  this.mainLayer.batchDraw();
}

function fitStageIntoParentContainer(stage) {
  var container = document.querySelector("#stage-parent");

  // now we need to fit stage into parent
  var containerWidth = container.offsetWidth;
  // to do this we need to scale the stage
  this.mapScale = containerWidth / stage.getWidth();
  stage.width(stage.getWidth() * this.mapScale);
  stage.height(stage.getHeight() * this.mapScale);
  stage.scale({ x: this.mapScale, y: this.mapScale });

  // reset position
  let resetPos = reposition(stage.position());
  stage.position(resetPos);

  // draw stage
  stage.batchDraw();
}

// Other method
function initScoreBoard(gameState) {
  let table = document.getElementById("score");
  // reset score board
  table.innerHTML = "";
  console.log(gameState);
  let row1 = table.insertRow(-1);
  let row2 = table.insertRow(-1);

  var thPhaseObj = document.createElement("th");
  thPhaseObj.innerHTML = "Phase";
  row1.appendChild(thPhaseObj);
  var thCurrentObj = document.createElement("th");
  thCurrentObj.innerHTML = "Current(%)";
  row2.appendChild(thCurrentObj);

  // Skip phase 0
  for (var i = 1; i < gameState.length; i++) {
    // add th
    var thPhaseNumObj = document.createElement("th");
    thPhaseNumObj.innerHTML = i;
    row1.appendChild(thPhaseNumObj);

    // add td
    row2.insertCell(-1).innerHTML = "00.00";
  }

  // Show hidden objects
  document.getElementById("executeButton").style.visibility = "visible";
  document.getElementById("totalScore").style.visibility = "visible";
}

function syncGetImage(src) {
  return new Promise((resolve, reject) => {
    let imgObject = new Image();
    imgObject.onload = () => resolve(imgObject);
    imgObject.onerror = reject;
    imgObject.src = src;
  });
}

// main program
mainProperty = {
  nowPhase: -1,
  gameState: null,
  predictionCycleId: "predictionCicle",
  totalCount: {
    "1":[],
    "2":[],
    "3":[],
    "4":[],
    "5":[],
    "6":[],
    "7":[],
    "8":[],
    "9":[],
  }
};

function startPredictor(gameState) {
  // Skipping 0 in the array is because there is a 0Phase that is not displayed
  mainProperty.nowPhase = 1;
  mainProperty.gameState = gameState;
  console.log(mainProperty);

  drawPredictionGameStateCicle(mainProperty.gameState, mainProperty.nowPhase);
}

function drawGameStateCicle(gameState, phase) {
  var circle = new Konva.Circle({
    x: gameState[phase].x,
    y: gameState[phase].y,
    radius: gameState[phase].radius,
    stroke: "white",
    strokeWidth: 1 / this.mapScale
  });

  this.mainLayer.add(circle);
  this.mainLayer.batchDraw();
}

function drawPredictionGameStateCicle(gameState, phase) {
  var circle = new Konva.Circle({
    // First phase fixed
    x: gameState[1].x - 1,
    y: gameState[1].y - 1,
    radius: gameState[phase].radius,
    stroke: "red",
    strokeWidth: 1 / this.mapScale,
    draggable: true,
    id: `${mainProperty.predictionCycleId + phase}`
  });

  this.mainLayer.add(circle);
  this.mainLayer.batchDraw();
}

function destroyPredictionGameStateCicle(phase) {
  var deleteCircle = this.stage.findOne(`#${mainProperty.predictionCycleId + phase}`)
  console.log(phase)
  console.log(deleteCircle)
  deleteCircle.destroy();
}

function clickPredictionButton() {
  // Process if next phase exists
  if (isThereNext()) {
    drawGameStateCicle(mainProperty.gameState, mainProperty.nowPhase);

    var shape = this.stage.findOne(`#${mainProperty.predictionCycleId + mainProperty.nowPhase}`);

    let areaOfIntersection = getAreaOfIntersection(mainProperty.gameState[mainProperty.nowPhase], shape);
    console.log(areaOfIntersection);

    let areaPercentage = 0;
    if (!Number.isNaN(areaOfIntersection)) {
      areaPercentage = getIntersectionAreaRatio(areaOfIntersection);
    }

    addAreaPercentageToTable(areaPercentage)
  }
}

function getIntersectionAreaRatio(areaOfIntersection) {
  var r = mainProperty.gameState[mainProperty.nowPhase].radius;
  var defaultArea = Math.PI * r * r;

  return (areaOfIntersection / defaultArea * 100).toFixed(2);
}

function getAreaOfIntersection(nowCycle, predictionCycle) {
  var x0 = nowCycle.x;
  var y0 = nowCycle.y;
  var r0 = nowCycle.radius;
  var x1 = predictionCycle.x();
  var y1 = predictionCycle.y();
  var r1 = predictionCycle.radius();

  var rr0 = r0*r0;
  var rr1 = r1*r1;
  var c = Math.sqrt((x1-x0)*(x1-x0) + (y1-y0)*(y1-y0));
  var phi = (Math.acos((rr0+(c*c)-rr1) / (2*r0*c)))*2;
  var theta = (Math.acos((rr1+(c*c)-rr0) / (2*r1*c)))*2;
  var area1 = 0.5*theta*rr1 - 0.5*rr1*Math.sin(theta);
  var area2 = 0.5*phi*rr0 - 0.5*rr0*Math.sin(phi);

  return area1 + area2;
}

function isThereNext() {
  if (mainProperty.nowPhase < mainProperty.gameState.length) {
    return true;
  }
  return false;
}

// table
function addAreaPercentageToTable(areaPercentage){
  var scoreTable = document.getElementById('score');
  var totalScoreTable = document.getElementById('totalScore');

  scoreTable.rows[1].cells[mainProperty.nowPhase].innerHTML = areaPercentage

  mainProperty.totalCount[`${mainProperty.nowPhase}`].push(Number.parseFloat(areaPercentage));

  totalScoreTable.rows[0].cells[mainProperty.nowPhase].innerHTML = 
  average(mainProperty.totalCount[`${mainProperty.nowPhase}`]).toFixed(2)
  
  destroyPredictionGameStateCicle(mainProperty.nowPhase);
  mainProperty.nowPhase = mainProperty.nowPhase + 1;

  //If the next phase exists
  if(mainProperty.gameState.length > mainProperty.nowPhase){
    drawPredictionGameStateCicle(mainProperty.gameState, mainProperty.nowPhase)
  }
}

// other

var sum  = function(arr) {
  return arr.reduce(function(prev, current, i, arr) {
      return prev + current;
  });
};

var average = function(arr) {
  return sum(arr)/arr.length;
};