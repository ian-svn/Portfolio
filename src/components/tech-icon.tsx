import type { ComponentType } from "react";
import {
  SiCss,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiSanity,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { GiJoystick } from "react-icons/gi";

type Props = {
  tech: string;
  className?: string;
};

const iconByTech: Record<string, ComponentType<{ className?: string }>> = {
  Git: SiGit,
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Tailwind: SiTailwindcss,
  "Next.js": SiNextdotjs,
  React: SiReact,
  Sanity: SiSanity,
  Java: FaJava,
  Spring: SiSpring,
  Python: SiPython,
  Kotlin: SiKotlin,
  libGDX: GiJoystick,
};

export function TechIcon({ tech, className = "h-4 w-4" }: Props) {
  const Icon = iconByTech[tech] ?? null;
  if (!Icon) return null;
  return <Icon className={className} />;
}
