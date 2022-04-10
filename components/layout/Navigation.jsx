import Link from 'next/link'
import Image from 'next/image'
import IONlogo from '../../public/assets/logo.svg'
import NavButton from '../NavButton'
import ThemeChanger from '../Themechanger'

import { React, useState } from 'react'

const Navigation = ({ children }) => {
  var [open, setOpen] = useState(false)
  return (
    <>
      <div className="hidden bg-black text-white h-24 lg:h-16 lg:flex flex-col md:flex-row md:gap-4 justify-center items-center">
        <h1 className="text-xl font-Manrope font-extrabold">
          {/* Обновление <span className="p-1 m-1 bg-black rounded-lg">v2.0.0</span>{' '}
          доступно для загрузки. */}
          Приложение в разработке.
        </h1>
        <Link href="blog/beta">
          <div className="flex gap-2 items-center cursor-pointer">
            <h1 className="text-xl font-Manrope font-light">Подробнее</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </Link>
      </div>

      <div className="[ bg-slate-100 dark:bg-neutral-900 flex justify-between items-center lg:px-12 sticky top-0 ] [ h-24 bg-transparent ] [ border-gray-300 dark:border-neutral-800 border-b-2 ]">
        <div className="flex items-center flex-row-reverse ml-8 lg:ml-0">
          <div className="z-50 cursor-pointer absolute left-[50%] translate-x-[-50%] lg:relative lg:translate-x-0 lg:left-0">
            <Link href="/">
              <Image
                src={IONlogo}
                height={48}
                width={48}
                className="brightness-0 dark:filter-none"
              />
            </Link>
          </div>
          <button className="z-50" onClick={() => setOpen(!open)}>
            <NavToggle opened={open} />
          </button>
        </div>
        <Links opened={open} onClick={() => setOpen(!open)} />
        <nav className="hidden lg:flex lg:items-center">
          <ul className="flex absolute left-[50%] translate-x-[-50%] flex-row gap-12">
            <li>
              <Link href="/">
                <a className="text-xl font-Manrope font-extrabold transition-colors duration-150 dark:text-white hover:text-blue-500 dark:hover:text-blue-600">
                  Главная
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog/">
                <a className="text-xl font-Manrope font-extrabold transition-colors duration-150 dark:text-white hover:text-blue-500 dark:hover:text-blue-600">
                  Блог
                </a>
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/pe3ep/ION"
                className="text-xl font-Manrope font-extrabold transition-colors duration-150 dark:text-white hover:text-blue-500 dark:hover:text-blue-600"
              >
                Исходный код
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex mr-8  lg:mr-0 items-center gap-4">
          <ThemeChanger />
          <NavButton href="/download">Скачать</NavButton>
        </div>
      </div>
      {children}
    </>
  )
}

export default Navigation

const Links = (props) => {
  if (props.opened == true) {
    return (
      <nav className="fixed z-40 p-0 bg-neutral-50 dark:bg-neutral-900 w-full top-0 h-[100vh] flex px-24 py-48 lg:bg-transparent lg:dark:bg-transparent lg:p-0 lg:h-auto lg:absolute lg:left-[50%] lg:translate-x-[-50%] lg:top-auto lg:translate-y-0">
        <ul className="flex flex-col gap-24">
          <li>
            <Link href="/">
              <a
                onClick={props.onClick}
                className="text-xl font-Manrope font-extrabold dark:text-white"
              >
                Главная
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog/">
              <a
                onClick={props.onClick}
                className="text-xl font-Manrope font-extrabold dark:text-white"
              >
                Блог
              </a>
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/pe3ep/ION"
              onClick={props.onClick}
              className="text-xl font-Manrope font-extrabold dark:text-white"
            >
              Исходный код
            </a>
          </li>
        </ul>
      </nav>
    )
  } else {
    return
  }
}

const NavToggle = (props) => {
  if (props.opened == false) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className=" h-8 w-8 lg:hidden z-50 button"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    )
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="button h-8 w-8 lg:hidden z-50 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    )
  }
}
