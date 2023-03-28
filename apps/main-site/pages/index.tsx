// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  MainNavigation,
  Hero,
  Slogans,
  CallToAction,
  ContactsSection,
  MainFooter
} from '@jemc-florida/widgets';

export function Index() {
  return (
    <>
      <MainNavigation />
      <Hero />
      <Slogans />
      <CallToAction />
      <ContactsSection />
      <MainFooter />
    </>
  );
}

export default Index;
