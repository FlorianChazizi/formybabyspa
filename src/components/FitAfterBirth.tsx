import familytub from "../assets/Fit after birth.jpg"; // replace with your image
import "../styles/party.css";
import ContactForm from "./Contact-form";
import BubblesBackground from "./BubblesBackground";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function FitAfterBirth() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className="service-page">
            {/* Hero Section */}
            <div className="hero">
                <img src={familytub} alt="Baby Spa Fit After Birth" loading="lazy" />
                <div className="hero-overlay">
                    <h1>Fit After Birth</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="content">
                <h2>Επανασυνδεθείτε με το σώμα σας μετά τη γέννα</h2>
                <p>
                    Μόλις γεννήσατε και θέλετε να επιστρέψετε σταδιακά στη φόρμα σας; <br />
                    Το Fit after Birth είναι το ιδανικό μάθημα για νέες μαμάδες που θέλουν να
                    αφιερώσουν χρόνο στον εαυτό τους, να ενδυναμώσουν το σώμα τους και να
                    νιώσουν ξανά δυνατές.</p>

                <p>Σε αυτό το μάθημα έρχεστε μόνες σας - χωρίς το μωρό! Μία ώρα μόνο για εσάς,
                    για να επικεντρωθείτε στην ανάρρωση και στη σωματική σας ενδυνάμωση. Οι
                    ασκήσεις είναι ειδικά σχεδιασμένες για τη μεταγεννητική περίοδο, με στόχο:</p>
                <ul>
                    <li>την ενδυνάμωση του πυελικού εδάφους</li>
                    <li>την τόνωση των κοιλιακών μυών</li>
                    <li>
                        τη βελτίωση της στάσης του σώματος
                    </li>
                </ul>

                <p>
                    Ξεκινάμε με απαλές κινήσεις και σταδιακά αυξάνουμε την ένταση, πάντα
                    σεβόμενες τους ρυθμούς του σώματός σας. Είναι η ευκαιρία να χαλαρώσετε, να
                    ξανασυνδεθείτε με τον εαυτό σας και να νιώσετε ξανά δυνατές και γεμάτες
                    ενέργεια.
                </p>
                <p>Οι έμπειρες μαίες της Olympian Midwives, ειδικευμένες στη φυσιολογική
                    εγκυμοσύνη και τοκετό, εκπαιδευμένες στη postnatal γιόγκα και γυμναστική.</p>

                <p>Οχτώ μαθήματα, διάρκειας μίας ώρας το καθένα.
                    Το πρώτο μάθημα είναι δοκιμαστικό.</p>
                <p>Συνιστάται να ξεκινήσετε 8 εβδομάδες μετά από φυσιολογικό τοκετό ή 12
                    εβδομάδες μετά από καισαρική τομή, πάντα με την έγκριση του γιατρού σας.</p>
                <p>Στο For my Baby Spa, Κατερίνη.</p>
                <p>Αφιερώστε μία ώρα μόνο για εσάς - το σώμα σας θα σας ευγνωμονεί! <br />
                    Δηλώστε συμμετοχή σήμερα και νιώστε ξανά γεμάτες δύναμη και αυτοπεποίθηση.</p>
            </div>

            <BubblesBackground />
            <ContactForm />
        </div>
    );
}
