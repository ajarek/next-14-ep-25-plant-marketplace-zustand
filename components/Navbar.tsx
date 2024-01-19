'use client'

import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'
import { ModeToggle } from './mode-toggle'
import { useCartStore } from '@/store/useCartStore'

const Navbar = () => {
  const { totalItems } = useCartStore()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/contact', label: 'Contact' },
  ]
  const { theme, setTheme } = useTheme()

  return (
    <>
      <header className='  max-w-[1440px] mx-auto z-10 w-full'>
        <nav className='h-20 flex justify-between items-center max-container  px-12 max-sm:px-2 py-2 border-b-2 border-green-800 '>
          <div>
            <Link
              href='/'
              className='text-3xl font-bold flex justify-center items-center'
            >
              <Image
                src={'/images/plant-icon.png'}
                alt='icon'
                width={40}
                height={40}
                className='bg-white rounded-sm mr-2'
              />
              Marketplace
            </Link>
          </div>

          <ul className=' flex justify-center items-center gap-16 max-lg:hidden mr-16 max-lg:mr-0'>
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className='font-montserrat leading-normal text-lg text-slate-gray'
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <Link
              href='/cart'
              className='flex'
            >
              <Image
                src={'/images/cart.svg'}
                alt='icon'
                width={40}
                height={40}
                className='bg-white mr-2 border-2 border-green-800 rounded-lg p-2'
              />
              <sup className='text-xl'>{totalItems}</sup>
            </Link>
            <ModeToggle />
          </ul>

          <div
            className='hidden max-lg:block cursor-pointer'
            onClick={() => {
              setIsMenuOpen(!isMenuOpen)
            }}
          >
            {isMenuOpen ? (
              <Image
                src={
                  theme === 'dark'
                    ? '/images/close-white.svg'
                    : '/images/close.svg'
                }
                alt='icon'
                width={24}
                height={24}
              />
            ) : (
              <Image
                src={
                  theme === 'dark'
                    ? '/images/menu-white.svg'
                    : '/images/menu.svg'
                }
                alt='icon'
                width={25}
                height={24}
              />
            )}
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div className='flex justify-end border-2 '>
          <ul className='absolute w-1/3 lg:hidden flex flex-col items-start justify-start  p-4 gap-6 border-2  bg-primary z-10'>
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className='font-montserrat leading-normal text-lg text-primary-foreground   '
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <Link
              href='/cart'
              className='flex'
            >
              {theme === 'dark' ? (
                <>
                  <Image
                    src={'/images/cart.svg'}
                    alt='icon'
                    width={40}
                    height={40}
                    className='text-primary rounded-sm mr-2'
                  />
                  <sup className='text-xl text-primary-foreground'>
                    {totalItems}
                  </sup>
                </>
              ) : (
                <>
                  <Image
                    src={'/images/cart.svg'}
                    alt='icon'
                    width={40}
                    height={40}
                    className='bg-primary-foreground rounded-sm mr-2'
                  />
                  <sup className='text-xl text-primary-foreground '>
                    {totalItems}
                  </sup>
                </>
              )}
            </Link>
            <ModeToggle />
          </ul>
        </div>
      )}
    </>
  )
}
export default Navbar
