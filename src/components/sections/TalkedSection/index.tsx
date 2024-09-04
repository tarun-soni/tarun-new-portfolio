import CardWithImage from '@/components/CardWithImage'
import CommonCard from '@/components/CommonCard'
import talkedData from '@/data/talked'

function TalkedSection() {
  return (
    <>
      {talkedData.map(data => (
        <CardWithImage data={data} key={data.title} />
      ))}
    </>
  )
}
export default TalkedSection
