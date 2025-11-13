import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import hydroBanner from "../assets/ksemiroma2.jpg";
import "../styles/hydrotherapy.css";
import ContactForm from "./Contact-form";
import BubblesBackground from "./BubblesBackground";
import ksemiroma1 from '../assets/ksemiroma1.jpeg';
import ksemiroma2 from '../assets/ksemiroma2.jpg';
import ksemiroma3 from '../assets/ξεμύρωμα (Large).jpeg';
export default function Ksemiroma() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className="service-page">
            <div className="hero">
                <img src={hydroBanner} alt="Ksemiroma" loading="lazy" />
                <div className="hero-overlay">
                    <h1>ΞΕΜΥΡΩΜΑ </h1>
                </div>
            </div>

            <div className="content">
                <h2>Είσαι μαμά που βαφτίζεις το μωράκι σου ή νονά;🫧</h2>
                <p>
                    Ξέρεις τι είναι το <b>ξεμύρωμα;</b>
                </p>
                <img
                    src={ksemiroma1}
                    alt="Ξεμύρωμα"
                    className="photo"
                />
                <p>
                    Σύμφωνα με την ορθόδοξη παράδοση, τρεις μέρες μετά τη βάπτιση, οι νονοί συνηθίζεται να είναι παρόντες στο πρώτο μπάνιο του παιδιού.
                    Μια ιερή στιγμή <b>Σεβασμού</b> και <b>Πίστης</b>. Το νερό αυτού του μπάνιου, γεμάτο <b>Ευλογία</b>, πρέπει να χυθεί στη θάλασσα, ως σύμβολο αγνότητας και συνέχειας της θείας χάρης.
                </p>
                <p>
                    Το <b>πλύσιμο των μύρων</b>, που γίνεται με <b>Σεβασμό</b> και <b>ευλάβεια</b>,
                    σηματοδοτεί τη μετάβαση από την ιερότητα της βάπτισης στην καθημερινή ζωή.
                    Καθαρίζει το σώμα, αλλά αφήνει ανεξίτηλη τη χάρη που έχει πια χαραχθεί στην ψυχή του παιδιού,
                    μια πράξη γεμάτη <b>Αγάπη</b>, απλότητα και παράδοση.
                </p>
                <img
                    src={ksemiroma3}
                    alt="Ξεμύρωμα"
                    className="photo"
                />
                <p>
                    Κι εμείς είμαστε εδώ για να σας προσφέρουμε μια ολοκληρωμένη εμπειρία φροντίδας και συγκίνησης.
                    Σε ένα σκηνικό γεμάτο φως, με όμορφα μπαλόνια, μπουφέ και ήχους γαλήνης, το μωρό σας απολαμβάνει τη βρεφική υδροθεραπεία και το βρεφικό μασάζ,
                    ενώ εσείς ζείτε αυτή τη μοναδική στιγμή που θα μείνει για πάντα χαραγμένη στην καρδιά σας. 💖
                </p>
                <p>
                    Γιατί κάθε σταγόνα νερού είναι μια <b>Ευλογία</b>, κάθε βλέμμα ένα μήνυμα <b>Αγάπης</b>, κάθε άγγιγμα μια πράξη <b>Σεβασμού</b>, και κάθε χαμόγελο μια απόδειξη <b>Πίστης</b> στο θαύμα της ζωής.
                </p>
                <img
                    src={ksemiroma2}
                    alt="Ξεμύρωμα"
                    className="photo"
                />
            </div>
            <BubblesBackground />
            <ContactForm />
        </div>
    );
}
