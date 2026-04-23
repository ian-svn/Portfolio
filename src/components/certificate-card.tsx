import Link from "next/link";

import type { Certificate } from "@/sanity/lib/queries";

export function CertificateCard({ certificate }: { certificate: Certificate }) {
  const dateLabel = certificate.issueDate
    ? new Date(`${certificate.issueDate}T00:00:00`).toLocaleDateString("es-AR", {
        year: "numeric",
        month: "long",
      })
    : "Sin fecha";

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-card/70 p-6 shadow-card ring-1 ring-white/[0.04] transition duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-glow hover:ring-gold/10">
      <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">{certificate.title}</h3>
      <p className="mt-1.5 text-sm font-medium text-gold/90">{certificate.issuer}</p>
      <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted">{dateLabel}</p>
      {certificate.description ? (
        <div className="scroll-reveal mt-3 max-h-24 overflow-y-auto pr-1">
          <p className="text-sm leading-relaxed text-muted">{certificate.description}</p>
        </div>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-2">
        {(certificate.skills ?? []).map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/[0.1] bg-white/[0.04] px-2.5 py-1 text-xs text-gold/95"
          >
            {skill}
          </span>
        ))}
      </div>
      {certificate.credentialPdfUrl ? (
        <Link
          href={certificate.credentialPdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-fit rounded-lg border border-gold/45 bg-black/20 px-3 py-2 text-sm text-gold backdrop-blur-sm transition hover:border-gold hover:bg-gold/10"
        >
          Ver credencial
        </Link>
      ) : null}
    </article>
  );
}
