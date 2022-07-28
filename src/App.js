import React from "react";

import { About, Contact, Experience, Footer, Header, Jobs, Nav, Portfolio, Testimonials } from './components';


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
      <Portfolio />
      <Jobs />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
