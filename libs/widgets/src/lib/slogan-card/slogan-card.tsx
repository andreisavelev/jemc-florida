import styled from "styled-components";

export type Variant = '1' | '2' | '3';

export interface SloganCardProps {
  title: string;
  children: JSX.Element | JSX.Element[];
  variant: Variant
}

const StyledSloganCardTitle = styled.h2<Pick<SloganCardProps, 'variant'>>`
  padding-top: 3.438rem;
  padding-bottom: 3.75rem;
  background-image: url('images/number${props => props.variant}.png');
  background-repeat: no-repeat;
  color: var(--jemc-primary);
`

const StyledSloganSection = styled.section`
  color: var(--jemc-black);
`

export function SloganCard({ title, children, variant = '1' }: SloganCardProps) {
  return (
    <article>
      <StyledSloganCardTitle
        variant={variant}
        className="text-uppercase fw-bold"
      >
        {title}
      </StyledSloganCardTitle>
      <StyledSloganSection>
        {children}
      </StyledSloganSection>
    </article>
  );
}

export default SloganCard;
