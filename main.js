import { CanvasSpace, Pt, Group } from 'pts';

function main() {
  // create canvas element and add to the DOM
  const canvas = document.createElement('canvas');
  canvas.setAttribute('id', 'canvas');
  document.body.appendChild(canvas);

  // set canvas size
  canvas.style.width = '80vw';
  canvas.style.height = '80vh';

  /**
   * Resizes the canvas element's drawing buffer to be the same as it's
   * display size.
   * @author Ryan Milligan
   * @date 5/22/2023 - 11:54:28 AM
   *
   * @param {canvas} canvas
   */
  function resizeCanvas() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  }

  resizeCanvas();

  // create canvas space
  const space = new CanvasSpace('#canvas');
  space.setup({ bgcolor: '#fff' });

  // create canvas form
  const form = space.getForm();

  // add player callback to space
  space.add(() => {
    form.point(space.pointer, 10);
  });
}

window.addEventListener('load', main);
