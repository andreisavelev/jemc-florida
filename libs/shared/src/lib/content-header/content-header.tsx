import cn from 'classnames';

type Level = 'h1' | 'h2' | 'h3' | 'h4';
export interface ContentHeaderProps {
  level: Level,
  text: string
  className?: string
}

const levels: (text: string, className: string) => Record<Level, JSX.Element> = (text, className = '') => {
  const classNames = cn('text-uppercase', className);

  return {
    h1: <h1 className={classNames}>{text}</h1>,
    h2: <h2 className={classNames}>{text}</h2>,
    h3: <h3 className={classNames}>{text}</h3>,
    h4: <h4 className={classNames}>{text}</h4>
  };
}

export function ContentHeader({level, text, className = ""}: ContentHeaderProps) {
  return levels(text, className)[level];
}

export default ContentHeader;
