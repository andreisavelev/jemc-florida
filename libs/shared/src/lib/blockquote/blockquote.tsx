export interface BlockquoteProps {
  blockquote: string;
  cite: string;
  className?: string;
}

export function Blockquote({ blockquote, cite, className }: BlockquoteProps) {
  return (
    <figure className={className}>
      <blockquote className="blockquote">
        <p>{blockquote}</p>
      </blockquote>
      <figcaption className="blockquote-footer">
        <cite title={cite}>{cite}</cite>
      </figcaption>
    </figure>
  );
}

export default Blockquote;
