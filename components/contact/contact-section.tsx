
import { SOCIAL_LINKS } from "@/data/general";
import SocialIcon from "./social-icon";
import Aurora from "@/components/background/Aurora";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative isolate w-full scroll-mt-20 overflow-hidden border-t border-white/8 bg-[#08090D]"
    >
      {/* Ambient Aurora Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[-1]"
      >
        <Aurora
          colorStops={["#2563EB", "#7C3AED", "#0EA5E9"]}
          amplitude={1.1}
          blend={0.45}
          speed={0.35}
          height={0.38}
          scale={1.2}
          glow={0.35}
          brightness={0.7}
          layers={2}
          opacity={0.45}
          mouseInteraction={false}
        />
      </div>

      {/* Dark Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[-1] bg-linear-to-b from-[#08090D]/20 via-[#08090D]/65 to-[#08090D]"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-10 pt-28 sm:px-10 sm:pt-36">

        {/* Section Content */}
        <div className="flex max-w-2xl flex-col items-center text-center">

          <span className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.3em] text-blue-400">
            Get in touch
          </span>

          <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Let's connect<span className="text-blue-400">.</span>
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
            Whether you have an interesting project, an opportunity,
            or simply want to talk about technology, I'd love to hear
            from you.
          </p>
        </div>

        {/* Social Links */}
        <div className="mt-14 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {SOCIAL_LINKS.map((item) => (
            <SocialIcon key={item.label} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
