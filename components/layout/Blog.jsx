import Link from 'next/link'

const Blog = ({ children }) => {
  return (
    <>
      {/* TODO: make a blog */}
      <div className="transition-colors duration-150 mb-8 lg:mb-20 sticky -z-10 lg:z-10 flex justify-around items-center top-24 h-20 bg-slate-200 dark:bg-zinc-900 dark:border-neutral-800 border-b-2 border-gray-300">
        <h1 className="text-xl font-Inter font-medium">
          Вы находитесь на странице Блога.
        </h1>

        <ul className="hidden  lg:flex gap-12 text-xl font-Manrope font-extrabold">
          <li>
            <Link href="/blog">
              <a className="transition-colors duration-150 hover:text-blue-500 dark:hover:text-blue-600">
                Главная
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog/changelogs">
              <a className="transition-colors duration-150 hover:text-blue-500 dark:hover:text-blue-600">
                Обновления
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog/beta">
              <a className="transition-colors duration-150 hover:text-blue-500 dark:hover:text-blue-600">
                Бета-тест
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="px-12">{children}</div>
    </>
  )
}

export default Blog
