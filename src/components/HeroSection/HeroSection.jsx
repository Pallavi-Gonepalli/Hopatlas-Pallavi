import React, { useState } from "react";
import "./HeroSection.css";
import heroBg from "../../assets/zoomed3.png";
import flight from "../../assets/flight-icon.png";


export default function HeroSection() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [travelers, setTravelers] = useState({ adults: 1, children: 0, infants: 0 });
    const [cabin, setCabin] = useState("Economy");
    const [form, setForm] = useState({
        trip: "oneway",
        from: "",
        to: "",
        departure: "19-11-2025",
        return: "",
    });

    const totalTravellers = travelers.adults + travelers.children + travelers.infants;

    const handleTravelers = (key, delta) => {
        setTravelers((prev) => ({
            ...prev,
            [key]: Math.max(key === "adults" ? 1 : 0, prev[key] + delta),
        }));
    };

    return (
        <section className="hero-section-booking">
            <div
                className="hero-background-blur"
                style={{ backgroundImage: `url(${heroBg})` }}
            />

            <div className="hero-content-block">
                <h1 className="display-title">
                    Discover the World, One{" "}
                    <span className="flight-icon">
            <img className="flight-image" src={flight} alt="flight" />
                    </span>
                    Flight at a Time with <span className="brand">HopAtlas!</span>
                </h1>
                <div className="tagline">
                    Your ultimate destination for all things travel.
                </div>

                {/* CARD LIKE IMAGE 2 */}
                <div className="search-card">

                    {/* Top row: Flights tab + Oneway / Round Trip + right text */}
                    <div className="card-top-row">
                        {/*<div className="tab-flights">*/}
                        {/*    <button className="flights-tab">*/}
                        {/*        <i className="bi bi-plus-lg me-1" /> Flights*/}
                        {/*    </button>*/}
                        {/*</div>*/}

                        <div className="trip-radio-group">
                            <label>
                                <input
                                    type="radio"
                                    name="trip_type"
                                    value="oneway"
                                    checked={form.trip === "oneway"}
                                    onChange={() => setForm((f) => ({ ...f, trip: "oneway" }))}
                                />
                                <span>Oneway</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="trip_type"
                                    value="roundtrip"
                                    checked={form.trip === "roundtrip"}
                                    onChange={() => setForm((f) => ({ ...f, trip: "roundtrip" }))}
                                />
                                <span>Round Trip</span>
                            </label>
                        </div>

                        <div className="millions-text">
                            Millions of cheap flights. One simple search
                        </div>
                    </div>

                    {/* Fields row – exactly like image 2 */}
                    <form className="form-row" autoComplete="off">
                        {/* FROM */}
                        <div className="field">
                            <label className="field-label">
                              <span className="from-icon-wrap">
                                <i className="bi bi-airplane-fill from-icon" />
                              </span>
                                From
                            </label>

                            <input
                                type="text"
                                className="field-input"
                                placeholder="From airport or city"
                                value={form.from}
                                onChange={(e) =>
                                    setForm((f) => ({ ...f, from: e.target.value }))
                                }
                            />
                        </div>

                        {/* TO */}
                        <div className="field">
                            <label className="field-label">
                                <i className="bi bi-airplane-fill landing-icon" /> To
                            </label>
                            <div className="to-wrapper">
                                <input
                                    type="text"
                                    className="field-input"
                                    placeholder="To airport or city"
                                    value={form.to}
                                    onChange={(e) =>
                                        setForm((f) => ({ ...f, to: e.target.value }))
                                    }
                                />
                                <button
                                    type="button"
                                    className="swap-pill"
                                    onClick={() =>
                                        setForm((f) => ({ ...f, from: f.to, to: f.from }))
                                    }
                                >
                                    <i className="bi bi-arrow-left-right" />
                                </button>
                            </div>
                        </div>

                        {/* DEPARTURE */}
                        <div className="field">
                            <label className="field-label">
                                <i className="bi bi-calendar-event" /> Departure
                            </label>
                            <input
                                id="departureDate"
                                type="date"
                                className="field-input"
                                value={form.departure}
                                onChange={(e) =>
                                    setForm((f) => ({ ...f, departure: e.target.value }))
                                }
                            />
                            {form.departure && (
                                <div className="field-subtext">
                                    {/*{new Date(form.departure).toLocaleDateString(undefined, {*/}
                                    {/*    weekday: "short",*/}
                                    {/*})}*/}
                                </div>
                            )}
                        </div>



                        {/* Return */}
                        {/* Return – only show when Round Trip is selected */}
                        {form.trip === "roundtrip" && (
                            <div className="field">
                                <label className="field-label">
                                    <i className="bi bi-calendar-event" /> Return
                                </label>
                                <input
                                    id="returnDate"
                                    type="date"
                                    className="field-input"
                                    value={form.return}
                                    onChange={(e) =>
                                        setForm((f) => ({ ...f, return: e.target.value }))
                                    }
                                />
                                {form.return && (
                                    <div className="field-subtext">
                                        {new Date(form.return).toLocaleDateString(undefined, {
                                            weekday: "short",
                                        })}
                                    </div>
                                )}
                            </div>
                        )}


                        {/* Travellers & Class */}
                        <div className="field">
                            <label className="field-label">
                                <i className="bi bi-people-fill" /> Travellers &amp; Class
                            </label>
                            <button
                                type="button"
                                className={`trav-main ${showDropdown ? "open" : ""}`}
                                onClick={() => setShowDropdown((v) => !v)}
                            >
                                <span>{totalTravellers} Person</span>
                                <span className="label-muted">{cabin}</span>
                                <i className="bi bi-caret-down-fill ms-2" />
                            </button>


                            {showDropdown && (
                                <div className="traveler-dropdown">
                                    <div className="traveler-row">
                                        <span className="trav-title">Adults (12+ Yrs)</span>
                                        <div className="trav-controls">
                                            <button type="button" className="add" onClick={() => handleTravelers("adults", -1)}>-</button>
                                            <span>{travelers.adults}</span>
                                            <button type="button" className="sub" onClick={() => handleTravelers("adults", 1)}>+</button>
                                        </div>
                                    </div>
                                    <div className="traveler-row">
                                        <span className="trav-title">Children (2-12 Yrs)</span>
                                        <div className="trav-controls">
                                            <button type="button" onClick={() => handleTravelers("children", -1)}>-</button>
                                            <span>{travelers.children}</span>
                                            <button type="button" onClick={() => handleTravelers("children", 1)}>+</button>
                                        </div>
                                    </div>
                                    <div className="traveler-row">
                                        <span className="trav-title">Infants (0-2 Yrs)</span>
                                        <div className="trav-controls">
                                            <button type="button" onClick={() => handleTravelers("infants", -1)}>-</button>
                                            <span>{travelers.infants}</span>
                                            <button type="button" onClick={() => handleTravelers("infants", 1)}>+</button>
                                        </div>
                                    </div>
                                    <div className="cabin-select">
                                        <span className="trav-title">Cabin Class</span>
                                        <select
                                            value={cabin}
                                            onChange={(e) => setCabin(e.target.value)}
                                        >
                                            <option>Economy</option>
                                            <option>Premium Economy</option>
                                            <option>Business</option>
                                            <option>First Class</option>
                                        </select>
                                    </div>
                                    <div className="trav-actions">
                                        <button
                                            type="button"
                                            className="btn-cancel"
                                            onClick={() => setShowDropdown(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            className="btn-apply"
                                            onClick={() => setShowDropdown(false)}
                                        >
                                            Apply
                                        </button>
                                    </div>

                                </div>
                            )}
                        </div>
                    </form>

                    {/* SEARCH BUTTON FULL WIDTH */}
                    <button className="search-btn" type="submit">
                        <i className="bi bi-search" /> Search Flights
                    </button>
                </div>
            </div>
        </section>
    );
}
