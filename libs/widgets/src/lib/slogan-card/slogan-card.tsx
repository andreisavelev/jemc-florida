import styled from "styled-components";
import Image from "next/image";
import { Card, ContentHeader } from "@jemc-florida/shared";

/* eslint-disable-next-line */
export interface SloganCardProps {
  title: string;
  text: string;
  imageLink: string;
}

const StyledCard = styled(Card)`
  height: 100%;
`

export function SloganCard({ title, text, imageLink }: SloganCardProps) {
  return (
    <StyledCard>
      <Image
        src={imageLink}
        width="48"
        height="48"
        alt={text}
        className="mb-4"
      />
      <ContentHeader level="h4" text={title} />
      <p>
        {text}
      </p>
    </StyledCard>
  );
}

export default SloganCard;
