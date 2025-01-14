import CommonCard from '@/components/CommonCard'
import madeData from '@/data/madeData'

export default function MadeSection() {
  return (
    <>
      {madeData.map(data => (
        <CommonCard data={data} key={data.title} />
      ))}
    </>
  )
}
