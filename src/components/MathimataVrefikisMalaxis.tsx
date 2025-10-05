import vrefiki from "../assets/βρεφική μάλαξη 1.jpg"; // replace with your image
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
                <img src={vrefiki} alt="Baby Spa Fit For Birth" loading="lazy" />
                <div className="hero-overlay">
                    <h1>Μαθήματα Βρεφικής Μάλαξης</h1>
                </div>
            </div>  

            {/* Content Section */}
            <div className="content">
                <h2>Μαθήματα Βρεφικής Μάλαξης</h2>
                <p>Η βρεφική μάλαξη είναι πολλά περισσότερα από μια τεχνική· είναι ένας μοναδικός τρόπος
                    επικοινωνίας ανάμεσα στον γονιό και το μωρό του. Μέσα από την απαλότητα της αφής, το μωρό
                    νιώθει ασφάλεια, αγάπη και φροντίδα, ενώ ταυτόχρονα ωφελείται σωματικά και ψυχικά.</p>
                <p>
                    Στο <b>For My Baby Spa</b> προσφέρουμε ειδικά διαμορφωμένα μαθήματα βρεφικής μάλαξης για
                    γονείς, με στόχο:
                </p>
                <ul>
                    <li>
                        Να ενδυναμώσετε τον δεσμό με το μωρό σας.
                    </li>
                    <li>
                        Να μάθετε τεχνικές που ανακουφίζουν από κολικούς, δυσφορία και ανησυχία.
                    </li>
                    <li>
                        Να στηρίξετε την ανάπτυξη, τον ύπνο και τη χαλάρωση του μωρού.
                    </li>
                    <li>
                        Να βρείτε στιγμές ηρεμίας και ουσιαστικής σύνδεσης στην καθημερινότητά σας.
                    </li>
                </ul>
                <p>
                    Οι συναντήσεις πραγματοποιούνται σε έναν ήρεμο και φιλόξενο χώρο, όπου οι γονείς
                    καθοδηγούνται βήμα-βήμα από πιστοποιημένο ειδικό. Η διαδικασία είναι απλή, ευχάριστη και
                    προσαρμοσμένη στις ανάγκες κάθε μωρού.
                </p>
                <p>
                    Αγκαλιάστε τη δύναμη της αφής και χαρίστε στο μωρό σας το πιο πολύτιμο δώρο: <b>την αγάπη
                        σας μέσα από την επαφή</b>.</p>
            </div>

            <BubblesBackground />
            <ContactForm />
        </div>
    );
}
