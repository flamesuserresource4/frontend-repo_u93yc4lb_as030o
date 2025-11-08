import { motion } from "framer-motion";
import { Rocket, Lightbulb, Brain, Zap } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Auto-Generate Stunning Designs",
    desc: "From palettes to layouts — compose visuals with a single prompt.",
    glow: "from-fuchsia-500/40 to-cyan-400/40",
  },
  {
    icon: Lightbulb,
    title: "Instant Creative Idea Generator",
    desc: "Unblock your creativity with curated, context-aware suggestions.",
    glow: "from-amber-400/40 to-pink-400/40",
  },
  {
    icon: Brain,
    title: "AI-Powered Content Optimization",
    desc: "Tone, clarity, and SEO hints — optimized while you draft.",
    glow: "from-indigo-400/40 to-emerald-400/40",
  },
  {
    icon: Zap,
    title: "Fast, Simple, and Powerful",
    desc: "Minimal steps, maximum output — designed for speed.",
    glow: "from-cyan-400/40 to-fuchsia-400/40",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.08),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Key Features
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc, glow }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br ${glow}`} />
              <div className="relative">
                <div className="inline-flex rounded-xl bg-white/10 p-3 text-fuchsia-200 shadow-[0_0_25px_rgba(192,132,252,0.35)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-slate-300">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
