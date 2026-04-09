import { ConsultationSection } from "@/components/shared/consultation-section/ConsultationSection";

export default function Page() {
  return (
    <>
      <ConsultationSection
        title={
          <>
            Нужны инженерные <br />
            изыскания?
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
