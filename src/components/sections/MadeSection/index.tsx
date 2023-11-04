import CommonCard from '@/components/CommonCard'
import { NewCard } from '@/components/new-card'
import madeData from '@/data/madeData'

function MadeSection() {
  return (
    <>
      {/* // <CommonCard data={data} key={data.title} /> */}
      {madeData.map(data => (
        <NewCard />
      ))}
    </>
  )
}
export default MadeSection
