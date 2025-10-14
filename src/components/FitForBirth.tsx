import FirForBirth from "../assets/Fit for birth 2.jpg"; // replace with your image
import "../styles/party.css";
import ContactForm from "./Contact-form";
import BubblesBackground from "./BubblesBackground";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function FitForBirth() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className="service-page">
            {/* Hero Section */}
            <div className="hero">
                <img src={FirForBirth} alt="Baby Spa Fit For Birth" loading="lazy" />
                <div className="hero-overlay">
                    <h1>Fit For Birth</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="content">
                <h2>Fit For Birth</h2>
                <p>
                    Η εγκυμοσύνη είναι μια όμορφη, μοναδική περίοδος, γεμάτη αλλαγές,
                    συναισθήματα και προσμονή. Το Fit for Birth είναι ένα απαλό ταξίδι ευεξίας,
                    σχεδιασμένο με αγάπη για να σας συνοδεύσει σε αυτή τη διαδρομή.</p>

                <p>Μέσα από κίνηση, αναπνοή, χαλάρωση και χαρά, το σώμα και το μωρό σας
                    συντονίζονται αρμονικά, ενώ εσείς μαθαίνετε να εμπιστεύεστε τη δύναμη και τη
                    σοφία του σώματός σας.</p>

                <p>
                    Κάθε συνάντηση είναι διαφορετική, άλλοτε ήρεμη και γειωμένη, άλλοτε γεμάτη
                    ζωντάνια και χαμόγελα, πάντα όμως με απόλυτο σεβασμό στις ανάγκες της
                    εγκυμοσύνης.
                </p>
                <p>Το πρόγραμμα υλοποιείται από τις Olympian Midwives, μαίες με εξειδίκευση στη
                    φυσιολογική εγκυμοσύνη, τον τοκετό και την κίνηση για εγκύους. Με τη φροντίδα
                    και την εμπειρία τους, θα νιώσετε ασφαλείς, υποστηριγμένες και συνδεδεμένες, με
                    το σώμα σας, το μωρό σας και άλλες μέλλουσες μαμάδες.</p>

                <p>Το πρώτο μάθημα είναι δοκιμαστικό, μια γλυκιά ευκαιρία να γνωριστούμε, να
                    χαλαρώσετε και να δείτε πώς μπορεί η άσκηση να γίνει κομμάτι της
                    προετοιμασίας σας για τη γέννηση.</p>
                <p>Αγκαλιάστε τη δύναμη, την ηρεμία και τη χαρά της εγκυμοσύνης.
                    Δηλώστε συμμετοχή και ελάτε να κινηθούμε μαζί, με αγάπη, φροντίδα και
                    εμπιστοσύνη στη ζωή που μεγαλώνει μέσα σας.</p>

            </div>

            <BubblesBackground />
            <ContactForm />
        </div>
    );
}
