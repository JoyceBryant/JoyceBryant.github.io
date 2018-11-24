import {keyframes} from "styled-components";

const animation = {
    fadeIn: keyframes`
        0% { 
            opacity: 0;
            top: 50%;
        }
        50% {
            opacity: 1;
            top: 50%;
        }
        100% {
            opacity: 1;
            top: 27%;
        }
    `
}
export default animation;