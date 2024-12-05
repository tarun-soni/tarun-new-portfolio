import { fonts } from '@/utils/fonts'

const StackTag = ({ stacks }: { stacks: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {stacks?.map(stack => (
        <p
          className={`${fonts.inter} text-xs bg-stone-200 px-2 py-1 rounded-md text-stone-900 whitespace-nowrap mr-2`}
          key={stack}>
          {stack}
        </p>
      ))}
    </div>
  )
}

export default StackTag
