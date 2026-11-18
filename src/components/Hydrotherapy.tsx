import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import hydroBanner from "../assets/υδροθεραπεία 2.jpg";
import "../styles/hydrotherapy.css";
import ContactForm from "./Contact-form";
import BubblesBackground from "./BubblesBackground";

const experienceItems = [
    { icon: "💧", text: "Ελεύθερη κίνηση μέσα στο νερό" },
    { icon: "🌸", text: "Ήπια εξοικείωση με το υδάτινο στοιχείο" },
    { icon: "👶", text: "Αισθητηριακή εξερεύνηση" },
    { icon: "✨", text: "Κίνηση και παιχνίδι" },
    { icon: "🤍", text: "Μια στιγμή χαλάρωσης" },
    { icon: "🫶", text: "Πολύτιμος χρόνος σύνδεσης γονέα και παιδιού" },
];

export default function HydrotherapyPage() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="service-page">
            <div className="hero">
                <img src={hydroBanner} alt="Baby Spa - Βρεφική Ευεξία στο Νερό" loading="lazy" />
                <div className="hero-overlay">
                    <h1>Baby Spa</h1>
                </div>
            </div>

            <div className="content">
                <h2>Μια ξεχωριστή εμπειρία στο νερό</h2>
                <p>
                    Μια ξεχωριστή εμπειρία σχεδιασμένη για βρέφη και μικρά παιδιά, μέσα σε ένα
                    ήρεμο, ζεστό και προσεγμένο περιβάλλον.
                </p>
                <p>
                    Το <b>Baby Spa</b> δίνει στο μωρό την ευκαιρία να κινηθεί ελεύθερα μέσα στο
                    νερό, να εξερευνήσει το υδάτινο στοιχείο και να απολαύσει μια διαφορετική
                    εμπειρία γεμάτη κίνηση, χαλάρωση και αισθητηριακή εξερεύνηση.
                </p>
                <p>
                    Το νερό, η κίνηση, οι ήρεμοι ήχοι και το προσεγμένο περιβάλλον δημιουργούν
                    μια ξεχωριστή στιγμή που είναι αφιερωμένη αποκλειστικά στο μωρό σας.
                </p>

                <h2>Η εμπειρία Baby Spa</h2>
                <ul className="bs-experience">
                    {experienceItems.map((item) => (
                        <li key={item.text}>
                            <span className="bs-icon" aria-hidden="true">{item.icon}</span>
                            <span>{item.text}</span>
                        </li>
                    ))}
                </ul>
                <p>
                    Κάθε συνεδρία πραγματοποιείται με ιδιαίτερη προσοχή στην{" "}
                    <b>ασφάλεια, την καθαριότητα και την άνεση</b> του παιδιού.
                </p>

                <div className="bs-info-grid">
                    <div className="bs-info-card">
                        <h2>Ηλικίες</h2>
                        <p>
                            Το Baby Spa απευθύνεται σε βρέφη από <b>40 ημερών έως 3 ετών</b>,
                            σύμφωνα με τις προϋποθέσεις της κάθε υπηρεσίας.
                        </p>
                    </div>
                    <div className="bs-info-card">
                        <h2>Τι χρειάζεται να έχετε μαζί σας;</h2>
                        <p>
                            Μια απαλή πετσέτα και, εφόσον χρειάζεται, το γάλα ή το σνακ του
                            μωρού σας.
                        </p>
                    </div>
                </div>

                <p className="bs-closing">
                    Μια μικρή εμπειρία για εκείνο.
                    <br />
                    Μια μεγάλη ανάμνηση για εσάς.
                </p>
            </div>

            <BubblesBackground />
            <ContactForm />
        </div>
    );
}