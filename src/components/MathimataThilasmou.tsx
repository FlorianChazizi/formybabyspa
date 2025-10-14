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
                    Ο θηλασμός είναι μια βαθιά, φυσική και τρυφερή εμπειρία που συνδέει μαμά και
                    μωρό με έναν μοναδικό τρόπο. Παρότι είναι κάτι τόσο φυσικό, πολλές μαμάδες
                    χρειάζονται καθοδήγηση και ενθάρρυνση για να νιώσουν σιγουριά και άνεση στην
                    αρχή αυτού του ταξιδιού.
                </p>
                <p>
                    Στα μαθήματα θηλασμού θα ανακαλύψετε όλα όσα χρειάζεστε για να ξεκινήσετε
                    τον θηλασμό με αυτοπεποίθηση και γαλήνη. Θα μάθετε πώς λειτουργεί ο
                    θηλασμός, πώς να αναγνωρίζετε τις ανάγκες του μωρού σας και πώς να
                    δημιουργείτε τη σωστή θέση και επαφή, ώστε η εμπειρία να είναι όμορφη και
                    ευχάριστη και για τους δυο σας.
                </p>
                <p>Μέσα σε ένα ζεστό και υποστηρικτικό περιβάλλον, οι μαίες Olympian Midwives
                    θα σας καθοδηγήσουν βήμα-βήμα, απαντώντας σε όλες τις απορίες σας και
                    δίνοντάς σας πρακτικές συμβουλές που κάνουν τη διαφορά. Με τη σωστή
                    προετοιμασία και φροντίδα, ο θηλασμός μπορεί να γίνει μια φυσική, γεμάτη αγάπη
                    και χαρά εμπειρία για εσάς και το μωρό σας.</p>

                <p>
                    Τα μαθήματα πραγματοποιούνται από τις μαίες Olympian Midwives, μέλη του
                    δικτύου Starbirth, ειδικούς στη φυσιολογική εγκυμοσύνη, τον τοκετό και τη
                    μεταγεννητική φροντίδα.
                </p>

            </div>

            <BubblesBackground />
            <ContactForm />
        </div>
    );
}
