import PricingBanner from '../components/Pricing/PricingBanner'
import Benefits from '../components/Pricing/Benefits'
import ContactForm from '../components/Common/ContactForm'
import Advertising from '../components/Pricing/Advertising'

const Pricing = () => {
  return (
    <>
      <PricingBanner />
      <Benefits />
      {/* <ContactForm /> */}
      <Advertising bgGradient={[
          'linear(to-b, #FFFCFF, #C5F2FF)'
          ]} />
    </>
  )
}

export default Pricing