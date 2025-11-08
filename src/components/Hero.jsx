import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(87,13,248,0.35),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,255,255,0.15),transparent_40%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 text-center sm:pt-28">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-fuchsia-300 via-cyan-200 to-indigo-300 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl"
        >
          Create Smarter, Faster, and Better with AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg"
        >
          AI Creator helps you craft content, designs, and ideas in seconds.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#features"
            className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.35)] transition hover:shadow-[0_0_45px_rgba(168,85,247,0.55)] focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60"
          >
            Get Started
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
          >
            Learn More
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-14 w-full max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
        >
          <p className="text-xs uppercase tracking-widest text-slate-300/80">
            AI Voice Aura Animation by Spline
          </p>
        </motion.div>
      </div>
    </section>
  );
}
