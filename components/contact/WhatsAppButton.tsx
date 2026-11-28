
import { MessageCircle, ArrowUpRight } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export default function WhatsAppButton({
  phoneNumber,
  message = "Hi Ranga! I'd like to get in touch with you.",
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/3 p-5 transition-all duration-300 hover:border-green-500/30 hover:bg-green-500/5"
    >
      <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-400 transition-colors group-hover:bg-green-500/15">
        <MessageCircle size={22} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-white">
          WhatsApp
        </p>
        <p className="mt-1 truncate text-xs text-zinc-500">
          Let's chat directly
        </p>
      </div>

      <ArrowUpRight
        size={18}
        className="shrink-0 text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-green-400"
      />
    </a>
  );
}
