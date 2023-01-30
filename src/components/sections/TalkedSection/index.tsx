import CommonCard from '@/components/CommonCard'
import talkedData from '@/data/talked'

function TalkedSection() {
  return (
    <>
      {talkedData.map(data => (
        <CommonCard data={data} key={data.title} />
      ))}
    </>
  )
}
export default TalkedSection
