import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Advantages } from './components/Advantages';
import { Steps } from './components/Steps';
import { Requirements } from './components/Requirements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LanguageProvider } from './LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Steps />
          <Advantages />
          <Requirements />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;