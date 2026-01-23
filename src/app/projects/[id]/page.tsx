import ProjectDetails from "@/components/projects/Details";

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
}
