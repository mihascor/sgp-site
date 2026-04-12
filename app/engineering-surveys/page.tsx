import { ConsultationSection } from "@/components/shared/consultation-section/ConsultationSection";
import { EngineeringSurveysUp } from "@/sections/engineering-surveys/engineering-surveys-up";
import { EngineeringSurveysOne } from "@/sections/engineering-surveys/engineering-surveys-one";
import { EngineeringSurveysTwo } from "@/sections/engineering-surveys/engineering-surveys-two";
import { EngineeringSurveysThree } from "@/sections/engineering-surveys/engineering-surveys-three";
import { EngineeringSurveysFour } from "@/sections/engineering-surveys/engineering-surveys-four";

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
