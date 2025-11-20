import rachel from "../../assets/rachel.jpg";
import stephen from "../../assets/stephen.jpg";
import harriet from "../../assets/harriet.jpg";
import charles from "../../assets/charles.jpg";
import arrow from '../../assets/icon-arrow.png';
import "./ReviewSection2.css";

const REVIEWS = [
    {
        avatar: rachel,
        name: "Rachel Mariscal",
        country: "United States",
        title: "Smooth Booking Experience!",
        text:
            "I recently booked a flight through HopAtlas and couldn’t be happier with the experience.",
    },
    {
        avatar: stephen,
        name: "Stephen Brekke",
        country: "Germany",
        title: "Customer Service",
        text:
            "I had a quick question about my itinerary and customer service was incredibly helpful and responsive.",
    },
    {
        avatar: harriet,
        name: "Harriet Collins",
        country: "France",
        title: "Overall Experience",
        text:
            "From searching to checkout everything was smooth, transparent, and easy to understand.",
    },
    {
        avatar: charles,
        name: "Charles Earnhardt",
        country: "Italy",
        title: "Confirmation Process",
        text:
            "I received my confirmation email almost immediately and all the details were accurate.",
    },
];

function ReviewSection() {
    return (
        <section className="review-section">
            <div className="review-container">
                <div className="review-grid">

                    <div className="review-left">
                        <div className="review-arrow">
                            <img src={arrow} alt="arrow" />
                        </div>

                        <header className="review-header">
                            <h2>
                                <span>Success</span> stories in their own words
                            </h2>
                            <p className="review-subtitle">
                                Read what our satisfied clients have to say about their
                                experiences with our platform.
                            </p>
                        </header>

                        <div className="review-trust">
                            <p className="review-trust-title">Trusted by 40K+ customers</p>

                            <div className="review-stars-row">
                                {/* red/gold stars */}
                                <span className="review-stars">
      <i className="ti ti-star-filled" />
      <i className="ti ti-star-filled" />
      <i className="ti ti-star-filled" />
      <i className="ti ti-star-filled" />
      <i className="ti ti-star-filled" />
    </span>

                                {/* rating text on the same line */}
                                <span className="review-rating-inline">
      4.4/5.0 <span className="review-muted">(From 3,580 reviews)</span>
    </span>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT CARDS */}
                    <div className="review-right">
                        <div className="review-cards">
                            {REVIEWS.map((r, idx) => (
                                <article
                                    className="review-card wow-card"
                                    key={r.name}
                                    style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
                                >
                                    <div className="review-card-header">
                                        <div className="review-avatar">
                                            <img src={r.avatar} alt={r.name} />
                                        </div>
                                        <div>
                                            <h6 className="review-name">{r.name}</h6>
                                            <p className="review-country">{r.country}</p>
                                        </div>
                                    </div>

                                    <h5 className="review-title">{r.title}</h5>
                                    <p className="review-text">{r.text}</p>

                                    <div className="review-card-stars">
                    <span className="review-stars">
                      <i className="ti ti-star-filled" />
                      <i className="ti ti-star-filled" />
                      <i className="ti ti-star-filled" />
                      <i className="ti ti-star-filled" />
                      <i className="ti ti-star-filled" />
                    </span>
                                        <span className="review-score">5.0</span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ReviewSection;
