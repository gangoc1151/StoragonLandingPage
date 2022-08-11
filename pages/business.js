import BusinessBanner from "../components/Business/BusinessBanner"
import DownloadPrice from "../components/Business/DownloadPrice"
import PayMethod from "../components/Business/PayMethod"
import GiftCards from "../components/Business/GiftCards"

const Business = () => {
  return (
    <>
      <BusinessBanner />
      <DownloadPrice />
      <PayMethod />
      <GiftCards />
    </>
  )
}

export default Business