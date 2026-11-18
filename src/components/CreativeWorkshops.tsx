import workshopImg from "../assets/workshop.jpg"; // TODO: αλλάξτε με φωτογραφία από workshop
import "../styles/party.css";
import ContactForm from "./Contact-form";
import BubblesBackground from "./BubblesBackground";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const workshopItems = [
    { icon: "🎨", text: "Χειροτεχνίες" },
    { icon: "✨", text: "Θεματικές κατασκευές" },
    { icon: "🎄", text: "Εποχιακά workshops" },
    { icon: "🎀", text: "Spa Party activities" },
    { icon: "💖", text: "Ειδικές δημιουργίες" },
];

export default function CreativeWorkshops() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="service-page">
            {/* Hero Section */}
            <div className="hero">
                <img src={workshopImg} alt="Creative Workshops - For My Baby Spa" loading="lazy" />
                <div className="hero-overlay">
                    <h1>Creative Workshops</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="content">
                <h2>Μικρά χεράκια • Μεγάλη φαντασία</h2>

                <p className="cw-lead">
                    Στο <b>For My Baby Spa</b> η διασκέδαση γίνεται δημιουργία!
                </p>
                <p>
                    Μέσα από θεματικά workshops, τα παιδιά ζωγραφίζουν, κατασκευάζουν,
                    πειραματίζονται και αφήνουν τη φαντασία τους ελεύθερη.
                </p>
                <p>
                    Από εποχιακές δημιουργίες μέχρι ειδικά workshops για Spa Parties, κάθε
                    δραστηριότητα είναι μια ευκαιρία για <b>παιχνίδι, έκφραση και
                    δημιουργικότητα</b>.
                </p>

                <ul className="cw-values">
                    {workshopItems.map((item) => (
                        <li key={item.text}>
                            <span className="cw-icon" aria-hidden="true">{item.icon}</span>
                            <span>{item.text}</span>
                        </li>
                    ))}
                </ul>

                <p className="cw-closing">Μικρά χεράκια, μεγάλες δημιουργίες!</p>
            </div>

            <BubblesBackground />
            <ContactForm />
        </div>
    );
}