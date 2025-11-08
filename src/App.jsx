import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import TestimonialsCTA from "./components/TestimonialsCTA";

export default function App() {
  return (
    <div className="font-inter antialiased bg-slate-950">
      <Hero />
      <About />
      <Features />
      <Showcase />
      <TestimonialsCTA />
    </div>
  );
}
