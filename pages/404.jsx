import NavButton from '../components/NavButton'

const FourOhFour = () => {
  return (
    <>
      <div className="flex flex-col h-[70vh] justify-center items-center">
        <h1 className="text-6xl font-Manrope font-black mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
            404
          </span>{' '}
          - страница не найдена.
        </h1>

        <NavButton href="/">Вернуться на главную</NavButton>
      </div>
    </>
  )
}

export default FourOhFour
