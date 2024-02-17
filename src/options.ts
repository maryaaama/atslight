import {
  Gender,
  Language,
  MilitaryStatus,
  PipelineStageType,
  JobField,
  CompanyCategory,
  CompanySize,
  JobStatus,
  InvoiceStatus,
  EventType,
} from "./graphql/generated/graphql";

export const genderOptions = [
  { label: "نامشخص", value: "" },
  { label: "مرد", value: Gender.Male },
  { label: "زن", value: Gender.Female },
];

export const languageOptions = [
  { label: "فارسی", value: Language.Fa },
  { label: "انگلیسی", value: Language.En },
  { label: "عربی", value: Language.Ar },
  { label: "ترکی", value: Language.Tr },
  { label: "کردی", value: Language.Ku },
];

export const militeryStatusOptions = [
  {
    label: "نامشخص",
    value: "",
  },
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

export const jobFieldTypes = {
  [JobField.Gender]: {
    title: "جنسیت",
    //icon: ProfileMajorMonotone,
  },
  [JobField.MilitaryStatus]: {
    title: "وضعیت نظام وظیفه",
    //icon: SecureMajorMonotone,
  },
  [JobField.Resume]: {
    //icon: BuyButtonHorizontalLayoutMajorMonotone,
    title: "رزومه",
  },
  [JobField.CoverLetter]: {
    //icon: EmailNewsletterMajorMonotone,
    title: "پیام",
  },
  [JobField.Birthday]: {
    //icon: CalendarMajorMonotone,
    title: "تاریخ تولد",
  },
  [JobField.Address]: {
    //icon: LocationMajorMonotone,
    title: "آدرس",
  },
};

export const states = {
  1: {
    title: "آذربایجان شرقی",
  },
  2: {
    title: "آذربایجان غربی",
  },
  3: {
    title: "اردبیل",
  },
  4: {
    title: "اصفهان",
  },
  32: {
    title: "البرز",
  },
  6: {
    title: "ایلام",
  },
  8: {
    title: "بوشهر",
  },
  7: {
    title: "تهران",
  },
  9: {
    title: "چهارمحال وبختیاری",
  },
  10: {
    title: "خراسان جنوبی",
  },
  11: {
    title: "خراسان رضوی",
  },
  12: {
    title: "خراسان شمالی",
  },
  13: {
    title: "خوزستان",
  },
  14: {
    title: "زنجان",
  },
  15: {
    title: "سمنان",
  },
  16: {
    title: "سیستان وبلوچستان",
  },
  17: {
    title: "فارس",
  },
  18: {
    title: "قزوین",
  },
  19: {
    title: "قم",
  },
  20: {
    title: "کردستان",
  },
  21: {
    title: "کرمان",
  },
  22: {
    title: "کرمانشاه",
  },
  23: {
    title: "کهگیلویه وبویراحمد",
  },
  24: {
    title: "گلستان",
  },
  25: {
    title: "گیلان",
  },
  26: {
    title: "لرستان",
  },
  27: {
    title: "مازندران",
  },
  28: {
    title: "مرکزی",
  },
  29: {
    title: "هرمزگان",
  },
  30: {
    title: "همدان",
  },
  31: {
    title: "یزد",
  },
};

export const cities = {
  "1": [
    "آذرشهر",
    "اسکو",
    "اهر",
    "بستان آباد",
    "بناب",
    "تبریز",
    "جلفا",
    "چاراویماق",
    "خداآفرین",
    "سراب",
    "شبستر",
    "عجب شیر",
    "کلیبر",
    "مراغه",
    "مرند",
    "ملکان",
    "میانه",
    "ورزقان",
    "هریس",
    "هشترود",
    "هوراند",
  ],
  "2": [
    "ارومیه",
    "اشنویه",
    "بوکان",
    "پلدشت",
    "پیرانشهر",
    "تکاب",
    "چالدران",
    "چایپاره",
    "خوی",
    "سردشت",
    "سلماس",
    "شاهین دژ",
    "شوط",
    "ماکو",
    "مهاباد",
    "میاندوآب",
    "نقده",
  ],
  "3": [
    "اردبیل",
    "اصلاندوز",
    "بیله سوار",
    "پارس آباد",
    "خلخال",
    "سرعین",
    "کوثر",
    "گرمی",
    "مشگین شهر",
    "نمین",
    "نیر",
  ],
  "4": [
    "آران وبیدگل",
    "اردستان",
    "اصفهان",
    "برخوار",
    "بو یین و میاندشت",
    "تیران وکرون",
    "چادگان",
    "خمینی شهر",
    "خوانسار",
    "خور و بیابانک",
    "دهاقان",
    "سمیرم",
    "شاهین شهرومیمه",
    "شهرضا",
    "فریدن",
    "فریدونشهر",
    "فلاورجان",
    "کاشان",
    "گلپایگان",
    "لنجان",
    "مبارکه",
    "نایین",
    "نجف آباد",
    "نطنز",
  ],
  "32": [
    "آسارا",
    "اشتهارد",
    "تنکمان",
    "چهارباغ",
    "شهر جدید هشتگرد",
    "طالقان",
    "فردیس",
    "کرج",
    "کمال شهر",
    "کوهسار",
    "گرمدره",
    "گلسار",
    "ماهدشت",
    "محمد شهر",
    "مشکین دشت",
    "نظر آباد",
    "هشتگرد",
  ],
  "6": [
    "آبدانان",
    "ایلام",
    "ایوان",
    "بدره",
    "چرداول",
    "دره شهر",
    "دهلران",
    "سیروان",
    "ملکشاهی",
    "مهران",
    "هلیلان",
  ],
  "8": [
    "بوشهر",
    "تنگستان",
    "جم",
    "دشتستان",
    "دشتی",
    "دیر",
    "دیلم",
    "عسلویه",
    "کنگان",
    "گناوه",
  ],
  "7": [
    "آبسرد",
    "آبعلی",
    "ارجمند",
    "اسلامشهر",
    "اندیشه",
    "باغستان",
    "باقرشهر",
    "بومهن",
    "پاکدشت",
    "پردیس",
    "پیشوا",
    "تجریش",
    "تهران",
    "جواد آباد",
    "چهاردانگه",
    "حسن آباد",
    "دماوند",
    "رباط کریم",
    "رودهن",
    "ری",
    "شاهدشهر",
    "شریف آباد",
    "شمشک",
    "شهر جدید پرند",
    "شهریار",
    "صالحیه",
    "صبا شهر",
    "صفادشت",
    "فردوسیه",
    "فرون آباد",
    "فشم",
    "فیروزکوه",
    "قدس",
    "قرچک",
    "کهریزک",
    "کیلان",
    "گلستان",
    "لواسان",
    "ملارد",
    "نسیم شهر",
    "نصیرشهر",
    "وحیدیه",
    "ورامین",
  ],
  "9": [
    "اردل",
    "بروجن",
    "بن",
    "خانمیرزا",
    "سامان",
    "شهرکرد",
    "فارسان",
    "کوهرنگ",
    "کیار",
    "لردگان",
  ],
  "10": [
    "بشرویه",
    "بیرجند",
    "خوسف",
    "درمیان",
    "زیرکوه",
    "سرایان",
    "سربیشه",
    "طبس",
    "فردوس",
    "قاینات",
    "نهبندان",
  ],
  "11": [
    "باخرز",
    "بجستان",
    "بردسکن",
    "بینالود",
    "تایباد",
    "تربت جام",
    "تربت حیدریه",
    "جغتای",
    "جوین",
    "چناران",
    "خلیل آباد",
    "خواف",
    "خوشاب",
    "داورزن",
    "درگز",
    "رشتخوار",
    "زاوه",
    "سبزوار",
    "سرخس",
    "صالح آباد",
    "فریمان",
    "فیروزه",
    "قوچان",
    "کاشمر",
    "کلات",
    "کوهسرخ",
    "گناباد",
    "مشهد",
    "مه ولات",
    "نیشابور",
  ],
  "12": [
    "اسفراین",
    "بجنورد",
    "جاجرم",
    "راز و جرگلان",
    "شیروان",
    "فاروج",
    "گرمه",
    "مانه وسملقان",
  ],
  "13": [
    "آبادان",
    "آغاجاری",
    "امیدیه",
    "اندیکا",
    "اندیمشک",
    "اهواز",
    "ایذه",
    "باغ ملک",
    "باوی",
    "بندرماهشهر",
    "بهبهان",
    "حمیدیه",
    "خرمشهر",
    "دزفول",
    "دشت آزادگان",
    "رامشیر",
    "رامهرمز",
    "شادگان",
    "شوش",
    "شوشتر",
    "کارون",
    "گتوند",
    "لالی",
    "مسجدسلیمان",
    "هفتکل",
    "هندیجان",
    "هویزه",
  ],
  "14": [
    "ابهر",
    "ایجرود",
    "خدابنده",
    "خرمدره",
    "زنجان",
    "سلطانیه",
    "طارم",
    "ماهنشان",
  ],
  "15": [
    "آرادان",
    "دامغان",
    "سرخه",
    "سمنان",
    "شاهرود",
    "گرمسار",
    "مهدی شهر",
    "میامی",
  ],
  "16": [
    "ایرانشهر",
    "بمپور",
    "تفتان",
    "چاه بهار",
    "خاش",
    "دشتیاری",
    "دلگان",
    "راسک",
    "زابل",
    "زاهدان",
    "زهک",
    "سراوان",
    "سرباز",
    "سیب و سوران",
    "فنوج",
    "قصرقند",
    "کنارک",
    "مهرستان",
    "میرجاوه",
    "نیک شهر",
    "نیمروز",
    "هامون",
    "هیرمند",
  ],
  "17": [
    "آباده",
    "ارسنجان",
    "استهبان",
    "اقلید",
    "اوز",
    "بختگان",
    "بوانات",
    "بیضا",
    "پاسارگاد",
    "جهرم",
    "خرامه",
    "خرم بید",
    "خفر",
    "خنج",
    "داراب",
    "رستم",
    "زرقان",
    "زرین دشت",
    "سپیدان",
    "سرچهان",
    "سروستان",
    "شیراز",
    "فراشبند",
    "فسا",
    "فیروزآباد",
    "قیروکارزین",
    "کازرون",
    "کوار",
    "کوه چنار",
    "گراش",
    "لارستان",
    "لامرد",
    "مرودشت",
    "ممسنی",
    "مهر",
    "نی ریز",
  ],
  "18": ["آبیک", "آوج", "البرز", "بویین زهرا", "تاکستان", "قزوین"],
  "19": ["قم"],
  "20": [
    "بانه",
    "بیجار",
    "دهگلان",
    "دیواندره",
    "سروآباد",
    "سقز",
    "سنندج",
    "قروه",
    "کامیاران",
    "مریوان",
  ],
  "21": [
    "ارزوییه",
    "انار",
    "بافت",
    "بردسیر",
    "بم",
    "جیرفت",
    "رابر",
    "راور",
    "رفسنجان",
    "رودبارجنوب",
    "ریگان",
    "زرند",
    "سیرجان",
    "شهربابک",
    "عنبرآباد",
    "فاریاب",
    "فهرج",
    "قلعه گنج",
    "کرمان",
    "کوهبنان",
    "کهنوج",
    "منوجان",
    "نرماشیر",
  ],
  "22": [
    "اسلام آبادغرب",
    "پاوه",
    "ثلاث باباجانی",
    "جوانرود",
    "دالاهو",
    "روانسر",
    "سرپل ذهاب",
    "سنقر",
    "صحنه",
    "قصرشیرین",
    "کرمانشاه",
    "کنگاور",
    "گیلانغرب",
    "هرسین",
  ],
  "23": [
    "باشت",
    "بویراحمد",
    "بهمیی",
    "چرام",
    "دنا",
    "کهگیلویه",
    "گچساران",
    "لنده",
    "مارگون",
  ],
  "24": [
    "آزادشهر",
    "آق قلا",
    "بندرگز",
    "ترکمن",
    "رامیان",
    "علی آباد کتول",
    "کردکوی",
    "کلاله",
    "گالیکش",
    "گرگان",
    "گمیشان",
    "گنبدکاووس",
    "مراوه تپه",
    "مینودشت",
  ],
  "25": [
    "آستارا",
    "آستانه اشرفیه",
    "املش",
    "بندرانزلی",
    "رشت",
    "رضوانشهر",
    "رودبار",
    "رودسر",
    "سیاهکل",
    "شفت",
    "صومعه سرا",
    "طوالش",
    "فومن",
    "لاهیجان",
    "لنگرود",
    "ماسال",
  ],
  "26": [
    "ازنا",
    "الیگودرز",
    "بروجرد",
    "پلدختر",
    "چگنی",
    "خرم آباد",
    "دلفان",
    "دورود",
    "رومشکان",
    "سلسله",
    "کوهدشت",
  ],
  "27": [
    "آمل",
    "بابل",
    "بابلسر",
    "بهشهر",
    "تنکابن",
    "جویبار",
    "چالوس",
    "رامسر",
    "ساری",
    "سوادکوه",
    "سوادکوه شمالی",
    "سیمرغ",
    "عباس آباد",
    "فریدونکنار",
    "قایم شهر",
    "کلاردشت",
    "گلوگاه",
    "محمودآباد",
    "میاندورود",
    "نکا",
    "نور",
    "نوشهر",
  ],
  "28": [
    "آشتیان",
    "اراک",
    "تفرش",
    "خمین",
    "خنداب",
    "دلیجان",
    "زرندیه",
    "ساوه",
    "شازند",
    "فراهان",
    "کمیجان",
    "محلات",
  ],
  "29": [
    "ابوموسی",
    "بستک",
    "بشاگرد",
    "بندرعباس",
    "بندرلنگه",
    "پارسیان",
    "جاسک",
    "حاجی اباد",
    "خمیر",
    "رودان",
    "سیریک",
    "قشم",
    "میناب",
  ],
  "30": [
    "اسدآباد",
    "بهار",
    "تویسرکان",
    "درگزین",
    "رزن",
    "فامنین",
    "کبودرآهنگ",
    "ملایر",
    "نهاوند",
    "همدان",
  ],
  "31": [
    "ابرکوه",
    "اردکان",
    "اشکذر",
    "بافق",
    "بهاباد",
    "تفت",
    "خاتم",
    "مهریز",
    "میبد",
    "یزد",
  ],
};

export const cityStates = [
  {
    value: "7",
    label: "تهران",
  },
  {
    value: "1",
    label: "آذربایجان شرقی",
  },
  {
    value: "2",
    label: "آذربایجان غربی",
  },
  {
    value: "3",
    label: "اردبیل",
  },
  {
    value: "4",
    label: "اصفهان",
  },
  {
    value: "32",
    label: "البرز",
  },
  {
    value: "6",
    label: "ایلام",
  },
  {
    value: "8",
    label: "بوشهر",
  },

  {
    value: "9",
    label: "چهارمحال وبختیاری",
  },
  {
    value: "10",
    label: "خراسان جنوبی",
  },
  {
    value: "11",
    label: "خراسان رضوی",
  },
  {
    value: "12",
    label: "خراسان شمالی",
  },
  {
    value: "13",
    label: "خوزستان",
  },
  {
    value: "14",
    label: "زنجان",
  },
  {
    value: "15",
    label: "سمنان",
  },
  {
    value: "16",
    label: "سیستان وبلوچستان",
  },
  {
    value: "17",
    label: "فارس",
  },
  {
    value: "18",
    label: "قزوین",
  },
  {
    value: "19",
    label: "قم",
  },
  {
    value: "20",
    label: "کردستان",
  },
  {
    value: "21",
    label: "کرمان",
  },
  {
    value: "22",
    label: "کرمانشاه",
  },
  {
    value: "23",
    label: "کهگیلویه وبویراحمد",
  },
  {
    value: "24",
    label: "گلستان",
  },
  {
    value: "25",
    label: "گیلان",
  },
  {
    value: "26",
    label: "لرستان",
  },
  {
    value: "27",
    label: "مازندران",
  },
  {
    value: "28",
    label: "مرکزی",
  },
  {
    value: "29",
    label: "هرمزگان",
  },
  {
    value: "30",
    label: "همدان",
  },
  {
    value: "31",
    label: "یزد",
  },
];

export const countries = [
  { value: "364", label: "ایران" },
  // { value: '368', label: 'عراق' },
];

export const companyCategoryOptions = [
  { label: "خرده فروش", value: CompanyCategory.Retailer },
  { label: "عمده فروش", value: CompanyCategory.Reseller },
  { label: "نمایندگی فروش", value: CompanyCategory.SalesRepresentative },
  { label: "آموزشی", value: CompanyCategory.Educational },
  { label: "خدمات", value: CompanyCategory.Services },
  { label: "تولید کننده", value: CompanyCategory.Producer },
  { label: "صنعتی و فنی", value: CompanyCategory.IndustrialAndTechnical },
  { label: "دیگر", value: CompanyCategory.Other },
];

export const companySizeOptions = [
  { label: "۱ تا ۱۰ نفر", value: CompanySize["1To_10"] },
  { label: "۱۱ تا ۵۰ نفر", value: CompanySize["11To_50"] },
  { label: "۵۰ تا ۲۰۰ نفر", value: CompanySize["51To_200"] },
  { label: "بیشتر از ۲۰۰ نفر", value: CompanySize.MoreThan_200 },
];

export const CompanyCategoryTypes = {
  [CompanyCategory.Retailer]: "خرده فروش",
  [CompanyCategory.Reseller]: "عمده فروش",
  [CompanyCategory.SalesRepresentative]: "نمایندگی فروش",
  [CompanyCategory.Educational]: "آموزشی",
  [CompanyCategory.Services]: "خدمات",
  [CompanyCategory.Producer]: "تولید کننده",
  [CompanyCategory.IndustrialAndTechnical]: "صنعتی و فنی",
  [CompanyCategory.Other]: "دیگر",
};

export const companySizeTypes = {
  [CompanySize["1To_10"]]: "۱ تا ۱۰ نفر",
  [CompanySize["11To_50"]]: "۱۱ تا ۵۰ نفر",
  [CompanySize["51To_200"]]: "۵۰ تا ۲۰۰ نفر",
  [CompanySize.MoreThan_200]: "بیشتر از ۲۰۰ نفر",
};

export const languageTypes = {
  [Language.Fa]: {
    title: "فارسی",
    topBarTitle: "فارسی",
    logoutTitle: "خروج",
    jobBoardTitle: "جاب‌بورد",
  },
  [Language.En]: {
    title: "انگلیسی",
    topBarTitle: "English",
    logoutTitle: "Logout",
    jobBoardTitle: "Job Board",
  },
  [Language.Ar]: {
    title: "عربی",
    topBarTitle: "العربیة",
    logoutTitle: "تسجیل‌الخروج",
    jobBoardTitle: "لوحةالعمل",
  },
  [Language.Ku]: {
    title: "کردی",
    topBarTitle: "Kurdî",
    logoutTitle: "Derkeve",
    jobBoardTitle: "Desteya Kar",
  },
  [Language.Tr]: {
    title: "ترکی",
    topBarTitle: "Türkçe",
    logoutTitle: "Çıkış Yap",
    jobBoardTitle: "İş Panosu",
  },
};

export const jobStatusTypes = {
  [JobStatus.Draft]: "پیشنویس",
  [JobStatus.Archived]: "آرشیو شده",
  [JobStatus.PublishedInternal]: "منتشر شده (داخلی)",
  [JobStatus.Published]: "منتشر شده",
};

export const invoiceStatusTypes = {
  [InvoiceStatus.Paid]: "فعال",
  [InvoiceStatus.Expired]: "منقضی شده",
  [InvoiceStatus.New]: "-",
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

export const eventDuration = [
  {
    label: "نا‌مشخص",
    value: "",
  },
  {
    label: "5 دقیقه",
    value: "5",
  },
  {
    label: "10 دقیقه",
    value: "10",
  },
  {
    label: "15 دقیقه",
    value: "15",
  },
  {
    label: "20 دقیقه",
    value: "20",
  },
  {
    label: "25 دقیقه",
    value: "25",
  },
  {
    label: "30 دقیقه",
    value: "30",
  },
  {
    label: "35 دقیقه",
    value: "35",
  },
  {
    label: "40 دقیقه",
    value: "40",
  },
  {
    label: "45 دقیقه",
    value: "45",
  },
  {
    label: "50 دقیقه",
    value: "50",
  },
  {
    label: "55 دقیقه",
    value: "55",
  },
  {
    label: "60 دقیقه",
    value: "60",
  },
  {
    label: "65 دقیقه",
    value: "65",
  },
  {
    label: "70 دقیقه",
    value: "70",
  },
  {
    label: "75 دقیقه",
    value: "75",
  },
  {
    label: "80 دقیقه",
    value: "80",
  },
  {
    label: "85 دقیقه",
    value: "85",
  },
  {
    label: "90 دقیقه",
    value: "90",
  },
  {
    label: "95 دقیقه",
    value: "95",
  },
  {
    label: "100 دقیقه",
    value: "100",
  },
  {
    label: "105 دقیقه",
    value: "105",
  },
  {
    label: "110 دقیقه",
    value: "110",
  },
  {
    label: "115 دقیقه",
    value: "115",
  },
  {
    label: "120 دقیقه",
    value: "120",
  },
  {
    label: "125 دقیقه",
    value: "125",
  },
  {
    label: "130 دقیقه",
    value: "130",
  },
  {
    label: "135 دقیقه",
    value: "135",
  },
  {
    label: "140 دقیقه",
    value: "140",
  },
  {
    label: "145 دقیقه",
    value: "145",
  },
  {
    label: "150 دقیقه",
    value: "150",
  },
  {
    label: "155 دقیقه",
    value: "155",
  },
  {
    label: "160 دقیقه",
    value: "160",
  },
  {
    label: "165 دقیقه",
    value: "165",
  },
  {
    label: "170 دقیقه",
    value: "170",
  },
  {
    label: "175 دقیقه",
    value: "175",
  },
  {
    label: "180 دقیقه",
    value: "180",
  },
  {
    label: "185 دقیقه",
    value: "185",
  },
  {
    label: "190 دقیقه",
    value: "190",
  },
  {
    label: "195 دقیقه",
    value: "195",
  },
  {
    label: "200 دقیقه",
    value: "200",
  },
  {
    label: "205 دقیقه",
    value: "205",
  },
  {
    label: "210 دقیقه",
    value: "210",
  },
  {
    label: "215 دقیقه",
    value: "215",
  },
  {
    label: "220 دقیقه",
    value: "220",
  },
  {
    label: "225 دقیقه",
    value: "225",
  },
  {
    label: "230 دقیقه",
    value: "230",
  },
  {
    label: "235 دقیقه",
    value: "235",
  },
  {
    label: "240 دقیقه",
    value: "240",
  },
  {
    label: "245 دقیقه",
    value: "245",
  },
  {
    label: "250 دقیقه",
    value: "250",
  },
  {
    label: "255 دقیقه",
    value: "255",
  },
  {
    label: "260 دقیقه",
    value: "260",
  },
  {
    label: "265 دقیقه",
    value: "265",
  },
  {
    label: "270 دقیقه",
    value: "270",
  },
  {
    label: "275 دقیقه",
    value: "275",
  },
  {
    label: "280 دقیقه",
    value: "280",
  },
  {
    label: "285 دقیقه",
    value: "285",
  },
  {
    label: "290 دقیقه",
    value: "290",
  },
  {
    label: "295 دقیقه",
    value: "295",
  },
  {
    label: "300 دقیقه",
    value: "300",
  },
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
