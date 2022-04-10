import Blog from '../../components/layout/Blog'
import Head from 'next/head'
import Link from 'next/link'

const home = () => {
  return (
    <>
      <Head>
        <title>Главная - Блог ION</title>
      </Head>
      <Blog>
        <div className="flex min-w-fit max-w-6xl mx-auto">
          <article className="prose dark:prose-invert">
            <h1>Добро пожаловать в блог ION.</h1>
            <p>
              Тут можно узнать новейшие новости, а также обноления программы.
            </p>
          </article>
          <div className="">{/* <Link></Link> */}</div>
        </div>
      </Blog>
    </>
  )
}

export default home
