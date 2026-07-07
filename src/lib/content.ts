/*
  Centralized content for BridgeEd Ghana — Option B.
  Copy preserved from the existing site; only the visual language changes.
*/

export const site = {
  name: "BridgeEd Ghana",
  fullName: "BridgeEd Ghana Foundation",
  tagline: "Bridging Access. Unlocking Potential.",
  description:
    "We connect underserved students in Ghana to education, technology, and opportunity through internet-equipped learning hubs.",
  email: "hello@bridgeedghana.org", // TODO: replace with the foundation's real email
  phone: "+233 00 000 0000", // TODO: replace with the foundation's real number
};

export const routes = {
  home: "/",
  about: "/about",
  programs: "/programs",
  schools: "/schools",
  partner: "/partner",
  contact: "/contact",
  donate: "/donate",
} as const;

export const nav = [
  { label: "About", href: routes.about },
  { label: "Programs", href: routes.programs },
  { label: "Pilot Schools", href: routes.schools },
  { label: "Partner", href: routes.partner },
  { label: "Contact", href: routes.contact },
];

export const tickerItems = [
  "Starlink internet in classrooms",
  "Digitally equipped students",
  "University ready",
  "Scholarships funded",
  "1,000+ students reached",
  "10+ schools connected",
];

export const problems = [
  {
    title: "No internet in schools",
    body: "Classrooms have no connection to the wider world of learning.",
    icon: "WifiSlash",
  },
  {
    title: "Limited digital exposure",
    body: "Few students ever use the computers and tools the modern world runs on.",
    icon: "Desktop",
  },
  {
    title: "No university guidance",
    body: "Bright students have no one to guide them through applications.",
    icon: "GraduationCap",
  },
  {
    title: "Missed scholarships",
    body: "Opportunities pass by simply because no one knew they existed.",
    icon: "Medal",
  },
];

export const provisions = [
  { label: "High-speed internet", note: "Starlink", icon: "WifiHigh" },
  { label: "Desktop computers", note: "Per hub", icon: "Desktop" },
  { label: "Academic support programs", note: "Structured", icon: "BookOpen" },
  { label: "Digital literacy training", note: "Ground up", icon: "Cpu" },
  { label: "University application assistance", note: "End to end", icon: "GraduationCap" },
];

export const programs = [
  {
    num: "01",
    title: "BridgeEd Learning Hubs",
    body: "We transform schools into centers of opportunity, with the connection and equipment a modern education depends on.",
    items: ["Internet access", "Computers", "Structured learning programs"],
  },
  {
    num: "02",
    title: "Academic Support Program",
    body: "Focused tutoring that lifts results in the subjects and exams that decide a student's path.",
    items: ["Math, English, Science", "WAEC preparation", "After-school tutoring"],
  },
  {
    num: "03",
    title: "Digital Literacy Program",
    body: "The practical digital skills every student now needs, taught from the ground up.",
    items: ["Computer basics", "Internet research", "Digital tools", "Intro to AI"],
  },
  {
    num: "04",
    title: "University Access Program",
    body: "Hands-on help through every step of the application, so no deadline or form stands in the way.",
    items: ["Complete applications", "Write personal statements", "Apply for scholarships", "Meet deadlines"],
  },
  {
    num: "05",
    title: "BridgeEd Scholars Fund",
    body: "Our scholarship program supports brilliant but financially disadvantaged students, all the way through.",
    items: ["Application fees", "Tuition support", "Mentorship through university"],
  },
];

export const schools = [
  {
    tag: "Accra",
    name: "Presbyterian Senior High School, Osu",
    body: "A key partner school serving diverse students with strong academic potential. As one of our first hubs, it shows how connection and support can raise outcomes in the heart of Accra.",
    image: "/img/school-osu.jpg",
  },
  {
    tag: "Eastern Region",
    name: "Junior High School, Teacher Mante",
    body: "A community school where access to technology and opportunity is limited. Here, a learning hub reaches students who have had the fewest chances to get online.",
    image: "/img/school-mante.jpg",
  },
];

export const values = [
  {
    title: "Access",
    body: "We remove the barriers that stand between students and the tools they need to learn.",
    adinkra: "Nkonsonkonson",
    meaning: "chain links, a symbol of unity and human connection.",
  },
  {
    title: "Excellence",
    body: "We hold our programs and our students to a high standard, and help them meet it.",
    adinkra: "Mate Masie",
    meaning: "what I hear I keep, a symbol of wisdom and knowledge.",
  },
  {
    title: "Integrity",
    body: "We use every contribution transparently and honor the trust placed in us.",
    adinkra: "Dwennimmen",
    meaning: "ram's horns, a symbol of strength tempered by humility.",
  },
  {
    title: "Impact",
    body: "We measure success by the futures we change, not the activity we generate.",
    adinkra: "Nkyinkyim",
    meaning: "twisting, a symbol of dynamism and resilience.",
  },
];

export const partnerTypes = [
  { title: "Schools", body: "Partner schools host our hubs and open their classrooms to a connected future.", icon: "Buildings" },
  { title: "Corporations", body: "Companies fund hubs and contribute technology as part of meaningful social impact.", icon: "Briefcase" },
  { title: "Foundations", body: "Aligned foundations help us scale a model built to grow responsibly.", icon: "Bank" },
  { title: "Diaspora professionals", body: "Ghanaians abroad give back through funding, mentorship, and expertise.", icon: "GlobeHemisphereEast" },
];

export const partnerOpps = [
  { num: "01", title: "Sponsor a school", body: "Fund a complete learning hub, from internet to computers to programs." },
  { num: "02", title: "Provide technology", body: "Contribute computers, devices, or connectivity to equip a classroom." },
  { num: "03", title: "Mentor students", body: "Share your time and experience to guide students toward university and careers." },
  { num: "04", title: "Fund scholarships", body: "Support the BridgeEd Scholars Fund and carry a student all the way through." },
];

export const tiers = [
  {
    amount: "$3,000",
    name: "Equip an entire school",
    ribbon: "Sponsor a school",
    body: "Provides internet, computers, and full program setup for one BridgeEd Learning Hub.",
    cta: "Donate $3,000",
    featured: true,
  },
  {
    amount: "$500",
    name: "Support one student",
    ribbon: "Sponsor a student",
    body: "Supports academic training and university access for a single student.",
    cta: "Donate $500",
    featured: false,
  },
  {
    amount: "Custom",
    name: "Give any amount",
    ribbon: "",
    body: "Every contribution counts. Give what you can, and it goes straight to the work.",
    cta: "Choose an Amount",
    featured: false,
  },
];

export type Stat = { label: string; value?: number; suffix?: string; text?: string };

export const impactStats: Stat[] = [
  { value: 1000, suffix: "+", label: "students impacted in three years" },
  { value: 10, suffix: "+", label: "schools connected to the internet" },
  { text: "More", label: "university admissions for our students" },
  { text: "A new", label: "generation of digitally equipped students" },
];

export const donateReasons = [
  { title: "Direct, measurable impact", body: "You fund equipment and programs students use, with outcomes we can point to.", icon: "Target" },
  { title: "Transparent use of funds", body: "We are clear about where your gift goes and what it makes possible.", icon: "Eye" },
  { title: "Scalable model", body: "What works in one hub is built to repeat in the next school, and the next.", icon: "TrendUp" },
];
