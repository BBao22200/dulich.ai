interface ContainerProps {
  children: React.ReactNode
  isHover?: boolean
}

const Container = ({ children, isHover = true }: ContainerProps) => (
  <div className='mx-5 mt-2 xl:mx-64 xl:my-20'>
    <div
      className={`${
        isHover &&
        'transition-all duration-300 ease-in-out hover:shadow-common hover:scale-[1.01] rounded-xl'
      }`}
    >
      {children}
    </div>
  </div>
)

export default Container
