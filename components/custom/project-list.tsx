import { ProjectDetails } from "@/types/project"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "../ui/card"

function ProjectCard({project} : {project: ProjectDetails}) {
  return (
    <Card className="w-full h-16  px-4">
      <p>{project.title}</p>
    </Card>
  )
}

export default function ProjectList({
  projects,
  className
}: {
  projects: ProjectDetails[];
  className?: string;
}) {
  return (
    <ScrollArea className={className}>
      {projects.map((value: ProjectDetails, index: number) => (
        <ProjectCard project={value}/>
      ))}
    </ScrollArea>
  )
}