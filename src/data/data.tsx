// import InstagramIcon from '../components/Icon/InstagramIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.png';
import LuminaLogo from '../images/LuminaLogo.png';
import testimonialImage from '../images/testimonial.png';
import {About, Hero, HomepageMeta, Social, TestimonialSection} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Lumina Monitors',
  description: 'The fastest ticket monitors on the market.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Lumina Monitors`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Monitor ticket restocks for the hottest events with ease.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://whop.com/lumina',
      text: 'Subscribe',
      primary: true,
    },
    {
      href: `https://discord.gg/invite/xxxxxx`,
      text: 'Discord',
      primary: true,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: LuminaLogo,
  content: (
    <>
      <h2 className="text-2xl font-bold text-white">Your ticket to a world of exclusive live events.</h2>
      <p>
        Discover the world of exclusive live events without the hassle. Lumina Monitors simplifies ticket purchasing so
        you never miss out on your favorite shows.
      </p>
      <h2 className="text-2xl font-bold text-white">Seamless Discord Integration</h2>
      <p>
        Effortlessly create and manage your ticket watchlists with our advanced Discord bot. Say goodbye to complicated
        setups and hello to simplicity.
      </p>
      <h2 className="text-2xl font-bold text-white">Global Ticketmaster Coverage</h2>
      <p>
        No matter where you are, Lumina Monitors has you covered. We support Ticketmaster across the globe, ensuring
        your access to worldwide events.
      </p>
      <h2 className="text-2xl font-bold text-white">Tailored Alerts and Subscriptions</h2>
      <p>
        Customize your event experience with price filters and priority notifications. Whether you're a pro or just
        starting out, we provide the tools you need to succeed.
      </p>
    </>
  ),
};

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'raffman44',
      text: 'Great tool for restocks. Devs have been Very active in adding features to make it even better over the short period of time I’ve used it.',
      image: 'https://cdn.discordapp.com/avatars/630785928327069741/1a6f567a217d0a1d3acb5fc153665573',
    },
    {
      name: 'wavyxav',
      text: 'Great fast monitors! Highly recommended to those looking for monitor solutions',
      image: 'https://cdn.discordapp.com/avatars/397068412666511374/dc80e9c475fa6917f068783feb88a7e9',
    },
    {
      name: 'zdeag.',
      text: 'Amazing product, very innovative and respectable developers. Product is much better than competitors!',
      image: 'https://cdn.discordapp.com/avatars/194191265179500544/698cd45b0d4ceb771b11eeceab7676ee',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/LuminaMonitors'},
  {label: 'Discord', Icon: TwitterIcon, href: 'https://discord.com/invite/xxxxxx'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/LuminaMonitors/'},
];
