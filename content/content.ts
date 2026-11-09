import type { LucideIcon } from "lucide-react";
import {
  Building2,
  BookOpen,
  Briefcase,
  Globe,
  Handshake,
  HandHeart,
  Landmark,
  Leaf,
  Megaphone,
  Recycle,
  School,
  Sprout,
  TreePine,
  Users,
} from "lucide-react";

export const hero = {
  badge: "YOUTH-LED CLIMATE ACTION · EST. 2024",
  headline: ["Building Greener Campuses.", "Growing a Sustainable Future."],
  body: "We empower students and educational communities to take practical action against climate change through environmental education, nature conservation and sustainable practices.",
  primary: { label: "Explore Our Initiatives", href: "#initiatives" },
  secondary: { label: "Become a Campus Ambassador", href: "#get-involved" },
};

export const about = {
  eyebrow: "About Kwanza Green Campus",
  title: "A student movement, rooted on campus.",
  story: [
    "Kwanza Green Campus was launched in 2024 in Goma, in the Democratic Republic of Congo, by young people who believed their own campuses could be the first place climate action becomes a habit.",
    "What began on a single campus is built around a simple idea: when students learn about the environment and then act on it together — planting trees, reducing waste, caring for shared spaces — the change lasts.",
  ],
  mission: {
    title: "Our mission",
    text: "Empower students to become active participants in building a greener and more sustainable future.",
  },
  vision: {
    title: "Our vision",
    text: "A generation of environmentally conscious young people leading climate action in their schools and communities.",
  },
  whyCampuses: {
    title: "Why campuses matter",
    points: [
      "Campuses bring together thousands of young people who will shape tomorrow's communities.",
      "Schools and universities are living laboratories — spaces to test, learn and model sustainable habits.",
      "Habits formed as a student travel home, into families, workplaces and neighbourhoods.",
    ],
  },
  commitment: {
    title: "Community-led sustainability",
    text: "We work with students, not for them. Priorities are set by the people who live and learn on campus, and success is measured by the habits that remain after each activity.",
  },
};

export type Initiative = {
  id: string;
  title: string;
  description: string;
  detail: string;
  icon: LucideIcon;
  variant: "campus" | "trees" | "waste" | "climate";
  photoKey: "greenCampuses" | "treePlanting" | "waste" | "education";
};

export const initiatives: Initiative[] = [
  {
    id: "green-campuses",
    title: "Green Campuses",
    description:
      "Making educational environments greener through student-led environmental activities.",
    detail:
      "Student teams take ownership of their campus — from gardens and shaded spaces to clean-up days and green-space care — turning shared grounds into visible examples of sustainability.",
    icon: Leaf,
    variant: "campus",
    photoKey: "greenCampuses",
  },
  {
    id: "tree-planting",
    title: "Tree Planting & Nature",
    description:
      "Encouraging tree planting, environmental restoration and care for nature.",
    detail:
      "Planting is only the start. We encourage students to care for what they plant and to value local ecosystems, so that trees survive and grow into lasting community assets.",
    icon: TreePine,
    variant: "trees",
    photoKey: "treePlanting",
  },
  {
    id: "waste-reduction",
    title: "Waste Reduction",
    description:
      "Promoting waste separation, recycling and circular-economy practices.",
    detail:
      "Simple, practical systems — separating waste at source, reusing materials and recycling where possible — that students can run themselves and replicate at home.",
    icon: Recycle,
    variant: "waste",
    photoKey: "waste",
  },
  {
    id: "climate-education",
    title: "Climate Education",
    description:
      "Helping students understand climate change and develop practical solutions.",
    detail:
      "Workshops and discussions that connect climate science to local realities, and help students turn understanding into solutions they can act on.",
    icon: BookOpen,
    variant: "climate",
    photoKey: "education",
  },
];

export const expansion = {
  eyebrow: "Our next ambition",
  title: "From One Campus to a Network of Greener Schools.",
  text: "Kwanza Green Campus began on a single campus. Our ambition is to turn what we learn into a model that other schools, universities and youth communities across the DRC can adopt, adapt and lead themselves.",
  steps: [
    {
      title: "Prove the model",
      text: "Refine our activities on our home campus and document what works.",
    },
    {
      title: "Share the playbook",
      text: "Turn that experience into simple guides and training for student teams.",
    },
    {
      title: "Grow the network",
      text: "Support new campuses and youth groups to launch their own Kwanza Green Campus chapters.",
    },
  ],
  cta: { label: "Partner With Kwanza Green Campus", href: "#get-involved" },
  partners: [
    { label: "Schools and universities", icon: School },
    { label: "Youth organisations", icon: Users },
    { label: "Environmental NGOs", icon: Sprout },
    { label: "Climate-action organisations", icon: Globe },
    { label: "Corporate sustainability programmes", icon: Briefcase },
    { label: "International development partners", icon: Landmark },
  ] as { label: string; icon: LucideIcon }[],
};

export type InvolvementKind = "ambassador" | "volunteer" | "partner" | "support";

export const involvement: {
  kind: InvolvementKind;
  title: string;
  text: string;
  icon: LucideIcon;
  cta: string;
}[] = [
  {
    kind: "ambassador",
    title: "Become a Campus Ambassador",
    text: "Lead Kwanza Green Campus activities at your school or university and represent the movement.",
    icon: Megaphone,
    cta: "Apply as ambassador",
  },
  {
    kind: "volunteer",
    title: "Volunteer",
    text: "Give your time and skills to planting days, clean-ups, workshops and events.",
    icon: HandHeart,
    cta: "Sign up to volunteer",
  },
  {
    kind: "partner",
    title: "Partner with Us",
    text: "Collaborate as a school, organisation, company or development partner.",
    icon: Handshake,
    cta: "Start a partnership",
  },
  {
    kind: "support",
    title: "Support an Environmental Initiative",
    text: "Help fund or resource a specific Kwanza Green Campus activity. Tell us how you would like to contribute.",
    icon: Building2,
    cta: "Offer support",
  },
];
