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
    <article className="rounded-2xl border border-white/10 bg-card/80 p-5 transition hover:border-gold/50">
      <h3 className="text-xl font-semibold text-foreground">{certificate.title}</h3>
      <p className="mt-1 text-sm text-gold">{certificate.issuer}</p>
      <p className="mt-2 text-xs uppercase tracking-wide text-muted">{dateLabel}</p>
      {certificate.description ? (
        <p className="mt-3 text-sm text-muted">{certificate.description}</p>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-2">
        {(certificate.skills ?? []).map((skill) => (
          <span key={skill} className="rounded-full border border-gold/30 px-2.5 py-1 text-xs text-gold">
            {skill}
          </span>
        ))}
      </div>
      {certificate.credentialUrl ? (
        <Link
          href={certificate.credentialUrl}
          target="_blank"
          className="mt-4 inline-flex rounded-lg border border-gold/45 px-3 py-2 text-sm text-gold hover:bg-gold hover:text-black"
        >
          Ver credencial
        </Link>
      ) : null}
    </article>
  );
}
