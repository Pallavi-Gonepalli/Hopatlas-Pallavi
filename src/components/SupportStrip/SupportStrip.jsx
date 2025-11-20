// src/components/SupportStrip/SupportStrip.jsx
import "./SupportStrip.css";

const ITEMS = [
    "Personalized Itineraries",
    "Comprehensive Planning",
    "Expert Guidance",
    "Local Experience",
    "Customer Support",
    "Sustainability Efforts",
    "Multiple Regions",
];

function SupportStrip() {
    const loopItems = [...ITEMS, ...ITEMS];

    return (
        <section className="support-section">
            <div className="support-marquee">
                <div className="support-track">
                    {loopItems.map((text, idx) => (
                        <div className="support-item" key={idx}>
                            <span className="support-star">✦</span>
                            <h5>{text}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SupportStrip;
