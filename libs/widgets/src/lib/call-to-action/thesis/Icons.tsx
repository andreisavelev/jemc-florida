import styled from "styled-components";
import { ReactComponent as PinAngleIcon } from 'bootstrap-icons/icons/pin-angle.svg';

const StyledPinAngleIcon = styled(PinAngleIcon)`
  color: var(--jemc-primary);
`

export default {
  PIN: <StyledPinAngleIcon height="30px" width="30px" />
};
