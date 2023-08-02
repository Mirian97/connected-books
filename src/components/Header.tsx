/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import useGlobal from '@/hooks/useGlobal'
import { Search, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Input from './Input'

const Header = () => {
  const { showSearchInput, toggleSearchInput, closeSearchInput } = useGlobal()
  const iconButtonProps = {
    className: 'cursor-pointer',
    color: 'white',
    size: 28,
    onClick: toggleSearchInput
  }
  const pathname = usePathname()
  const [isHome, setIsHome] = useState(false)
  useEffect(() => {
    setIsHome(pathname === '/livros')
  }, [pathname])

  useEffect(() => {
    !isHome && closeSearchInput()
  }, [isHome])

  return (
    <header className={`header ${showSearchInput && 'show'}`}>
      <div className='main-container'>
        <Link href='/livros' className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Image src='/svg/books.svg' width={52} height={52} alt='Logo' />
            <span className='text-xl text-white font-bold max-w-[150px]'>
              Livros Conectados
            </span>
          </div>
          {isHome ? (
            showSearchInput ? (
              <X {...iconButtonProps} />
            ) : (
              <Search {...iconButtonProps} />
            )
          ) : (
            ''
          )}
        </Link>
        {showSearchInput && (
          <Input type='search' placeholder='Buscar por livro...' className='m-auto' />
        )}
      </div>
    </header>
  )
}

export default Header
