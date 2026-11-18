import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ksemiromaBanner from "../assets/ksemiroma2.jpg";
import "../styles/party.css";
import ContactForm from "./Contact-form";
import BubblesBackground from "./BubblesBackground";
import ksemiroma1 from "../assets/ksemiroma1.jpeg";
import ksemiroma2 from "../assets/ksemiroma2.jpg";
import ksemiroma3 from "../assets/ξεμύρωμα (Large).jpeg";

const ksemiromaPhotos = [ksemiroma1, ksemiroma3, ksemiroma2];

export default function Ksemiroma() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="service-page">
            <div className="hero">
                <img src={ksemiromaBanner} alt="Ξεμύρωμα - For My Baby Spa" loading="lazy" />
                <div className="hero-overlay">
                    <h1>Ξεμύρωμα</h1>
                </div>
            </div>

            <div className="content">
                <h2>Η παράδοση συναντά τη φροντίδα</h2>

                <p className="ks-lead">
                    Το <b>ξεμύρωμα</b> είναι μια όμορφη παράδοση που συνδέεται με τη βάπτιση και
                    την πρώτη φροντίδα του μωρού μετά από αυτή τη σημαντική ημέρα.
                </p>

                {/* TODO: το κείμενο που στάλθηκε κόβεται εδώ — συμπληρώστε το τέλος της πρότασης */}
                <p>
                    Στο <b>For My Baby Spa</b> δημιουργήσαμε μια ξεχωριστή εμπειρία για το μωρό
                    και την οικογένειά του.
                </p>

                <div className="ks-gallery">
                    {ksemiromaPhotos.map((photo, index) => (
                        <img
                            key={photo}
                            src={photo}
                            alt={`Ξεμύρωμα - φωτογραφία ${index + 1}`}
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>

            <BubblesBackground />
            <ContactForm />
        </div>
    );
}