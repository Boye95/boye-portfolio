import React from "react";

import { About, Contact, Experience, Footer, Header, Nav, Portfolio, Services, Testimonials } from './components';


/**
 * The App function returns the Header, Nav, About, Experience, Services, Portfolio, Testimonials,
 * Contact, and Footer components
 * @returns The Header, Nav, About, Experience, Services, Portfolio, Testimonials, Contact, and Footer
 * components are being returned.
 */
function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
