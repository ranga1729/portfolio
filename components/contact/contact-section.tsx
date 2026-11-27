import { SOCIAL_LINKS } from "@/data/general";
import SocialIcon from "./social-icon";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full scroll-mt-20 border-t border-border px-6 py-28 text-center sm:px-16 sm:py-32"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center justify-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Find me on
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5 sm:gap-7">
          {SOCIAL_LINKS.map((item) => (
            <SocialIcon key={item.label} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}