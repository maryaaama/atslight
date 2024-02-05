import {
  EventType,
  Gender,
  JobField,
  JobStatus,
  MilitaryStatus,
  PipelineStageType,
} from "./graphql/generated/graphql";

export const genderOptions = [
  { label: "نامشخص", value: "" },
  { label: "مرد", value: Gender.Male },
  { label: "زن", value: Gender.Female },
];

export const eventType = [
  { label: "روی  سایت", value: EventType.OnSite },
  { label: "تلفنی", value: EventType.Phone },
  { label: "حضوری", value: EventType.Meeting },
  { label: "آنلاین", value: EventType.Online },
];

export const today = new Date();

export const regexPhoneNumber = /^0[^0]\d{9}$/;
export const regexUrl =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi;

export enum JobApplicationStatus {
  ALL = "ALL",
  QUALIFIED = "",
  DISQUALIFIED = "DISQUALIFIED",
}

export const jobApplicationStatusOptions = [
  { label: "همه", value: JobApplicationStatus.ALL },
  { label: "واجد شرایط", value: JobApplicationStatus.QUALIFIED },
  { label: "رد صلاحیت شده", value: JobApplicationStatus.DISQUALIFIED },
];

export const jobApplicationStatusTypes = {
  [JobApplicationStatus.ALL]: "همه",
  [JobApplicationStatus.QUALIFIED]: "واجد شرایط",
  [JobApplicationStatus.DISQUALIFIED]: "رد صلاحیت شده",
};

export const jobStatusTypes = {
  [JobStatus.Draft]: "پیشنویس",
  [JobStatus.Archived]: "آرشیو شده",
  [JobStatus.PublishedInternal]: "منتشر شده (داخلی)",
  [JobStatus.Published]: "منتشر شده",
};

export const jobStatusFilters = [
  { label: "پیشنویس", value: JobStatus.Draft },
  { label: "آرشیو شده", value: JobStatus.Archived },
  { label: "منتشر شده (داخلی)", value: JobStatus.PublishedInternal },
  { label: "منتشر شده", value: JobStatus.Published },
];

export const genderFilters = [
  { label: "مرد", value: Gender.Male },
  { label: "زن", value: Gender.Female },
];

export const militaryStatusFilters = [
  {
    label: "پایان خدمت",
    value: MilitaryStatus.Completion,
  },
  {
    label: "معافیت دائم",
    value: MilitaryStatus.PermanentExemption,
  },
  {
    label: "معافیت پزشکی",
    value: MilitaryStatus.MedicalExemption,
  },
  {
    label: "معافیت تحصیلی",
    value: MilitaryStatus.EducationExemption,
  },
];

export const genderTypes = {
  [Gender.Male]: "مرد",
  [Gender.Female]: "زن",
  [Gender.Other]: "دیگر",
};

export const militaryStatusTypes = {
  [MilitaryStatus.Completion]: "پایان خدمت",
  [MilitaryStatus.EducationExemption]: "معافیت تحصیلی",
  [MilitaryStatus.MedicalExemption]: "معافیت پزشکی",
  [MilitaryStatus.PermanentExemption]: "معافیت دائم",
};

export const evaluationRatesOptions = [
  { label: "یک", value: "1" },
  { label: "دو", value: "2" },
  { label: "سه", value: "3" },
  { label: "چهار", value: "4" },
  { label: "پنچ", value: "5" },
];

export const evaluationRatesTypes = {
  1: "یک",
  2: "دو",
  3: "سه",
  4: "چهار",
  5: "پنج",
};

export const jobFieldTypes = {
  [JobField.Gender]: {
    title: "جنسیت",
    //   icon: ProfileMajorMonotone,
  },
  [JobField.MilitaryStatus]: {
    title: "وضعیت نظام وظیفه",
    //   icon: SecureMajorMonotone,
  },
  [JobField.Resume]: {
    //   icon: BuyButtonHorizontalLayoutMajorMonotone,
    title: "رزومه",
  },
  [JobField.CoverLetter]: {
    //   icon: EmailNewsletterMajorMonotone,
    title: "پیام",
  },
  [JobField.Birthday]: {
    //   icon: CalendarMajorMonotone,
    title: "تاریخ تولد",
  },
  [JobField.Address]: {
    //   icon: LocationMajorMonotone,
    title: "آدرس",
  },
};

export const pipelineStagesTypes = {
  [PipelineStageType.None]: {
    title: "پیشفرض",
    color: "#ffffff",
  },
  [PipelineStageType.Apply]: {
    title: "درخواست اولیه",
    color: "#8aa2ad",
  },
  [PipelineStageType.PhoneScreen]: {
    title: "مصاحبه تلفنی",
    color: "#a0d6f5",
  },
  [PipelineStageType.Interview]: {
    title: "مصاحبه حضوری",
    color: "#1999e3",
  },
  [PipelineStageType.Evaluation]: {
    title: "ارزیابی",
    color: "#0c6090",
  },
  [PipelineStageType.Offer]: {
    title: "پیشنهاد",
    color: "#9de000",
  },
  [PipelineStageType.Hire]: {
    title: "استخدام شده",
    color: "#4fc510",
  },
};
