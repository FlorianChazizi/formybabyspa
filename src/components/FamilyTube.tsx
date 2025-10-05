import familytub from "../assets/familytub.jpeg"; // replace with your image
import "../styles/party.css";
import ContactForm from "./Contact-form";
import BubblesBackground from "./BubblesBackground";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function FamilyTub() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className="service-page">
            {/* Hero Section */}
            <div className="hero">
                <img src={familytub} alt="Baby Spa Family Tub" loading="lazy" />
                <div className="hero-overlay">
                    <h1>Family Tub</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="content">
                <h2>Για όλη την οικογένεια!</h2>
                <p>
                    Η υπηρεσία <b>Family Tub</b> στο For My Baby Spa δεν είναι μόνο για μωράκια, αλλά
                    και για παιδιά μεγαλύτερης ηλικίας, και φυσικά για τους γονείς που θέλουν να
                    ζήσουν αυτήν την όμορφη εμπειρία μαζί τους! Πρόκειται για μια μοναδική στιγμή
                    χαλάρωσης και παιχνιδιού μέσα στο νερό, που φέρνει την οικογένεια πιο κοντά
                    και δημιουργεί αξέχαστες αναμνήσεις.</p>

                <p>Το <b>Family Tub</b> είναι επίσης μια υπέροχη ιδέα για δύο φίλες, ένας ξεχωριστός
                    τρόπος να περάσουν χρόνο μαζί, να απολαύσουν το νερό και να μοιραστούν
                    χαρούμενες στιγμές.</p>
                <p>Για ακόμη περισσότερη μαγεία, μπορείτε να συνδυάσετε την εμπειρία με την
                    υπηρεσία <b>Little Princess</b>, που προσφέρει στα παιδιά μια αίσθηση παραμυθιού και
                    ξεχωριστής φροντίδας.</p>
                <p>Θέλετε να ζήσετε κι εσείς την εμπειρία; </p>
                <p>
                    Ρωτήστε μας για τα ειδικά πακέτα <b>Family Tub</b> και βρείτε αυτό που ταιριάζει
                    καλύτερα στις ανάγκες σας!</p>
            </div>

            <BubblesBackground />
            <ContactForm />
        </div>
    );
}
