import Link from 'next/link'

const NavButton = (props) => {
  return (
    <Link href={`${props.href}`}>
      <button className="transition-colors duration-150 hidden lg:block px-4 py-2 rounded-lg font-Manrope font-extrabold bg-neutral-900 text-white [ dark:bg-white dark:text-black ] [ hover:bg-blue-500 dark:hover:bg-blue-600 dark:hover:text-white ] ">
        {props.children}
      </button>
    </Link>
  )
}

export default NavButton
