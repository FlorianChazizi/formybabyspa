import mathimatathilasmou from "../assets/Μαθημα θημασού.jpg"; // replace with your image
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
                <img src={mathimatathilasmou} alt="Baby Spa Fit For Birth" loading="lazy" />
                <div className="hero-overlay">
                    <h1>Μαθήματα Θηλασμού</h1>
                    
                </div>
            </div>

            {/* Content Section */}
            <div className="content">
                <h2>Μαθήματα Θηλασμού</h2>
<p>
                        Θέλετε να θηλάσετε το μωρό σας με ασφάλεια και αυτοπεποίθηση;
                        Τα μαθήματα θηλασμού προσφέρουν όλες τις γνώσεις και την πρακτική εξάσκηση που
                        χρειάζεστε για έναν επιτυχημένο και άνετο θηλασμό.
                    </p>
                    <p>
                        Ο φυσικός θηλασμός προσφέρει σημαντικά οφέλη τόσο για εσάς όσο και για το μωρό σας, αλλά
                        στην αρχή μπορεί να φαίνεται δύσκολος, καθώς πολλά είναι άγνωστα. Γι’ αυτό είναι πολύ
                        σημαντικό να είστε προετοιμασμένες και να παρακολουθήσετε ένα μάθημα προετοιμασίας.
                    </p>
                    <p>Στο μάθημα θα μάθετε:</p>
                    <ul>
                        <li>
                            Τη φυσιολογική διαδικασία του θηλασμού τις πρώτες μέρες μετά τον τοκετό.
                        </li>
                        <li>
                            Τα πιο συχνά προβλήματα που μπορεί να προκύψουν και πώς να τα αντιμετωπίσετε.
                        </li>
                        <li>
                            Στο πρακτικό μέρος, θα εξασκηθείτε σε διαφορετικές στάσεις θηλασμού και θα μάθετε
                            πώς να βοηθάτε το μωρό σας να προσκολληθεί σωστά – κάτι που κάνει όλη τη διαφορά
                            για έναν άνετο και επιτυχημένο θηλασμό.
                        </li>
                    </ul>
                    <p>
                        Με την κατάλληλη προετοιμασία και υποστήριξη, ο θηλασμός μπορεί να γίνει μια φυσική,
                        όμορφη και χαρούμενη εμπειρία για εσάς και το μωρό σας.
                    </p>
                    <p>
                        Τα μαθήματα προσφέρονται από τις <b>μαίες Olympian Midwives</b>, μέλη του δικτύου <b>Starbirth</b>,
                        ειδικούς στη φυσιολογική εγκυμοσύνη και τον τοκετό.
                    </p>
                    <ul>
                        <li>
                            Κατάλληλο από την <b>25η εβδομάδα της εγκυμοσύνης</b>
                        </li>
                        <li>
                            Διάρκεια: <b>2 ώρες</b>
                        </li>
                        <li>
                            Η συμμετοχή του συντρόφου σας είναι <b>προτιμώμενη αλλά όχι υποχρεωτική</b>
                        </li>
                    </ul>
            </div>

            <BubblesBackground />
            <ContactForm />
        </div>
    );
}
