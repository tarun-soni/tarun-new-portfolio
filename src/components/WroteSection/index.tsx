import { fonts } from '@/utils/fonts'
import { motion } from 'framer-motion'
const blogcards = [
  {
    id: 1,
    title: 'How to create a custom Next.js app',
    description:
      'In this article, we will learn how to create a custom Next.js app with TypeScript and Tailwind CSS.',
    path: '/blog/how-to-create-a-custom-nextjs-app',
    date: '2021-08-01',
    image:
      'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/ivancik.jpg',
  },
  {
    id: 2,

    title: 'How to create a custom Next.js app',
    description:
      'In this article, we will learn how to create a custom Next.js app with TypeScript and Tailwind CSS.',
    path: '/blog/how-to-create-a-custom-nextjs-app',
    date: '2021-08-01',
  },
  {
    id: 3,
    title: 'How to create a custom Next.js app',
    description:
      'In this article, we will learn how to create a custom Next.js app with TypeScript and Tailwind CSS.',
    path: '/blog/how-to-create-a-custom-nextjs-app',
    date: '2021-08-01',
  },
]

const gradients = [
  {
    from: 'from-[#6EE7B7]',
    via: 'via-[#3B82F6]',
    to: 'to-[#9333EA]',
  },
  // add 3 more gradients here with different colors
  {
    from: 'from-[#464562]',
    via: 'via-[#0e1a64]',
    to: 'to-[#611624]',
  },
]

function WroteSection() {
  const generatedGradientIndex = Math.random() * gradients.length

  return (
    <>
      {blogcards.map(card => (
        <motion.div
          initial={{
            y: 30,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
          }}
          whileHover={{
            scale: 1.07,
          }}
          key={card.id}
          className={`bg-slate-100 
          rounded-md m-4 flex-wrap h-30 w-96
            bg-gradient-to-r px-2 py-2 
            cursor-pointer
            ${gradients[Math.floor(generatedGradientIndex)].from}
            ${gradients[Math.floor(generatedGradientIndex)].via}
            ${gradients[Math.floor(generatedGradientIndex)].to}
            
        `}>
          {/* <div className="rounded-xl w-52 h-64 mx-auto  mt-10 bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
          </div> */}
          {/* // bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 */}
          <div className="flex flex-col justify-between h-full bg-stone-900  rounded-md p-4">
            <h4
              className={`text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full light:text-white-900 dark:text-white-100 tracking-tight ${fonts.inter}`}>
              {card.title}
            </h4>

            <p className="text-gray-400 ">{card.date}</p>
          </div>
        </motion.div>
      ))}
    </>
  )
}
export default WroteSection
