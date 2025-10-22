import Image from "next/image";
import InfiniteMenu from "../components/InfiniteMenu";
export default function Home() {
  const items = [
  {
    image: '/Screenshot 2025-10-22 145019.png',
    link: 'https://google.com/',
    title: 'Item 1',
    description: 'This is pretty cool, right?'
  },
  {
    image: '/Screenshot 2025-10-22 145053.png',
    link: 'https://google.com/',
    title: 'Item 2',
    description: 'This is pretty cool, right?'
  },
  {
    image: '/Screenshot 2025-10-22 145108.png',
    link: 'https://google.com/',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  },
  {
    image: '/Screenshot 2025-10-22 145126.png',
    link: 'https://google.com/',
    title: 'Item 4',
    description: 'This is pretty cool, right?'
  }
];
  return (
    

<div className="w-screen h-screen flex items-center justify-center bg-white">
  <InfiniteMenu items={items}/>
</div>
  );
}
