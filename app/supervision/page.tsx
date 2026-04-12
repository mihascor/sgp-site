import { ConsultationSection } from "@/components/shared/consultation-section/ConsultationSection";
import { SupervisionUp } from "@/sections/supervision/supervision-up";
import { SupervisionDown } from "@/sections/supervision/supervision-down";

export default function Page() {
  return (
    <>
      <SupervisionUp />
      <SupervisionDown />
      <ConsultationSection
        title={
          <>
            НУЖНЫ <br />
            КОМПЛЕКСНЫЕ РЕШЕНИЯ <br />
            ПО БЕЗОПАСНОСТИ?
          </>
        }
        description={
          <>
            Свяжитесь с нашими специалистами <br />
            для обсуждения вашего проекта
          </>
        }
      />
    </>
  );
}
