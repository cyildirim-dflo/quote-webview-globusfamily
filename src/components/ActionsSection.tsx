interface Props {
  section: ActionSection
}

const ActionsSection: React.FC<Props> = ({ section }) => {
  return (
    <div className='w-full bg-white pb-[80px]'>
      <div className='max-w-screen-xl mx-auto'>
        <h1 className='text-4xl md:text-5xl text-center text-primary'>
          {section.title}
        </h1>
        <div className='flex flex-col md:flex-row px-4 justify-center gap-7 pt-10'>
          {section.actions &&
            section.actions.map((action, index) => {
              return (
                <a href={action.url} className='btn-primary md:w-80' key={index}>
                  {action.label}
                </a>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default ActionsSection
