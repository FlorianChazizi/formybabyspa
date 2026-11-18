import familytub from "../assets/familytub.jpeg";
import "../styles/party.css";
import ContactForm from "./Contact-form";
import BubblesBackground from "./BubblesBackground";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const familyItems = [
    { icon: "💧", text: "Νερό" },
    { icon: "🤍", text: "Χαλάρωση" },
    { icon: "🫶", text: "Επαφή" },
    { icon: "✨", text: "Παιχνίδι" },
    { icon: "📸", text: "Όμορφες οικογενειακές αναμνήσεις" },
];

export default function FamilyTub() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="service-page">
            {/* Hero Section */}
            <div className="hero">
                <img src={familytub} alt="Family Tub - For My Baby Spa" loading="lazy" />
                <div className="hero-overlay">
                    <h1>Family Tub</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="content">
                <h2>Μια όμορφη εμπειρία νερού για όλη την οικογένεια</h2>

                <p className="ft-lead">
                    Το <b>Family Tub</b> δεν είναι μόνο για μωράκια.
                </p>
                <p>
                    Είναι μια ξεχωριστή εμπειρία που μπορούν να μοιραστούν παιδιά μεγαλύτερης
                    ηλικίας και οι γονείς τους, μέσα σε ένα όμορφο και προσεγμένο περιβάλλον.
                </p>
                <p>
                    Μια στιγμή για <b>παιχνίδι, χαλάρωση, επαφή και οικογενειακή σύνδεση</b>.
                </p>

                <ul className="ft-values">
                    {familyItems.map((item) => (
                        <li key={item.text}>
                            <span className="ft-icon" aria-hidden="true">{item.icon}</span>
                            <span>{item.text}</span>
                        </li>
                    ))}
                </ul>

                <p className="ft-closing">
                    Γιατί κάποιες από τις πιο όμορφες στιγμές είναι αυτές που μοιραζόμαστε μαζί.
                </p>
            </div>

            <BubblesBackground />
            <ContactForm />
        </div>
    );
}