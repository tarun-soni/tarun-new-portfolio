import CommonCard from '@/components/CommonCard'
import wroteData from '@/data/wroteData'

function WroteSection() {
  return (
    <>
      {wroteData.map(data => (
        <CommonCard data={data} key={data.title} />
      ))}
    </>
  )
}
export default WroteSection
