import { useEffect, useRef } from 'react';

export function useKeyPress(target, event) {
  useEffect(() => {
    const downHandler = ({ key }) => { console.log(key); target.indexOf(key) !== -1 && event(true) };
    const upHandler = ({ key }) => target.indexOf(key) !== -1 && event(false);
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [event, target]);
}

export function useControllerKeyTouch(buttonId, target, event) {
  var buttons = document.getElementsByClassName("controller-button");


  useEffect(() => {
    if (buttons.length !== 0) {

      const downHandler = ({ key }) => event(true);
      const upHandler = ({ key }) => event(false);
      buttons[buttonId].addEventListener('touchstart', downHandler);
      buttons[buttonId].addEventListener('touchend', upHandler);
      return () => {
        buttons[buttonId].removeEventListener('touchstart', downHandler);
        buttons[buttonId].removeEventListener('touchend', upHandler);
      };
    }
  }, [event, target]);

}



export function useControls() {
  const keys = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false,
    brake: false,
    reset: false,
    enter: false
  });
  useControllerKeyTouch(0, [''], (pressed) => (keys.current.forward = pressed))
  useControllerKeyTouch(1, [''], (pressed) => (keys.current.backward = pressed))
  useControllerKeyTouch(2, [''], (pressed) => (keys.current.brake = pressed))
  useControllerKeyTouch(3, [''], (pressed) => (keys.current.reset = pressed))
  // useControllerKeyTouch(4, [''], (pressed) => (keys.current.right = pressed))
  // useControllerKeyTouch(5, [''], (pressed) => (keys.current.left = pressed))

  useKeyPress(['ArrowUp', 'w'], (pressed) => (keys.current.forward = pressed));
  useKeyPress(
    ['ArrowDown', 's'],
    (pressed) => (keys.current.backward = pressed)
  );
  useKeyPress(['ArrowLeft', 'a'], (pressed) => (keys.current.left = pressed));
  useKeyPress(['ArrowRight', 'd'], (pressed) => (keys.current.right = pressed));
  useKeyPress([' '], (pressed) => (keys.current.brake = pressed));
  useKeyPress(['r'], (pressed) => (keys.current.reset = pressed));
  useKeyPress(['Enter'], (pressed) => { keys.current.enter = pressed });
  return keys;
}