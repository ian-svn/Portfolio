"use client";

import { useMemo, useState } from "react";

import { CertificateCard } from "@/components/certificate-card";
import type { Certificate } from "@/sanity/lib/queries";

const INITIAL_VISIBLE_ITEMS = 6;

export function CertificatesSection({ certificates }: { certificates: Certificate[] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleCertificates = useMemo(
    () => (isExpanded ? certificates : certificates.slice(0, INITIAL_VISIBLE_ITEMS)),
    [certificates, isExpanded],
  );

  return (
    <>
      <ul className="grid gap-6 md:grid-cols-2">
        {visibleCertificates.map((certificate) => (
          <li key={certificate._id}>
            <CertificateCard certificate={certificate} />
          </li>
        ))}
      </ul>
      {!isExpanded && certificates.length > INITIAL_VISIBLE_ITEMS ? (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className="rounded-lg border border-gold/45 bg-black/20 px-4 py-2 text-sm font-medium text-gold backdrop-blur-sm hover:border-gold hover:bg-gold/10"
          >
            Ver mas
          </button>
        </div>
      ) : null}
    </>
  );
}
