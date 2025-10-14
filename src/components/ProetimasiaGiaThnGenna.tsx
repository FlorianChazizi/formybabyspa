import proetimasiagennas from "../assets/Προετοιμασία για τον τοκετό.jpg"; // replace with your image
import "../styles/party.css";
import ContactForm from "./Contact-form";
import BubblesBackground from "./BubblesBackground";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function ProetimasiaGiaThnGenna() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className="service-page">
            {/* Hero Section */}
            <div className="hero">
                <img src={proetimasiagennas} alt="Baby Spa Fit For Birth" loading="lazy" />
                <div className="hero-overlay">
                    <h1>Προετιμασία για την Γέννα</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="content">
                <h2>Προετοιμαστείτε για τη γέννα με σιγουριά και

                    αυτοπεποίθηση</h2>
                <p>Αν περιμένετε το μωρό σας και θέλετε να νιώθετε έτοιμες να το υποδεχθείτε με
                    σιγουριά και γαλήνη, τα μαθήματα προετοιμασίας τοκετού είναι εδώ για εσάς.
                    Μέσα από μια τρυφερή και ουσιαστική διαδικασία, θα μάθετε να εμπιστεύεστε το
                    σώμα σας, να κατανοείτε τις αλλαγές που βιώνετε και να συνδέεστε βαθύτερα με
                    το μωρό σας.</p>
                <p>Ανεξάρτητα από τον τρόπο που έχετε επιλέξει να γεννήσετε, φυσιολογικά, με
                    καισαρική ή στο σπίτι, το πρόγραμμα θα σας καθοδηγήσει με φροντίδα και
                    ασφάλεια σε κάθε στάδιο, ώστε η εμπειρία της γέννας να γίνει μια στιγμή
                    δύναμης, ηρεμίας και αγάπης.</p>
                <p>Τι θα μάθετε στα μαθήματά μας:</p>
                <ul>
                    <li>
                        τις φυσικές αλλαγές της εγκυμοσύνης και πώς να φροντίζετε εσάς και το
                        μωρό σας
                    </li>
                    <li>
                        τεχνικές χαλάρωσης και ανακούφισης του πόνου
                    </li>
                    <li>
                        τα στάδια του τοκετού και τα πρώτα σημάδια της έναρξής του
                    </li>
                    <li>
                        πρακτικές συμβουλές για τις πρώτες μέρες και εβδομάδες με το νεογέννητο
                    </li>
                </ul>
                <p>
                    Στόχος του προγράμματος είναι να νιώσετε ενημερωμένες, ήρεμες και γεμάτες
                    αυτοπεποίθηση, έτοιμες να ζήσετε τη γέννα ως μια εμπειρία εμπιστοσύνης και
                    τρυφερότητας.
                </p>
                <p>Το πρόγραμμα προετοιμασίας τοκετού υλοποιείται από τις μαίες Olympian
                    Midwives, μέλη του δικτύου Starbirth, με εμπειρία στη φυσιολογική εγκυμοσύνη,
                    τον τοκετό και τη φροντίδα της νέας μητέρας.
                </p>
            </div>

            <BubblesBackground />
            <ContactForm />
        </div>
    );
}
