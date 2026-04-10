import { ConsultationSection } from "@/components/shared/consultation-section/ConsultationSection";
import { LandManagementUp } from "@/sections/land-management/land-management-up";
import { LandManagementTwo } from "@/sections/land-management/land-management-two";
import { LandManagementThree } from "@/sections/land-management/land-management-three";

export default function Page() {
  return (
    <>
      <LandManagementUp />
      <LandManagementTwo />
      <LandManagementThree />
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
