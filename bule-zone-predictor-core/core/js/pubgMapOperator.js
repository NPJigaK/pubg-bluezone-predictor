function syncGetImage(src) {
    return new Promise((resolve, reject) => {
      let imgObject = new Image();
      imgObject.onload = () => resolve(imgObject);
      imgObject.onerror = reject;
      imgObject.src = src;
    });
  }







/**No use. ToDo*/
function fitStageIntoParentContainer(stage) {
    var container = document.querySelector('#stage-parent');

    // now we need to fit stage into parent
    var containerWidth = container.offsetWidth;
    // to do this we need to scale the stage
    var scale = containerWidth / 8192;

    stage.width(8192 * scale);
    stage.height(8192 * scale);
    stage.scale({ x: scale, y: scale });
    stage.draw();
}