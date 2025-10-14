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
                    Μόλις γίνατε μαμά και τώρα ήρθε η στιγμή να ξαναβρείτε τον εαυτό σας.
                    Το <b>Fit after Birth</b> είναι ένας χώρος φροντίδας, ξεκούρασης και ανανέωσης,
                    φτιαγμένος ειδικά για εσάς.
                </p>
                <p>
                    Εδώ, αφιερώνετε λίγο χρόνο μόνο στον εαυτό σας. <br />
                    Μαθαίνετε να ακούτε ξανά το σώμα σας, να το ενδυναμώνετε με απαλές,
                    στοχευμένες κινήσεις και να του δίνετε την προσοχή και την αγάπη που του αξίζει.
                </p>

                <p>
                    Με την καθοδήγηση των <b>μαιών της Olympian Midwives</b>, που συνοδεύουν τις
                    γυναίκες με γνώση και ευαισθησία σε κάθε στάδιο της μητρότητας, θα ξαναβρείτε
                    τη δύναμη, τη στάση και την αυτοπεποίθησή σας.
                </p>

                <p>
                    Μέσα από προσεκτικά σχεδιασμένες ασκήσεις, θα νιώσετε το σώμα σας να
                    αναζωογονείται και την ενέργειά σας να επιστρέφει. <br />
                    Είναι η δική σας στιγμή, μια ώρα για να αναπνεύσετε, να χαλαρώσετε και να
                    νιώσετε ξανά ολόκληρη.
                </p>

                <p>
                    Αφιερώστε αυτόν τον χρόνο στον εαυτό σας. <br />
                    Το σώμα σας θα σας ευγνωμονεί.
                </p>
            </div>

            <BubblesBackground />
            <ContactForm />
        </div>
    );
}
