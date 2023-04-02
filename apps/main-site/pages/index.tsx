import dynamic from 'next/dynamic';

const DynamicMainNavigation = dynamic(() => 
  // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
  import('@jemc-florida/widgets').then((widgets) => widgets.MainNavigation)
)

const DynamicHero = dynamic(() => 
  // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
  import('@jemc-florida/widgets').then((widgets) => widgets.Hero)
)

const DynamicSlogans = dynamic(() => 
  // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
  import('@jemc-florida/widgets').then((widgets) => widgets.Slogans)
)

const DynamicCallToAction = dynamic(() => 
  // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
  import('@jemc-florida/widgets').then((widgets) => widgets.CallToAction)
)

const DynamicContactsSection = dynamic(() => 
  // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
  import('@jemc-florida/widgets').then((widgets) => widgets.ContactsSection)
)

const DynamicMainFooter = dynamic(() => 
  // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
  import('@jemc-florida/widgets').then((widgets) => widgets.MainFooter)
)

export function Index() {
  return (
    <>
      <DynamicMainNavigation />
      <DynamicHero />
      <DynamicSlogans />
      <DynamicCallToAction />
      <DynamicContactsSection />
      <DynamicMainFooter />
    </>
  );
}

export default Index;
