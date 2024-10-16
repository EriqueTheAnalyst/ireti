'use client';
import Image from 'next/image';
import { GoDotFill } from 'react-icons/go';
import { HiOutlineInformationCircle } from 'react-icons/hi2';
import { RiSendPlane2Fill } from 'react-icons/ri';
import Button from '@/components/buttons/Button';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ChangeSection = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/images/folashade.png")',
      }}
      className='w-full max-w-[1440px] mx-auto hidden sm:block bg-cover bg-center py-12 md:py-40 relative'
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B141ACC] to-[#0071C4CC]"></div>
      
      <div className='relative z-10 flex flex-col justify-center items-center gap-6'>
        <p className='text-5xl font-bold text-white w-[50%] text-center'>
          Together, we can create meaningful change.
        </p>

        <p className='text-xl font-normal text-white w-[54%] text-center'>
          Join hands with us to make a lasting impact. Whether through volunteering 
          or partnership, your support drives change and transforms lives.        
        </p>

        <div className='flex items-center gap-4'>
          <Button
            type='button'
            className='mt-8 max-w-max rounded-full px-6 py-2 text-white md:text-lg'
          >
              Get in touch with us          
          </Button>

          <Button
            type='button'
            variant='outline'
            className='mt-8 max-w-max rounded-full px-6 py-2 text-white md:text-lg'
          >
            Become a volunteer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChangeSection;