import { ConsultationSection } from "@/components/shared/consultation-section/ConsultationSection";
import { EngineeringSurveysUp } from "@/sections/engineering-surveys/engineering-surveys-1";
import { EngineeringSurveysOne } from "@/sections/engineering-surveys/engineering-surveys-2";
import { EngineeringSurveysTwo } from "@/sections/engineering-surveys/engineering-surveys-3";
import { EngineeringSurveysThree } from "@/sections/engineering-surveys/engineering-surveys-4";
import { EngineeringSurveysFour } from "@/sections/engineering-surveys/engineering-surveys-5";

export default function Page() {
  return (
    <>
      <EngineeringSurveysUp />
      <EngineeringSurveysOne />
      <EngineeringSurveysTwo />
      <EngineeringSurveysThree />
      <EngineeringSurveysFour />
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
