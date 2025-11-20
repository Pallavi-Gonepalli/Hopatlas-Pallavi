import HeroSection from "../HeroSection/HeroSection.jsx";
import LocationSection from "../LocationSection/LocationSection.jsx";
import StatsSection from "../StatsSection/StatsSection.jsx";
import SupportStrip from "../SupportStrip/SupportStrip.jsx";
import ReviewSection from "../ReviewSection/ReviewSection.jsx";



function Home(){
    return(
        <div>
            <HeroSection/>
            <LocationSection/>
            <StatsSection />
            <SupportStrip />
            <ReviewSection />
        </div>
    )
}
export default Home;