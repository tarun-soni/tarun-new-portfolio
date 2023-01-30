import CommonCard from '@/components/CommonCard'
import madeData from '@/data/madeData'

function MadeSection() {
  return (
    <>
      {madeData.map(data => (
        <CommonCard data={data} key={data.title} />
      ))}
    </>
  )
}
export default MadeSection
