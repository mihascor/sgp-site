import { ConsultationSection } from "@/components/shared/consultation-section/ConsultationSection";

export default function Page() {
  return (
    <>
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
