
import Image from 'next/image';
import ktm from './assets/kathmandu.jpeg'
import Button from './components/Button';
import Property from './components/property';

export default function Home() {
  return (
    <main className="">
      <div className=' w-full h-[300px] relative'>
        <Image src={ktm} alt='ktm' className=' object-cover h-[300px] w-full' />
        <div className='absolute flex space-x-1 items-center justify-center w-full -bottom-[1px]'>
          <Button text='All' />
          <Button text='Room' />
          <Button text='Flat' />
        </div>
        <div className='px-20 gap-6 py-9 flex'>
          <Property />
          <Property />
        </div>
      </div>
    </main>
  );
}
