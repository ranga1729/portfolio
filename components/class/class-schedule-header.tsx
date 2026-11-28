import { BookOpen, Phone } from "lucide-react";
import DecryptedText from "@/components/animated-texts/DecryptedText";
import { PERSONAL_NUMBER } from "@/data/general";

export default function ClassScheduleHeader() {
  return (
    <div className="flex flex-col gap-4 border-b border-border pb-12">
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
        <span>O/l ICT - academic Year 2027</span>
      </div>

      <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
        <DecryptedText
          text="Class Schedule"
          animateOn="inViewHover"
          effect="scramble"
          sequential
          revealDirection="start"
          speed={50}
          maxIterations={8}
          scrambleColor="#888888"
          className="text-foreground"
          encryptedClassName="text-muted-foreground"
        />
      </h1>

      <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        Check class timings and view institute locations on Google Maps below.
        Please contact the respective institute directly for more details
        regarding classes and schedules.
      </p>

      <div className="pt-2 flex flex-wrap items-center gap-2.5">
        <span className="text-sm text-muted-foreground">
          For any other inquiries:
        </span>
        <a
          href={`tel:${PERSONAL_NUMBER}`}
          aria-label="Call 0772123123 for other inquiries"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 font-mono text-xs text-foreground transition-colors duration-300 hover:border-accent focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Phone
            className="h-3.5 w-3.5 text-muted-foreground"
            aria-hidden="true"
          />
          <span> {PERSONAL_NUMBER} </span>
        </a>
      </div>
    </div>
  );
}