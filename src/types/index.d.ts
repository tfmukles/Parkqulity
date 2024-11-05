export type RegularPage = {
  frontmatter: {
    title: string;
    image: string;
    description: string;
    meta_title: string;
    draft: boolean;
    layout: boolean;
  };
  content: string;
  slug?: string;
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
};

interface Banner {
  title: string;
  content: string;
  image: string;
  video_id: string;
}

interface Brands {
  list: string[];
}

interface Tab {
  name: string;
  image: string;
  subtitle: string;
  title: string;
  feature: {
    title: string;
    list: string[];
  };
}

interface Features {
  title: string;
  content: string;
  slider: { label: string; icon: string; tab_content: Tab }[];
}

interface Serve {
  title: string;
  content: string;
  image: string;
}

interface HowItWorks {
  title: string;
  content: string;
  lists: HowItWorksItem[];
  button: Button;
  iframe_link: string;
}

interface HowItWorksItem {
  title: string;
  desc: string;
  image: string;
}

interface Button {
  label: string;
  enable: boolean;
  link: string;
}

interface WhyUs {
  title: string;
  lists: WhyUsItem[];
}

interface WhyUsItem {
  title: string;
  content: string;
  image: string;
}

interface Opinion {
  title: string;
  brands: string[];
  lists: OpinionItem[];
}

interface OpinionItem {
  title: string;
  desc: string;
  image: string;
}

interface MarketValue {
  title: string;
  image: string;
  revenue_list: RevenueItem[];
  growth_list: GrowthItem[];
}

interface RevenueItem {
  revenue: number;
  prefix: string;
  suffix: string;
  unit: string;
  estimated: string;
}

interface GrowthItem {
  revenue: number;
  suffix: string;
  prefix: string;
  unit: string;
  estimated: string;
}

interface schedule_meeting {
  title: string;
  button: Button;
  iframe_link: string;
}

interface AboutUs {
  title: string;
  profiles_list: Profile[];
}

interface BackedBy {
  title: string;
  images: { src: string; title: string }[];
}

interface Profile {
  name: string;
  designation: string;
  location: string;
  image: string;
  desc: string;
  social: Social;
}

interface Social {
  name: string;
  link: string;
}

interface ProductDemo {
  title: string;
  video_id: string;
  image: string;
  alt: string;
}

interface key_feature {
  title: string;
  image: string;
  features: Array<string>;
}

interface KeyFeatures {
  title: string;
  list: Array<key_feature>;
}

interface IFaq {
  question: string;
  answer: string;
}

interface FAQ {
  title: string;
  desc: string;
  questions: Array<IFaq>;
}

interface HomePageProps {
  banner: Banner;
  brands: Brands;
  features: Features;
  we_serve: Serve;
  how_it_works: HowItWorks;
  why_us: WhyUs;
  opinion: Opinion;
  market_values: MarketValue;
  schedule_meeting: schedule_meeting;
  about: AboutUs;
  backed_by: BackedBy;
  key_features: KeyFeatures;
  product_demo: ProductDemo;
  faq: FAQ;
}
