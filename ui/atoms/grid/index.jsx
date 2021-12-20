import styled from "styled-components";
import { Box } from "../box";

import { compose, grid } from "styled-system";

const composedHelpers = compose(grid);

export const Grid = styled(Box)`
  ${composedHelpers}
`;

Grid.defaultProps = {
  display: "grid"
};
