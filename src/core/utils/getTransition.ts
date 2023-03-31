import { css } from "styled-components";

const getTransition = (
    duration: number,
    property: string[] | string = ["background-color", "color"],
    animation = "ease"
) =>
    css`
        transition-property: ${Array.isArray(property) ? property.join(", ") : property};
        transition-duration: ${duration}ms;
        transition-timing-function: ${animation};
    `;

export default getTransition;
