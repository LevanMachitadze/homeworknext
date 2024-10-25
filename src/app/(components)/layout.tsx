'use client';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import Logo from '../assets/Logo.svg';
import Image from 'next/image';

const navLink = [
  { name: 'Home', href: '/home' },
  { name: 'About', href: '/about' },
  { name: 'HowItWorks', href: '/howitworks' },
  { name: 'Services', href: '/services' },
  { name: 'SignIn', href: '/signin' },
  { name: 'SignUp', href: '/signup' },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const panthname = usePathname();
  console.log(panthname);

  return (
    <div>
      <header className='flex justify-between h-[80px] items-center max-w-[1440px] w-full mx-auto'>
        <Image src={Logo} width={100} height={100} alt='Logo' />
        <nav className='w-[500px] rounded-[20px] h-[68px] bg-white overflow-hidden flex items-center justify-center'>
          <ul className='flex justify-between w-[400px] h-full items-center px-4 text-[#8987A1]'>
            <li className='hover:text-black'>
              <Link href='/home'>Home</Link>
            </li>
            <li className='hover:text-black'>
              <Link href='/about'>About</Link>
            </li>
            <li className='hover:text-black'>
              <Link href='/howitworks'>How It Works</Link>
            </li>
            <li className='hover:text-black'>
              <Link href='/services'>Services</Link>
            </li>
          </ul>
        </nav>
        <div className='w-[200px] flex justify-between items-center'>
          <Link href='/signin'>
            <button className='text-[#8987A1]'>Sign in</button>
          </Link>
          <Link href='/signup'>
            <button className='bg-[#4E47FF] rounded-[10px] w-[132px] h-[48px] flex items-center justify-center'>
              Sign up
            </button>
          </Link>
        </div>
      </header>
      <div className='text-black text-[74px] font-bold text-center'>
        {children}
      </div>
    </div>
  );
}
