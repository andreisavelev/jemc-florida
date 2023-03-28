import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const StyledCopyrightContainer = styled.div`
  background-color: var(--jemc-black);
`

const StyledLink = styled(Link)`
  font-size: 2rem;
  color: var(--jemc-primary);

  &:hover {
    color: var(--jemc-light-orange);
  }
`

export function MainFooter() {
  return (
    <footer className="bg-dark text-center text-white">
      <Container className="p-4 pb-0">
        <section className="mb-4">
          <Stack direction="horizontal" gap={3} className="justify-content-center">
            <StyledLink href="#!">
              <FontAwesomeIcon icon={faInstagram} />
            </StyledLink>

            <StyledLink href="#!">
              <FontAwesomeIcon icon={faFacebook} />
            </StyledLink>
          </Stack>
        </section>
      </Container>

      <StyledCopyrightContainer className='text-center p-3'>
        © {new Date().getFullYear()} Copyright: Jesus Embassy Church - Florida
      </StyledCopyrightContainer>
    </footer>
  );
}

export default MainFooter;
