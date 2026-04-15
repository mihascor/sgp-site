import { ConsultationSection } from "@/components/shared/consultation-section/ConsultationSection";
import { DesignUp } from "@/sections/design/design-1";
import { DesignDown } from "@/sections/design/design-2";

export default function Page() {
  return (
    <>
      <DesignUp />
      <DesignDown />
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
