import Image from "next/image";
import InfiniteMenu from "../components/InfiniteMenu";
export default function Home() {
  const items = [
  {
    image: '/cpl.webp',
    link: 'https://cpl-20.vercel.app/',
    title: 'CPL Website',
    description: 'Next.js, GSAP, Tailwind Css'
  },
  {
    image: '/codechef.jpg',
    link: 'https://codechef-seven.vercel.app/',
    title: 'Codechef | BU official website',
    description: 'React.js,     GSAP, and Lottie,'
  },
  {
    image: '/icisn.png',
    link: 'https://www.icisn.com/',
    title: 'ICISN conference (hosted by Springer)',
    description: ' Next.js, TailwindCSS, GSAP'
  },
  {
    image: '/tk.png',
    link: 'https://apple-inspired-casaroule.vercel.app/',
    title: 'TechKareer success page',
    description: ' React, TailwindCSS, React bits'
  }
];
  return (
    

<div className="w-screen h-screen flex items-center justify-center bg-white">
  <InfiniteMenu items={items}/>
</div>
  );
}
