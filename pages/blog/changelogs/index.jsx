import Head from 'next/head'
import Blog from '../../../components/layout/Blog'

const index = () => {
  return (
    <>
      <Head>
        <title>Обновления - ION</title>
      </Head>
      <Blog>
        <div>Index (changelogs)</div>
      </Blog>
    </>
  )
}

export default index
