import Button from '../components/Button'

const FourOhFour = () => {
  return (
    <>
      <div className="p-12 flex flex-col h-[70vh] justify-center items-center">
        <h1 className="text-6xl font-Manrope font-black mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
            404
          </span>{' '}
          - страница не найдена.
        </h1>

        <Button href="/">Вернуться на главную</Button>
      </div>
    </>
  )
}

export default FourOhFour
