import styled from "styled-components";
import Image from "next/image";
import { Card, ContentHeader } from "@jemc-florida/shared";

/* eslint-disable-next-line */
export interface SloganCardProps {
  title: string;
  text: string;
  imageLink: string;
}

export function SloganCard({ title, text, imageLink }: SloganCardProps) {
  return (
    <Card className="h-100">
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
    </Card>
  );
}

export default SloganCard;
