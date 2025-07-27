import { MapPin, Car, Phone, Mail, Clock } from "lucide-react";
import '../styles/contact-section.css';

export default function ContactSection() {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Visit Our Spa</h2>
                    <p className="section-description">
                        Located in the heart of the city, our spa offers easy access and ample parking for your convenience
                    </p>
                </div>

                <div className="grid-layout">
                    {/* Map Section */}
                    <div className="map-card">
                        <h3 className="card-title">Θα μας βρείτε</h3>
                        <div className="map-placeholder">
                            <div className="map-info">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1522.1603620035582!2d22.51100494038684!3d40.26862518706053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13580345b209727b%3A0x899a118463222fbd!2sFor%20My%20Baby%20Spa%20Katerini%20(%20By%20Anastasia%20Veloni%20)!5e0!3m2!1sen!2sgr!4v1753631719067!5m2!1sen!2sgr" width="600" height="450"   loading="lazy" ></iframe>
                            </div>
                        </div>

                        <div className="info-list">
                            <div className="info-item">
                                <MapPin className="icon-small" />
                                <div>
                                    <p className="info-label">Διεύθυνση</p>
                                    <p className="info-text">25ης Μαρτίου 46, Κατερίνη 601 00</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <Car className="icon-small" />
                                <div>
                                    <p className="info-label">Parking</p>
                                    <p className="info-text">Διαθέσιμο Parking</p>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* Contact Info and Form */}
                    <div className="right-column">
                        <div className="contact-card">
                            <h3 className="card-title">Στοιχεία επικοινωνίας</h3>
                            <div className="info-list">
                                <div className="info-item">
                                    <Phone className="icon-small" />
                                    <div>
                                        <p className="info-label">Τηλέφωνο</p>
                                        <a className="info-text" href="tel:+306931022111">+30 693 102 2111</a>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <Mail className="icon-small" />
                                    <div>
                                        <p className="info-label">Email</p>
                                        <a className="info-text" href="mailto:formybabyspakaterini@gmail.com">formybabyspakaterini@gmail.com</a>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <Clock className="icon-small" />
                                    <div>
                                        <p className="info-label">Hours</p>
                                        <p className="info-text">Δευτ-Παρα: 9:00 ΠΜ - 21:00 ΜΜ</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="contact-form-card">
              <h3 className="card-title">Quick Contact</h3>
              <form className="contact-form">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email Address" />
                <input type="tel" placeholder="Phone Number" />
                <textarea placeholder="Message" rows={4}></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
