import { ConsultationSection } from "@/components/shared/consultation-section/ConsultationSection";

export default function Page() {
  return (
    <>
      <ConsultationSection
        title={
          <>
            Нужна консультация <br />
            по сбору исходных <br />
            данных?
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
