import { useEffect, useRef } from 'react';

export function useJoystick(event) {
    useEffect(() => {
        console.log(event)
    }, [event]);
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
    // useControllerKeyTouch(0, [''], (pressed) => (keys.current.forward = pressed))
    // useControllerKeyTouch(1, [''], (pressed) => (keys.current.backward = pressed))
    // useControllerKeyTouch(2, [''], (pressed) => (keys.current.brake = pressed))
    // useControllerKeyTouch(3, [''], (pressed) => (keys.current.reset = pressed))
    // // useControllerKeyTouch(4, [''], (pressed) => (keys.current.right = pressed))
    // // useControllerKeyTouch(5, [''], (pressed) => (keys.current.left = pressed))

    // useKeyPress(['ArrowUp', 'w'], (pressed) => (keys.current.forward = pressed));
    // useKeyPress(
    //     ['ArrowDown', 's'],
    //     (pressed) => (keys.current.backward = pressed)
    // );
    // useKeyPress(['ArrowLeft', 'a'], (pressed) => (keys.current.left = pressed));
    // useKeyPress(['ArrowRight', 'd'], (pressed) => (keys.current.right = pressed));
    // useKeyPress([' '], (pressed) => (keys.current.brake = pressed));
    // useKeyPress(['r'], (pressed) => (keys.current.reset = pressed));
    // useKeyPress(['Enter'], (pressed) => { keys.current.enter = pressed });
    // 
    return keys;
}