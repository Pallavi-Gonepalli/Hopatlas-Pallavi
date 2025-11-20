import denmark from "../../assets/denmarkImage.jpg";
import belgium from "../../assets/belgiumImage.jpg";
import barcelona from "../../assets/barcelonaImage.jpg";
import indonesia from "../../assets/indonesiaImage.jpg";
import mexico from "../../assets/mexicoImage.jpg";
import india from "../../assets/indiaImage.jpg";
import romania from "../../assets/romaniaImage.jpg";
import paris from "../../assets/parisImage.jpg";
import "./LocationSection2.css";

function LocationSection() {
    const locations = [
        { img: denmark, name: "Denmark" },
        { img: belgium, name: "Belgium" },
        { img: barcelona, name: "Barcelona" },
        { img: mexico, name: "Mexico" },
        { img: indonesia, name: "Indonesia" },
        { img: romania, name: "Romania" },
        { img: india, name: "India" },
        { img: paris, name: "Paris"}
    ];

    return (
        <section className="destination-section">
            <div className="locations-container">
                <div className="section-header-four">
                    <h2>
                        <span>Popular</span> Locations
                    </h2>
                    <p className="sub-title">
                        Connecting Needs with Offers for the Professional Flight Services,
                        Book your next flight appointment with ease.
                    </p>
                </div>

                <div className="locations-grid">
                    {locations.map((loc) => (
                        <div className="location-card" key={loc.name}>
                            <div className="location-wrap">
                                <img src={loc.img} loading="lazy" alt={loc.name} />
                                <span className="loc-name">{loc.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default LocationSection;
