import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CardProps {
  children: JSX.Element | JSX.Element[]
}

const StyledCard = styled.article`
  position: relative;
  padding: 80px 80px 96px 80px;
  color: var(--jemc-black);
  background-color: var(--jemc-light-orange);
`;

const StyledBottomLine = styled.hr`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
  width: 100%;
  color: var(--jemc-primary);
  background-color: var(--jemc-primary);
  border: 0;
  border-top: 1px solid;
  height: 16px;
  opacity: 1;
`

export function Card({ children }: CardProps) {
  return (
    <StyledCard>
      {children}

      <StyledBottomLine />
    </StyledCard>
  );
}

export default Card;
