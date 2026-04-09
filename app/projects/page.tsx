import { ConsultationSection } from "@/components/shared/consultation-section/ConsultationSection";

export default function Page() {
  return (
    <>
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
