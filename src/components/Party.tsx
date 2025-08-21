import partyImg from "../assets/party3.jpg"; // replace with your image
import "../styles/party.css";
import ContactForm from "./Contact-form";
import BubblesBackground from "./BubblesBackground";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function PartyPage() {
     const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
  return (
    <div className="service-page">
      {/* Hero Section */}
      <div className="hero">
        <img src={partyImg} alt="Baby Spa Party" />
        <div className="hero-overlay">
          <h1>Party γενεθλίων στο Baby Spa</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h2>Τι είναι το Baby Spa Party;</h2>
        <p>
          Θέλετε να γιορτάσετε τα γενέθλια ή μία ξεχωριστή στιγμή του μωρού σας 
          με έναν διαφορετικό και αξέχαστο τρόπο; 
          Το Baby Spa Party είναι η ιδανική επιλογή!
          Μπορείτε να μοιραστείτε την εμπειρία με φίλους και συγγενείς 
          σε έναν μοναδικό χώρο που συνδυάζει παιχνίδι, χαλάρωση και διασκέδαση.
        </p>

        <h2>Τι περιλαμβάνει;</h2>
        <ul>
          <li>Ειδικά διαμορφωμένο χώρο με στολισμό</li>
          <li>Χρήση των μπανιέρων υδροθεραπείας για τα μωρά</li>
          <li>Απαλή μουσική και φιλικό περιβάλλον</li>
          <li>Μασάζ μωρού με τη βοήθεια ειδικών</li>
          <li>Χώρο για γονείς και καλεσμένους</li>
          <li>Δυνατότητα προσαρμογής με θεματικό στολισμό</li>
        </ul>
      </div>

      {/* Background & Contact */}
      <BubblesBackground />
      <ContactForm />
    </div>
  );
}
