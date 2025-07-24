export const Footer = () => {
    return (
        <footer className="section-footer">
            <div className="footer-container container">
                <div className="content_1">
                    <img src="/ct-logo1.png" alt="ct-logo1" className="site-logo" />
                    <p>Welcome to Thapa EcomStore, your ultimate destination for cutting-edge gadgets!</p>
                    <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
                </div>
                <div className="content_2">
                    <h4>EXPLORE</h4>
                    <a href="/movie">Latest Movies</a>
                    <a href="/movie">Top Rated</a>
                    <a href="/movie">Genres</a>
                    <a href="/movie">Upcoming</a>
                </div>
                <div className="content_3">
                    <h4>EXPERIENCE</h4>
                    <a href="/about">About Us</a>
                    <a href="/contact" target="_blank" rel="noopener noreferrer">Contact</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">How to Watch</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Terms & Privacy</a>
                </div>
                <div className="content_4">
                    <h4>NEWSLETTER</h4>
                    <p>
                        Subscribe to get updates on <br />
                        new releases, promos & more!
                    </p>
                    <div className="footer-newsletter">
                        <input type="email" placeholder="Your Email" />
                        <i className="bx bx-envelope"></i>
                    </div>
                    <hr />
                </div>
            </div>
            <div className="f-design">
                <div className="f-design-txt">
                    <p>Design and Code by Thapa Technical</p>
                </div>
            </div>
        </footer >
    );
};