import { ConsultationSection } from "@/components/shared/consultation-section/ConsultationSection";
import { ProjectsUp } from "@/sections/projects/projects-up";
import { ProjectsDown } from "@/sections/projects/projects-down";

export default function Page() {
  return (
    <>
      <ProjectsUp />
      <ProjectsDown />
      <ConsultationSection
        title={
          <>
            Готовы реализовать <br />
            ваш проект?
          </>
        }
        description={
          <>
            Свяжитесь с нами для обсуждения вашего <br />
            проекта по комплексу инженерно- <br />
            технических средств охраны
          </>
        }
      />
    </>
  );
}
