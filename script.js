const dragItems = document.querySelectorAll('.dragItem');
const dropZones = document.querySelectorAll('.dropZone');

//-------то,что перетягиваем--------------------

dragItems.forEach((dragItem) => {
  dragItem.addEventListener('dragstart', handlerDragstart);
  dragItem.addEventListener('dragend', handlerDragend);
  dragItem.addEventListener('drag', handlerDrag);
});

function handlerDragstart(event) {
  event.dataTransfer.setData('dragItem', this.dataset.item);
  this.classList.add('dragItem--active');
}

function handlerDragend(event) {
  this.classList.remove('dragItem--active');
}

function handlerDrag(event) {
  //   console.log('drag');
}

//----------то(место) куда перетягиваем--------------

dropZones.forEach((dropZone) => {
  dropZone.addEventListener('dragenter', handlerDragenter);
  dropZone.addEventListener('dragleave', handlerDragleave);
  dropZone.addEventListener('dragover', handlerDragover);
  dropZone.addEventListener('drop', handlerDrop);
});

function handlerDragenter(event) {
  event.preventDefault();
  this.classList.add('dropZone--active');
  //   console.log('dragenter', this);
}

function handlerDragleave(event) {
  this.classList.remove('dropZone--active');
  //   console.log('dragleave', this);
}

function handlerDragover(event) {
  event.preventDefault();
  //   console.log('dragover');
}

function handlerDrop(event) {
  const dragFlag = event.dataTransfer.getData('dragItem');
  const dragItem = document.querySelector(`[data-item='${dragFlag}']`);
  //   console.log('drop', this);
  this.append(dragItem);
}
