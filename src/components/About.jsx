import { motion } from "framer-motion";
import { Sparkles, Cpu, PenTool } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "Built for Creativity",
    desc: "Turn sparks into fully-formed concepts with guided AI prompts and templates.",
  },
  {
    icon: Cpu,
    title: "AI at the Core",
    desc: "Smart models enhance your writing, visuals, and strategy in real time.",
  },
  {
    icon: PenTool,
    title: "Design-First",
    desc: "Beautiful defaults, neon gradients, and smooth motion baked in.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
        >
          About AI Creator
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-center text-slate-300"
        >
          A creative AI-powered platform that helps you generate content, designs, and ideas
          quickly and effortlessly.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 backdrop-blur transition"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.25),transparent_40%)]" />
              <div className="relative flex items-start gap-4">
                <div className="rounded-xl bg-white/10 p-3 text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.25)]">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
