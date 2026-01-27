import ProjectDetails from "@/components/projects/Details";
import { Metadata } from "next";

export async function generateStaticParams() {
    return [
        { id: "1" },
        { id: "2" },
        { id: "3" },
    ];
}

type Props = {
    params: Promise<{ id: string }>
}

export default async function ProjectPage({ params }: Props) {
    const { id } = await params;

    return <ProjectDetails id={id} />;
};

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Browse featured projects and products built by Kerolos Khairy using React, Next.js, and modern frontend technologies.',

  alternates: {
    canonical: '/products',
  },

  openGraph: {
    title: 'Products | Kerolos Khairy',
    description:
      'Explore frontend projects and products built with React, Next.js, and TypeScript.',
    url: '/products',
  },

  twitter: {
    title: 'Products | Kerolos Khairy',
    description:
      'Explore frontend projects and products built with React, Next.js, and TypeScript.',
  },
};

