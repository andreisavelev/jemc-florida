import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import ICONS from './Icons';

type Icons = keyof typeof ICONS;

export interface ThesisProps {
  icon: Icons
  children: JSX.Element | JSX.Element[] | string;
}

export function Thesis({ icon, children }: ThesisProps) {
  return (
    <Card>
      <Card.Body>
        <Stack direction="horizontal" gap={3}>
          {ICONS[icon]}

          <p className="text-black mb-0">
            {children}
          </p>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default Thesis;
