import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Avery Chen",
    role: "Product Designer",
    quote:
      "AI Creator shaved days off our concepting process. The motion and visuals are stunning.",
  },
  {
    name: "Jordan Lee",
    role: "Founder, Neon Labs",
    quote:
      "From ideas to polished drafts in minutes. It's become our creative copilot.",
  },
  {
    name: "Samira Patel",
    role: "Content Strategist",
    quote:
      "The optimization tips are spot-on. Our engagement noticeably improved.",
  },
];

export default function TestimonialsCTA() {
  return (
    <section className="relative w-full bg-slate-950 py-24 text-white">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Loved by creators and teams
        </motion.h2>

        <div className="mt-10 overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            whileInView={{ x: [0, -600] }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 12, ease: "linear" }}
            className="flex gap-6"
          >
            {testimonials.concat(testimonials).map((t, idx) => (
              <div
                key={idx}
                className="min-w-[300px] shrink-0 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <div className="flex items-center gap-1 text-amber-300">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <p className="mt-3 text-slate-200">“{t.quote}”</p>
                <p className="mt-4 text-sm text-slate-400">
                  {t.name} • {t.role}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-600 via-fuchsia-600 to-purple-700 p-[2px]">
          <div className="rounded-3xl bg-slate-950 p-8 sm:p-12">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div>
                <h3 className="bg-gradient-to-br from-cyan-200 via-fuchsia-200 to-indigo-200 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                  Start Creating with AI Today!
                </h3>
                <p className="mt-2 max-w-xl text-slate-300">
                  Join now to turn ideas into on-brand, polished assets in minutes.
                </p>
              </div>
              <a
                href="#"
                className="group inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Join Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-slate-400 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-400" />
            <span className="font-semibold text-white">AI Creator</span>
          </div>
          <nav className="flex items-center gap-6">
            <a className="transition hover:text-white" href="#about">About</a>
            <a className="transition hover:text-white" href="#features">Features</a>
            <a className="transition hover:text-white" href="#">Pricing</a>
            <a className="transition hover:text-white" href="#">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <a className="transition hover:text-white" href="#">Twitter</a>
            <a className="transition hover:text-white" href="#">Dribbble</a>
            <a className="transition hover:text-white" href="#">GitHub</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
