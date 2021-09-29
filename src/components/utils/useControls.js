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
  // var buttons = document.getElementsByClassName("controller-button");
  var button = document.getElementById(buttonId);


  useEffect(() => {
    if (button) {

      const downHandler = ({ key }) => event(true);
      const upHandler = ({ key }) => event(false);
      button.addEventListener('touchstart', downHandler);
      button.addEventListener('touchend', upHandler);
      return () => {
        button.removeEventListener('touchstart', downHandler);
        button.removeEventListener('touchend', upHandler);
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
  useControllerKeyTouch("forward-controller-button", [''], (pressed) => (keys.current.forward = pressed))
  useControllerKeyTouch("break-controller-button", [''], (pressed) => (keys.current.brake = pressed))
  useControllerKeyTouch("down-controller-button", [''], (pressed) => (keys.current.backward = pressed))
  useControllerKeyTouch("right-controller-button", [''], (pressed) => (keys.current.left = pressed))
  useControllerKeyTouch("left-controller-button", [''], (pressed) => (keys.current.right = pressed))
  useControllerKeyTouch("reset-controller-button", [''], (pressed) => (keys.current.reset = pressed))

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