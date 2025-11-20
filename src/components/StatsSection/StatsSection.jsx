import { useEffect, useRef, useState } from "react";
import plane from "../../assets/about-plane.png";
import planeRing from "../../assets/flight-bg.png";
import user1 from "../../assets/user-01.jpg";
import user2 from "../../assets/user-04.jpg";
import user3 from "../../assets/user-06.jpg";
import "./StatsSection2.css";

const STATS_CONFIG = [
    { label: "Destinations Worldwide", target: 32 },
    { label: "Providers Registered", target: 70 },
    { label: "Booking Completed", target: 4258 },
    { label: "Client Globally", target: 40 },
];

function StatsSection() {
    const [values, setValues] = useState(STATS_CONFIG.map(() => 0));
    const [started, setStarted] = useState(false);
    const sectionRef = useRef(null);

    // start animation when section is visible
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !started) {
                    setStarted(true);
                }
            },
            {
                threshold: 0.3, // 30% of section visible
            }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, [started]);

    // animate numbers once "started" is true
    useEffect(() => {
        if (!started) return;

        const duration = 1200;
        const frameTime = 30;
        const totalFrames = Math.round(duration / frameTime);
        let frame = 0;

        const interval = setInterval(() => {
            frame += 1;
            setValues(() =>
                STATS_CONFIG.map((stat) => {
                    const progress = Math.min(frame / totalFrames, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const base = Math.round(stat.target * eased);
                    return base;
                })
            );

            if (frame >= totalFrames) clearInterval(interval);
        }, frameTime);

        return () => clearInterval(interval);
    }, [started]);

    return (
        <section className="stats-section" ref={sectionRef}>
            <div className="stats-container">
                <div className="stats-grid">
                    <div className="stats-left">
                        <header className="stats-header">
                            <h2>
                                <span>Where comfort</span> meets elegance and every guest is
                                treated like family.
                            </h2>
                            <p className="stats-subtitle">
                                Our mission is to create memorable experiences for our guests.
                                We believe that every stay should feel special, whether you’re
                                here for business, leisure, or a special occasion.
                            </p>
                        </header>

                        <div className="stats-cards">
                            {STATS_CONFIG.map((item, idx) => (
                                <div className="stats-card" key={item.label}>
                                    <h3>
                                        <span className="stats-number">{values[idx]}</span>+
                                    </h3>
                                    <p>{item.label}</p>
                                </div>
                            ))}
                        </div>


                        <div className="stats-footer">
                            <button className="btn-primary book-button">
                                <i className="isax isax-calendar-2 me-2" />
                                Book a Flight
                            </button>

                            <div className="review-card1">
                                <div className="avatar-stack">
                  <span className="avatar">
                    <img src={user1} alt="user" />
                  </span>
                                    <span className="avatar">
                    <img src={user2} alt="user" />
                  </span>
                                    <span className="avatar">
                    <img src={user3} alt="user" />
                  </span>
                                </div>
                                <div>
                                    <div className="review-stars">
                                        <i className="ti ti-star-filled" />
                                        <i className="ti ti-star-filled" />
                                        <i className="ti ti-star-filled" />
                                        <i className="ti ti-star-filled" />
                                        <i className="ti ti-star-filled" />
                                        <span className="review-score">5.0</span>
                                    </div>
                                    <p className="review-text">2K+ Reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="stats-right">
                        <div className="flight-about">
                            <img src={planeRing} alt="ring" className="flight-ring" />
                            <img src={plane} alt="plane" className="flight-plane" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StatsSection;
