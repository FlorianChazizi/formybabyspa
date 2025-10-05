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
                <h2>Κίνηση και ευεξία για μέλλουσες μαμάδες.</h2>
                <p>
                    Είστε έγκυος και θέλετε να κρατήσετε το σώμα σας σε φόρμα, ενώ
                    προετοιμάζεστε για τον τοκετό; Το Fit for Birth είναι το μάθημα που συνδυάζει
                    άσκηση, χαλάρωση και διασκέδαση, ειδικά σχεδιασμένο για μέλλουσες μαμάδες.</p>

                <p>Το πρόγραμμα ξεχωρίζει γιατί εναλλάσσει χαλαρές και ενεργητικές συνεδρίες, για
                    να έχετε λίγο από όλα:</p>
                <ul>
                    <li>Σε ήπιες εβδομάδες εστιάζουμε σε ασκήσεις γιόγκα, τεχνικές αναπνοής,
                        χαλάρωση και στοχευμένες κινήσεις που βοηθούν το μωρό να πάρει την
                        καλύτερη θέση για τον τοκετό.</li>
                    <li>Την επόμενη εβδομάδα ανεβάζουμε τη διάθεση με χορό, μουσική και
                        διασκεδαστική προπόνηση, πάντα ασφαλή και προσαρμοσμένη για εγκύους.</li>
                </ul>

                <p>
                    Το μάθημα οδηγείται από τις Olympian Midwives, μαίες με εξειδίκευση στη
                    φυσιολογική εγκυμοσύνη και τοκετό, εκπαιδευμένες στη γιόγκα και στη
                    γυμναστική για εγκύους.
                </p>
                <p>Κάθε Τρίτη στις 16:00 - 15:00 <br />
                    For My Baby Spa, Κατερίνη</p>

                <p>Από την 12η εβδομάδα της εγκυμοσύνης μέχρι τις τελευταίες μέρες πριν τον
                    τοκετό. Απαιτείται έγκριση από τον γιατρό σας ή επιβεβαίωση από τις μαίες μας
                    ότι μπορείτε να συμμετάσχετε με ασφάλεια.</p>
                <p>Το πρώτο μάθημα είναι δοκιμαστικό, για να γνωριστούμε και να δείτε αν ταιριάζει
                    στις ανάγκες σας.</p>
                <p>Ανακαλύψτε πώς η άσκηση μπορεί να γίνει ευχάριστη, χαλαρωτική και
                    ταυτόχρονα προετοιμαστική για τον τοκετό σας.</p>
                <p>Δηλώστε συμμετοχή σήμερα, ανυπομονούμε να σας καλωσορίσουμε!</p>
            </div>

            <BubblesBackground />
            <ContactForm />
        </div>
    );
}
