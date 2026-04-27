import Link from "next/link";

import { urlFor } from "@/sanity/lib/image";
import type { Certificate } from "@/sanity/lib/queries";

export function CertificateCard({ certificate }: { certificate: Certificate }) {
  const dateLabel = certificate.issueDate
    ? new Date(`${certificate.issueDate}T00:00:00`).toLocaleDateString("es-AR", {
        year: "numeric",
        month: "long",
      })
    : "Sin fecha";

  const credentialHref = certificate.credentialPdfUrl;
  const logoUrl = certificate.issuerLogo
    ? urlFor(certificate.issuerLogo).width(480).height(480).fit("max").url()
    : null;

  const logoSizeClass = "h-36 w-36 shrink-0 sm:h-40 sm:w-40 md:h-44 md:w-44";

  /** Mismo tono que la tarjeta: evita el “tile” blanco sobre fondo negro. */
  const logoFrameClass = `${logoSizeClass} overflow-hidden rounded-2xl border border-white/[0.1] bg-card/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ring-1 ring-inset ring-white/[0.04]`;

  const logoInteractiveClass =
    "group/logo relative block cursor-pointer outline-none transition hover:border-gold/35 hover:shadow-[inset_0_1px_0_rgba(212,175,55,0.12)] hover:ring-gold/20 focus-visible:ring-2 focus-visible:ring-gold/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const logoInner = logoUrl ? (
    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-2xl p-2.5">
      <img
        src={logoUrl}
        alt={`Logo de ${certificate.issuer}`}
        className="max-h-full max-w-full object-contain object-center transition duration-300 group-hover/logo:scale-[1.04]"
      />
    </div>
  ) : (
    <div className="flex h-full w-full items-center justify-center px-2 text-center text-sm font-semibold uppercase leading-tight tracking-wide text-gold/80">
      {certificate.issuer.slice(0, 2)}
    </div>
  );

  const logoBlock =
    credentialHref ? (
      <Link
        href={credentialHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir credencial PDF: ${certificate.title}`}
        className={`${logoInteractiveClass} ${logoFrameClass}`}
      >
        {logoInner}
      </Link>
    ) : (
      <div className={logoFrameClass}>{logoInner}</div>
    );

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-card/70 p-6 shadow-card ring-1 ring-white/[0.04] transition duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-glow hover:ring-gold/10">
      <div className="flex gap-5">
        {logoBlock}
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">{certificate.title}</h3>
          <p className="mt-1.5 text-sm font-medium text-gold/90">{certificate.issuer}</p>
          <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted">{dateLabel}</p>
        </div>
      </div>
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
      {credentialHref ? (
        <Link
          href={credentialHref}
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
