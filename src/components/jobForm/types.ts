import {
    Gender,
    GradeCondition,
    JobStatus,
    JobQuestionnairesJobIdFkeyInverseInput,
    Language,
    JobTranslationsJobIdFkeyInverseInput,
    JobEducation,
    JobOwnersJobIdFkeyInverseInput,
    JobFieldsJobIdFkeyInverseInput
  } from "../../graphql/generated/graphql";
  type AgeCondition = [number, number];
  
  export interface FormValues {
    status: JobStatus;
    departmentId: number | null;
    isRemote: boolean | null;
    address: string | null;
    country: number | null;
    state: number | null;
    city: string | null;
    education: JobEducation | null;  
    position: number;
    pipelineId: number | null;
    languages: Language[];  
    translations: JobTranslationsJobIdFkeyInverseInput[] | null;  
    tags: string[]; 
    owners: JobOwnersJobIdFkeyInverseInput[] | null; 
    fields: JobFieldsJobIdFkeyInverseInput[] | null;  
    jobQuestionnaires: JobQuestionnairesJobIdFkeyInverseInput[] | null; 
    workExperienceCondition: number | null;  
    ageCondition: AgeCondition | null;
    gradeConditions: (GradeCondition | null)[] | null;  
    knowledges: string[];  
    skills: string[];  
    competencies: string[]; 
    genders: (Gender | null)[] | null;  
  }