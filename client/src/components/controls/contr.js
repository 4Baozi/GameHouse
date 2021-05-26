export const handleKeyDown = (event, keys) => {
    switch (event.key) {
        case "w": // w (forward)
            keys["w"] = true;
            break;
        case "a": // a (left)
            keys["a"] = true;
            break;
        case "s": // s (back)
            keys["s"] = true;
            break;
        case "d": // d (right)
            keys["d"] = true;
            break;
        case " ": // spacebar (up)
            keys[" "] = true;
            break;
        case "Alt": // left alt (down)
            keys["Alt"] = true;
            break;
        default:
            break;
    }

    keys = {};
};

export const handleKeyUp = (event, keys) => {
    switch (event.keyCode) {
        case 87: // w (forward)
            keys["w"] = false;
            break;
        case 65: // a (left)
            keys["a"] = false;
            break;
        case 83: // s (back)
            keys["s"] = false;
            break;
        case 68: // d (right)
            keys["d"] = false;
            break;
        case 32: // spacebar (up)
            keys[" "] = false;
            break;
        case 17: // left alt (down)
            keys["Alt"] = false;
            break;
        default:
            break;
    }
};
