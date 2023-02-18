import React from "react";
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="container fixed flex justify-between w-full bg-gray-500 h-28" >
      
        <div className="">
          <Image src='/../public/logo.png ' className="items-center justify-center h-20 shadow-gray-600 justify-items-center"
          width={80}
          height={24}
           />

        </div>
        <div>
          <ul className="flex items-center justify-center gap-6 px-6 py-12 font-bold leading-4 tracking-wider text-white uppercase cursor-pointer justify-items-end">
            <Link href='/'> <li>home</li></Link>
            <Link href='/'> <li>about </li></Link>
            <Link href='/'> <li>shop</li></Link>
            <Link href='/'> <li>orders</li></Link>
            <Link href='/'  > <li>contact</li></Link>
            <Link href='/'> <li>account</li></Link>
            <Link href='/'> <button className="uppercase"> add to cart()</button></Link>
          </ul>
        </div>
      </div>
    
  );
};

export default Header;
