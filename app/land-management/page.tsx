import { ConsultationSection } from "@/components/shared/consultation-section/ConsultationSection";
import { LandManagementUp } from "@/sections/land-management/land-management-1";
import { LandManagementTwo } from "@/sections/land-management/land-management-2";
import { LandManagementThree } from "@/sections/land-management/land-management-3";

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
