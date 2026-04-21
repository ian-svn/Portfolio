import Image from "next/image";
import Link from "next/link";

import ianImage from "@/app/ian.png";
import { CertificateCard } from "@/components/certificate-card";
import { ProjectCard } from "@/components/project-card";
import { TechIcon } from "@/components/tech-icon";
import { client } from "@/sanity/lib/client";
import {
  CERTIFICATES_QUERY,
  PROJECTS_QUERY,
  type Certificate,
  type Project,
} from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";

export default async function Home() {
  const mockProjects: Project[] = [
    {
      _id: "mock-1",
      title: "Sistema de Inventario con Spring Boot",
      slug: { current: "inventario-spring-boot" },
      description:
        "API backend robusta con autenticacion JWT, roles y arquitectura limpia para una empresa mediana.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/",
      liveUrl: "",
    },
    {
      _id: "mock-2",
      title: "Dashboard Fullstack Next.js + Sanity",
      slug: { current: "dashboard-nextjs-sanity" },
      description:
        "Panel administrativo con contenido autogestionable, formularios validables y vistas optimizadas.",
      technologies: ["Next.js", "React", "Tailwind", "Sanity"],
      githubUrl: "https://github.com/",
      liveUrl: "",
    },
  ];
  const mockCertificates: Certificate[] = [
    {
      _id: "cert-1",
      title: "Java Spring Framework & Security",
      issuer: "Educacion IT",
      issueDate: "2025-11-01",
      description: "Arquitectura con Spring, seguridad web y autenticacion con JWT.",
      skills: ["Java", "Spring", "Security"],
      credentialUrl: "https://www.linkedin.com/",
    },
    {
      _id: "cert-2",
      title: "Desarrollo Fullstack con React y Next.js",
      issuer: "UTN / Cursos complementarios",
      issueDate: "2025-08-20",
      description: "Construccion de apps modernas con frontend performante y backend integrado.",
      skills: ["React", "Next.js", "TypeScript"],
      credentialUrl: "https://www.linkedin.com/",
    },
  ];

  let projects: Project[] = [];
  let certificates: Certificate[] = [];

  if (!client) {
    projects = mockProjects;
    certificates = mockCertificates;
  } else {
    try {
      const sanityProjects = await client.fetch<Project[]>(PROJECTS_QUERY);
      const sanityCertificates = await client.fetch<Certificate[]>(CERTIFICATES_QUERY);
      projects = sanityProjects.length > 0 ? sanityProjects : mockProjects;
      certificates = sanityCertificates.length > 0 ? sanityCertificates : mockCertificates;
    } catch {
      projects = mockProjects;
      certificates = mockCertificates;
    }
  }

  const techStack = [
    "Git",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Tailwind",
    "Next.js",
    "React",
    "Sanity",
    "Java",
    "Spring",
    "Python",
    "Kotlin",
    "libGDX",
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 md:pt-12">
      <header className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
        <p className="text-sm uppercase tracking-[0.2em] text-gold">Portfolio 2026</p>
        <nav className="flex items-center gap-5 text-sm text-muted">
          <Link href="#sobre-mi" className="hover:text-gold">
            Sobre mi
          </Link>
          <Link href="#proyectos" className="hover:text-gold">
            Proyectos
          </Link>
          <Link href="#certificaciones" className="hover:text-gold">
            Certificaciones
          </Link>
          <Link href="#contacto" className="hover:text-gold">
            Contacto
          </Link>
          <Link href="/studio" className="hover:text-gold">
            CMS
          </Link>
        </nav>
      </header>

      <section className="mb-20 rounded-3xl border border-gold/20 bg-card/70 p-8 md:p-12">
        <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h1 className="text-4xl font-bold leading-tight text-foreground md:text-6xl">
              Hola, soy Ian Santiago Vila.
              <br />
              Desarrollador Backend & Fullstack.
            </h1>
            <p className="mt-5 max-w-3xl text-base text-muted md:text-lg">
              Escribo codigo claro, mantenible y escalable, con foco en buenas practicas,
              arquitectura y producto.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#proyectos"
                className="rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-black hover:bg-[#ffd700]"
              >
                Ver proyectos
              </Link>
              <Link
                href="#certificaciones"
                className="rounded-xl border border-gold/45 px-6 py-3 text-sm font-semibold text-gold hover:bg-gold hover:text-black"
              >
                Ver certificaciones
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-3xl border border-gold/35 bg-black/40 p-1.5 shadow-lg shadow-gold/10">
              <Image
                src={ianImage}
                alt="Ian Santiago Vila"
                priority
                className="h-auto w-full rounded-[22px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="mb-20">
        <h2 className="mb-4 text-3xl font-semibold text-foreground">Sobre mi y habilidades</h2>
        <p className="max-w-4xl text-muted">
          Soy estudiante de Ingenieria en Sistemas en la UTN y trabajo en desarrollo de software
          backend y fullstack con enfoque en Java, Spring, React y Next.js.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-2 rounded-full border border-gold/35 px-3 py-2 text-sm text-gold"
            >
              <TechIcon tech={tech} className="h-4 w-4" />
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section id="proyectos" className="mb-20">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold text-foreground">Proyectos</h2>
          <p className="text-sm text-muted">Gestionados desde Sanity CMS</p>
        </div>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project._id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>

      <section id="certificaciones" className="mb-20">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold text-foreground">Certificaciones</h2>
          <p className="text-sm text-muted">Tambien gestionadas desde Sanity CMS</p>
        </div>
        <ul className="grid gap-6 md:grid-cols-2">
          {certificates.map((certificate) => (
            <li key={certificate._id}>
              <CertificateCard certificate={certificate} />
            </li>
          ))}
        </ul>
      </section>

      <section id="contacto" className="rounded-3xl border border-gold/20 bg-card/70 p-8">
        <h2 className="mb-3 text-3xl font-semibold text-foreground">Contacto</h2>
        <p className="mb-6 text-muted">
          Si queres trabajar conmigo o conversar sobre una oportunidad, escribime por cualquiera de estos canales.
        </p>
        <div className="flex flex-wrap gap-3 text-sm font-medium">
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            className="rounded-lg border border-gold/45 px-4 py-2 text-gold hover:bg-gold hover:text-black"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            className="rounded-lg border border-gold/45 px-4 py-2 text-gold hover:bg-gold hover:text-black"
          >
            GitHub
          </Link>
          <Link
            href="mailto:iansantiago@gmail.com"
            className="rounded-lg bg-gold px-4 py-2 text-black hover:bg-[#ffd700]"
          >
            iansantiago@gmail.com
          </Link>
        </div>
      </section>
    </div>
  );
}
