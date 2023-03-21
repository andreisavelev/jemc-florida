import styled from "styled-components";
import { ReactComponent as PinAngleIcon } from 'bootstrap-icons/icons/pin-angle.svg';

const StyledPinAngleIcon = styled(PinAngleIcon)`
  color: var(--jemc-primary);
  width: 50px;
  height: 50px;
`

export default {
  PIN: <StyledPinAngleIcon />
};
