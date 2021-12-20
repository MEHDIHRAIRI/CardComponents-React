import styled from "styled-components";
import { animated } from "react-spring";

import { composedHelpers } from "../box";

export const AnimatedBox = styled(animated.div)`
  ${composedHelpers}
`;

AnimatedBox.defaultProps = {};
