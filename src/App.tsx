import { Menu, X } from "lucide-react";
import { useState } from "react";
import { FooterCaravan } from "./components/ui/FooterCaravan";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const newsItems = [
    { id: 1, category: "APP", title: "Latest Application Updates", color: "green" },
    { id: 2, category: "APP", title: "New Features Released", color: "gold" },
    { id: 3, category: "APP", title: "Performance Improvements", color: "green" },
    { id: 4, category: "APP", title: "Security Enhancements", color: "gold" },
    { id: 5, category: "APP", title: "User Experience Updates", color: "gold" },
    { id: 6, category: "APP", title: "Mobile App Launch", color: "green" },
    { id: 7, category: "APP", title: "Integration Updates", color: "gold" },
    { id: 8, category: "APP", title: "Community Features", color: "green" },
  ];

  return (
    <div className="min-h-screen bg-[#D2B48C] flex flex-col">
      {/* Modern Header */}
      <header className="bg-[#1A3329] shadow-lg sticky top-0 z-50 relative">
        {/* Army logo pinned to the left edge of the viewport */}
        <div className="absolute left-0 top-0 bottom-0 pl-4 left-logo flex items-center gap-2">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#1A3329] font-bold">
            A
          </div>
          <span className="text-white text-xl font-bold">ARMY</span>
        </div>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors">Home</a>
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors">News</a>
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors">About</a>
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors">Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 flex flex-col gap-2">
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors py-2">Home</a>
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors py-2">News</a>
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors py-2">About</a>
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors py-2">Contact</a>
            </nav>
          )}
        </div>
      </header>

      {/* Main content grows so footer stays visible */}
      <main className="flex-1">

      {/* Latest News Section */}
      <div className="highlight-area" data-animate="true" data-highlight="true">
        <div className="highlight-shade" aria-hidden="true" />
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="section-title text-[#1A1A1A] text-4xl md:text-5xl">
          LATEST NEWS
        </h2>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className={`${
                item.color === "green" ? "bg-[#1A3329]" : "bg-[#D4AF37]"
              } rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group`}
            >
              <div className="flex flex-col h-full">
                <span className={`${
                  item.color === "green" ? "text-white" : "text-[#1A1A1A]"
                } text-sm mb-4 opacity-80`}>
                  {item.category}
                </span>
                
                {/* Modern geometric decoration */}
                <div className="flex-1 flex items-center justify-center my-6">
                  <div className={`w-20 h-20 ${
                    item.color === "green" 
                      ? "border-white" 
                      : "border-[#1A1A1A]"
                  } border-2 rotate-45 group-hover:rotate-[225deg] transition-transform duration-500`}>
                    <div className={`w-full h-full ${
                      item.color === "green" 
                        ? "bg-white/20" 
                        : "bg-[#1A1A1A]/10"
                    }`} />
                  </div>
                </div>
                
                <p className={`${
                  item.color === "green" ? "text-white" : "text-[#1A1A1A]"
                } text-lg`}>
                  NEWS
                </p>
              </div>
            </div>
          ))}
        </div>
        </section>
      </div>

      </main>

      {/* Footer (logos and 'ARMY' removed) */}
      <footer className="bg-[#1A1A1A] text-white">
        <FooterCaravan />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          {/* intentionally left blank - footer logos and text removed */}
        </div>
      </footer>
    </div>
  );
}