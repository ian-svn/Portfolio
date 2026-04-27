import type { SanityImageSource } from "@sanity/image-url";
import { groq } from "next-sanity";

export type Project = {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: SanityImageSource;
  description?: string | null;
  technologies?: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export type Certificate = {
  _id: string;
  title: string;
  issuer: string;
  issuerLogo?: SanityImageSource;
  issueDate?: string;
  description?: string;
  credentialPdfUrl?: string;
  credentialUrl?: string;
  skills?: string[];
};

export const PROJECTS_QUERY = groq`
  *[_type == "project" && defined(slug.current)] | order(_createdAt desc) {
    _id,
    title,
    slug,
    mainImage,
    description,
    technologies,
    githubUrl,
    liveUrl
  }
`;

export const CERTIFICATES_QUERY = groq`
  *[_type == "certificate"] | order(issueDate desc, _createdAt desc) {
    _id,
    title,
    issuer,
    issuerLogo,
    issueDate,
    description,
    "credentialPdfUrl": select(
      defined(credentialFile.asset->url) => credentialFile.asset->url,
      credentialUrl
    ),
    credentialUrl,
    skills
  }
`;
