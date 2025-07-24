import "../App.css"; 

export const About = () => {
    return (
        <section className="about-page">
            <div className="container">
                <h1>About CinemaTap</h1>
                <p className="intro">
                    Welcome to <strong>CinemaTap</strong> — your ultimate destination for everything movies!
                </p>

                <div className="about-content">
                    <div className="about-section">
                        <h2>🎬 Who We Are</h2>
                        <p>
                            CinemaTap is a platform built by movie lovers, for movie lovers. We offer detailed
                            information about movies, trailers, genres, reviews, and direct links to stream or watch
                            legally online. Whether you're into Hollywood blockbusters, indie gems, or international
                            cinema — we've got you covered.
                        </p>
                    </div>

                    <div className="about-section">
                        <h2>📽️ What We Offer</h2>
                        <ul>
                            <li>✔️ Latest Movie Listings with Posters, Ratings & Summaries</li>
                            <li>✔️ Watch Links from Trusted Streaming Services</li>
                            <li>✔️ Upcoming Movie Alerts & Trending Films</li>
                            <li>✔️ Clean, ad-free browsing experience</li>
                        </ul>
                    </div>

                    <div className="about-section">
                        <h2>🌐 Our Mission</h2>
                        <p>
                            We aim to connect film fans with the content they love in the fastest, cleanest, and most
                            reliable way. No fake links. No clickbait. Just real movie info and direct ways to watch
                            or discover what’s next.
                        </p>
                    </div>

                    <div className="about-section">
                        <h2>🤝 Connect With Us</h2>
                        <p>
                            Questions, feedback, or partnership inquiries? Head over to our{" "}
                            <a href="/contact">Contact Page</a>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
