import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { HiOutlineChevronDown } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { SiFigma, SiGithub, SiMeta, SiSpring, SiWhatsapp } from "react-icons/si";

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
    "MySQL",
    "PHP",
    "C#",
    "C",
    "C++",
    "Laravel",
  ];

  return (
    <div className="mx-auto max-w-6xl px-3 pb-20 pt-2 sm:px-4 sm:pb-24 sm:pt-4 md:px-6 md:pt-8">
      <header className="sticky top-0 z-50 -mx-3 mb-8 border-b border-white/[0.08] bg-background/85 shadow-[0_10px_35px_-24px_rgba(0,0,0,0.9)] supports-[backdrop-filter]:bg-background/55 supports-[backdrop-filter]:backdrop-blur-xl motion-safe:animate-fade-up motion-safe:delay-75 sm:-mx-4 sm:mb-10 md:-mx-6">
        <div className="flex flex-col gap-3 px-3 py-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4 sm:px-4 sm:py-4 md:px-6">
          <span className="section-pill w-fit shrink-0 tracking-[0.18em]">Portfolio · 2026</span>
          <nav className="-mx-1 flex max-w-full flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted sm:gap-x-5 sm:text-sm">
            <Link href="#sobre-mi" className="nav-link hover:text-foreground">
              Sobre mi
            </Link>
            <Link href="#proyectos" className="nav-link hover:text-foreground">
              Proyectos
            </Link>
            <Link href="#certificaciones" className="nav-link hover:text-foreground">
              Certificaciones
            </Link>
            <Link href="#contacto" className="nav-link hover:text-foreground">
              Contacto
            </Link>
            <Link href="/studio" className="nav-link text-gold/80 hover:text-gold">
              CMS
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative mb-14 rounded-2xl border border-gold/20 bg-card/55 shadow-card shadow-glow motion-safe:animate-fade-up motion-safe:delay-100 sm:mb-20 sm:rounded-[28px]">
        <div className="relative overflow-hidden rounded-2xl p-5 sm:rounded-[28px] sm:p-8 md:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl bg-hero-shine opacity-90 sm:rounded-[28px]"
          />
          <div className="relative grid grid-cols-1 items-start gap-8 md:grid-cols-[1.35fr_1fr] md:items-center md:gap-10">
            <div className="min-w-0 text-left">
              <span className="section-pill mb-3 sm:mb-4">Ian Santiago Vila</span>
              <h1 className="text-[1.65rem] font-bold leading-[1.15] tracking-tight text-foreground sm:text-3xl sm:leading-[1.12] md:text-5xl md:leading-[1.1] lg:text-6xl">
                Hola, soy Ian.
                <br />
                <span className="hero-gradient-text mt-1 inline-block font-bold sm:mt-0.5">
                  Desarrollador Backend & Fullstack.
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-[0.9375rem] leading-relaxed text-muted sm:mt-6 sm:text-base md:mt-6 md:text-lg">
                Escribo codigo claro, mantenible y escalable, con foco en buenas practicas,
                arquitectura y producto.
              </p>
              <div className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
                <Link
                  href="#proyectos"
                  className="inline-flex w-full min-w-0 items-center justify-center rounded-xl bg-gold px-5 py-3 text-center text-sm font-semibold text-black shadow-md shadow-gold/20 hover:bg-[#e8c84a] sm:w-auto sm:px-6"
                >
                  Ver proyectos
                </Link>
                <Link
                  href="#certificaciones"
                  className="inline-flex w-full min-w-0 items-center justify-center rounded-xl border border-gold/40 bg-black/25 px-5 py-3 text-center text-sm font-semibold text-gold backdrop-blur-sm hover:border-gold/60 hover:bg-gold/10 sm:w-auto sm:px-6"
                >
                  Ver certificaciones
                </Link>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[280px] sm:max-w-sm">
              <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-b from-white/[0.08] to-transparent p-[4px] shadow-card sm:rounded-[26px] sm:p-[5px]">
                <div className="overflow-hidden rounded-[18px] bg-black/50 ring-1 ring-white/5 sm:rounded-[22px]">
                  <Image
                    src={ianImage}
                    alt="Ian Santiago Vila"
                    priority
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-6 flex justify-center border-t border-white/[0.06] pt-6 motion-safe:animate-fade-up motion-safe:delay-200 sm:mt-8 sm:pt-8">
            <a
              href="#sobre-mi"
              className="group flex flex-col items-center gap-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold/80 transition hover:text-gold"
              aria-label="Ir a sobre mí y habilidades"
            >
              <span>Sobre mí y habilidades</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-black/30 text-gold shadow-md backdrop-blur-sm transition group-hover:border-gold/65 group-hover:bg-gold/10 group-hover:shadow-glow">
                <HiOutlineChevronDown className="h-6 w-6 transition duration-300 group-hover:translate-y-1" aria-hidden />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section
        id="sobre-mi"
        className="mb-14 scroll-mt-24 motion-safe:animate-fade-up motion-safe:delay-150 sm:mb-20 sm:scroll-mt-28 md:scroll-mt-32"
      >
        <div className="relative overflow-hidden rounded-2xl border border-gold/20 bg-card/45 p-5 shadow-card sm:rounded-[28px] sm:p-8 md:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl bg-hero-shine opacity-50 sm:rounded-[28px]"
          />
          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:items-start lg:gap-x-12">
            <div className="min-w-0 text-left">
              <span className="section-pill mb-3">Perfil</span>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                Sobre mi y habilidades
              </h2>
              <div className="mt-6 space-y-4 text-pretty text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                <p>
                  Soy estudiante de Ingeniería en Sistemas en la UTN y me desempeño en desarrollo de software
                  backend y fullstack, con foco en Java, Spring, React y Next.js. Me interesa la arquitectura
                  clara, el código mantenible y entregar productos estables y fáciles de evolucionar.
                </p>
                <p>
                  Soy trabajador, me gusta liderar con ejemplo y soy autodidacta: aprendo lo que hace falta,
                  ordeno prioridades y comparto avances con el equipo para que el trabajo fluya con claridad.
                </p>
                <p>
                  En paralelo soy{" "}
                  <span className="font-medium text-foreground/95">especialista en marketing digital</span>:
                  mensaje y posicionamiento, contenidos, redes y campañas sencillas, siempre con mirada en
                  métricas y en alinear la comunicación con los objetivos del negocio.
                </p>
                <p className="text-sm text-muted/90">
                  Combino estas miradas para pasar de “solo funciona” a “se entiende, se usa y genera valor”.
                </p>
              </div>
            </div>
            <aside className="flex min-w-0 flex-col gap-3 sm:gap-4 lg:self-start">
              <div className="rounded-2xl border border-white/[0.1] bg-black/30 p-4 backdrop-blur-sm sm:p-5">
                <div className="flex flex-wrap items-center gap-2 text-gold">
                  <SiSpring className="h-5 w-5 shrink-0" aria-hidden />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em]">Ingeniería & código</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  APIs, dominios de negocio, integraciones y front con React / Next cuando hace falta.
                </p>
              </div>
              <div className="rounded-2xl border border-white/[0.1] bg-black/30 p-4 backdrop-blur-sm sm:p-5">
                <div className="flex flex-wrap items-center gap-2 text-gold">
                  <SiFigma className="h-5 w-5 shrink-0" aria-hidden />
                  <span className="min-w-0 text-xs font-semibold uppercase leading-snug tracking-[0.18em]">
                    Sistemas informáticos y diseño
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Especialista en sistemas informáticos y diseño: información ordenada, pantallas legibles y
                  una estética alineada al producto, sin perder de vista la experiencia de uso.
                </p>
              </div>
              <div className="rounded-2xl border border-white/[0.1] bg-black/30 p-4 backdrop-blur-sm sm:p-5">
                <div className="flex flex-wrap items-center gap-2 text-gold">
                  <SiMeta className="h-5 w-5 shrink-0" aria-hidden />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em]">Marketing digital</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Estrategia de contenido, voz de marca y presencia online coherente con el producto.
                </p>
              </div>
            </aside>
          </div>

          <div
            id="habilidades"
            className="relative mt-8 scroll-mt-24 border-t border-white/[0.08] pt-8 sm:mt-10 sm:scroll-mt-28 sm:pt-10 md:scroll-mt-32"
          >
            <div className="mb-6 flex w-full flex-col items-center text-center sm:mb-8">
              <span className="section-pill mb-3">Stack técnico</span>
              <p className="max-w-2xl text-sm leading-relaxed text-muted">
                Herramientas y lenguajes que uso en el día a día; la lista también se alinea con lo que publico
                en proyectos y certificaciones.
              </p>
            </div>
            <div className="mx-auto flex w-full max-w-5xl flex-wrap justify-center gap-2 sm:gap-3">
              {techStack.map((tech, index) => (
                <span
                  key={tech}
                  className="motion-safe:animate-fade-up inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-center text-[0.8125rem] text-foreground/90 shadow-sm backdrop-blur-sm transition hover:border-gold/35 hover:bg-gold/[0.06] sm:gap-2.5 sm:px-4 sm:py-2.5 sm:text-sm"
                  style={{ animationDelay: `${Math.min(index, 12) * 35 + 80}ms` }}
                >
                  <TechIcon tech={tech} className="h-4 w-4 shrink-0 text-gold" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="proyectos"
        className="mb-14 scroll-mt-24 motion-safe:animate-fade-up motion-safe:delay-200 sm:mb-20 sm:scroll-mt-28 md:scroll-mt-32"
      >
        <div className="mb-8 flex flex-col gap-2 text-left sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-pill mb-3">Trabajo</span>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Proyectos
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted">Gestionados desde Sanity CMS</p>
        </div>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project._id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>

      <section
        id="certificaciones"
        className="mb-14 scroll-mt-24 motion-safe:animate-fade-up motion-safe:delay-300 sm:mb-20 sm:scroll-mt-28 md:scroll-mt-32"
      >
        <div className="mb-8 flex flex-col gap-2 text-left sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-pill mb-3">Formación</span>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Certificaciones
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted">Tambien gestionadas desde Sanity CMS</p>
        </div>
        <ul className="grid gap-6 md:grid-cols-2">
          {certificates.map((certificate) => (
            <li key={certificate._id}>
              <CertificateCard certificate={certificate} />
            </li>
          ))}
        </ul>
      </section>

      <section
        id="contacto"
        className="relative scroll-mt-24 overflow-hidden rounded-2xl border border-gold/20 bg-card/55 p-5 shadow-card motion-safe:animate-fade-up motion-safe:delay-500 sm:scroll-mt-28 sm:rounded-[28px] sm:p-8 md:scroll-mt-32 md:p-10"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero-shine opacity-60" />
        <div className="relative grid gap-8 text-left sm:gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-start lg:gap-14">
          <div className="min-w-0">
            <span className="section-pill mb-3">Contacto</span>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Propuestas y consultas
            </h2>
            <p className="mt-4 max-w-xl text-muted leading-relaxed">
              Si querés comentar un proyecto, una colaboración o una posición laboral, podés escribirme por
              cualquiera de estos medios. Te respondo a la brevedad.
            </p>
            <p className="mt-6 text-sm text-muted/90">
              Disponibilidad para entornos híbridos o remotos · Buenos Aires, Argentina
            </p>
          </div>

          <div className="flex min-w-0 flex-col gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold/85">Canales directos</p>
            <Link
              href="https://www.linkedin.com/in/ian-vila-770019320/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[3.25rem] cursor-pointer items-center justify-between gap-3 rounded-xl border border-white/[0.1] bg-black/30 px-3 py-3 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm transition duration-200 ease-out hover:-translate-y-0.5 hover:border-gold/50 hover:bg-gold/[0.09] hover:shadow-md hover:shadow-gold/15 active:translate-y-0 active:scale-[0.99] sm:gap-4 sm:rounded-2xl sm:px-4 sm:py-3.5"
            >
              <span className="flex min-w-0 items-center gap-3">
                <FaLinkedin className="h-5 w-5 shrink-0 text-gold" aria-hidden />
                LinkedIn
              </span>
              <span className="text-xs text-muted transition group-hover:text-gold/90">Perfil →</span>
            </Link>
            <Link
              href="https://github.com/ian-svn"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[3.25rem] cursor-pointer items-center justify-between gap-3 rounded-xl border border-white/[0.1] bg-black/30 px-3 py-3 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm transition duration-200 ease-out hover:-translate-y-0.5 hover:border-gold/50 hover:bg-gold/[0.09] hover:shadow-md hover:shadow-gold/15 active:translate-y-0 active:scale-[0.99] sm:gap-4 sm:rounded-2xl sm:px-4 sm:py-3.5"
            >
              <span className="flex min-w-0 items-center gap-3">
                <SiGithub className="h-5 w-5 shrink-0 text-gold" aria-hidden />
                GitHub
              </span>
              <span className="text-xs text-muted transition group-hover:text-gold/90">@ian-svn →</span>
            </Link>
            <Link
              href="https://wa.me/5491125878688"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[3.25rem] cursor-pointer items-center justify-between gap-3 rounded-xl border border-white/[0.1] bg-black/30 px-3 py-3 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm transition duration-200 ease-out hover:-translate-y-0.5 hover:border-gold/50 hover:bg-gold/[0.09] hover:shadow-md hover:shadow-gold/15 active:translate-y-0 active:scale-[0.99] sm:gap-4 sm:rounded-2xl sm:px-4 sm:py-3.5"
            >
              <span className="flex min-w-0 items-center gap-3">
                <SiWhatsapp className="h-5 w-5 shrink-0 text-gold" aria-hidden />
                WhatsApp
              </span>
              <span className="text-xs text-muted transition group-hover:text-gold/90">11 2587-8688 →</span>
            </Link>
            <Link
              href="mailto:iansantiago.ian@gmail.com"
              className="group flex min-h-[3.25rem] cursor-pointer items-center justify-between gap-3 rounded-xl border border-gold/35 bg-gold/10 px-3 py-3 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm transition duration-200 ease-out hover:-translate-y-0.5 hover:border-gold/60 hover:bg-gold/15 hover:shadow-md hover:shadow-gold/20 active:translate-y-0 active:scale-[0.99] sm:gap-4 sm:rounded-2xl sm:px-4 sm:py-3.5"
            >
              <span className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3">
                <MdOutlineEmail className="h-5 w-5 shrink-0 text-gold" aria-hidden />
                Correo
              </span>
              <span className="min-w-0 truncate text-right text-[11px] text-muted transition group-hover:text-gold/90 sm:text-xs">
                iansantiago.ian@gmail.com
              </span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="mt-16 border-t border-white/[0.06] pt-8 text-center text-xs text-muted motion-safe:animate-fade-up motion-safe:delay-500">
        Ian Santiago Vila · {new Date().getFullYear()}
      </footer>
    </div>
  );
}
