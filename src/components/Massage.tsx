import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import massageImage from "../assets/massage.jpeg";
import "../styles/massage.css";
import ContactForm from "./Contact-form";
import BubblesBackground from "./BubblesBackground";

export default function MassagePage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="service-page">
      <div className="hero">
        <img src={massageImage} alt="Βρεφικό Μασάζ" />
        <div className="hero-overlay">
          <h1>Βρεφικό Μασάζ</h1>
        </div>
      </div>

      <div className="content">
        <h2>Τι είναι το Βρεφικό Μασάζ;</h2>
        <p>
          Το βρεφικό μασάζ είναι μια ήπια και ασφαλής πρακτική που ενισχύει τη σύνδεση μεταξύ γονέα και παιδιού μέσω του απαλού αγγίγματος. Βοηθά στην ανάπτυξη της αίσθησης ασφάλειας και εμπιστοσύνης του μωρού.
        </p>

        <h2>Οφέλη για το Μωρό</h2>
        <ul>
          <li>Βελτίωση του ύπνου και μείωση της ανησυχίας.</li>
          <li>Ανακούφιση από κολικούς και δυσκοιλιότητα.</li>
          <li>Ενίσχυση του ανοσοποιητικού συστήματος.</li>
          <li>Ενίσχυση της κινητικής ανάπτυξης και της συναισθηματικής ευημερίας.</li>
        </ul>

        <h2>Οφέλη για τον Γονέα</h2>
        <ul>
          <li>Ενίσχυση της σύνδεσης και του δεσμού με το παιδί.</li>
          <li>Μείωση του άγχους και της κατάθλιψης μετά τον τοκετό.</li>
          <li>Αύξηση της εμπιστοσύνης στις γονεϊκές ικανότητες.</li>
        </ul>

        <h2>Πρακτικές Συμβουλές</h2>
        <ul>
          <li>Χρησιμοποιήστε ήπια, κυκλικά χτυπήματα με τα δάχτυλα ή τις παλάμες.</li>
          <li>Επιλέξτε ήρεμο περιβάλλον και κατάλληλη ώρα για το μασάζ.</li>
          <li>Αποφύγετε το μασάζ μετά από γεύμα ή όταν το μωρό είναι υπερβολικά κουρασμένο.</li>
        </ul>
      </div>

      <BubblesBackground />
      <ContactForm />
    </div>
  );
}
