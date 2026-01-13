
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIChat from './components/AIChat';
import AIImage from './components/AIImage';
import Contact from './components/Contact';
import { AppTab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.HOME);

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.HOME:
        return <Hero onStart={setActiveTab} />;
      case AppTab.CHAT:
        return <AIChat />;
      case AppTab.IMAGE:
        return <AIImage />;
      case AppTab.CONTACT:
        return <Contact />;
      default:
        return <Hero onStart={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen selection:bg-purple-500/30 flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="container mx-auto flex-1">
        {renderContent()}
      </main>

      <footer className="py-10 border-t border-slate-800 glass mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm tracking-wide">
            © 2026 <span className="text-slate-300 font-semibold">TECHIT AI</span> by <span className="text-purple-400 font-bold">TECHIT BANGLADESH</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
