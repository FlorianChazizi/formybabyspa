import partyImg from "../assets/Spa Party.jpg";
import SpaParty1 from "../assets/SpaPartyImage1.jpeg";
import SpaParty2 from "../assets/SpaPartyImage2.jpeg"
import SpaParty3 from "../assets/SpaPartyImage3.jpeg"
import SpaParty4 from "../assets/SpaPartyImage4.jpg"

import "../styles/party.css";
import ContactForm from "./Contact-form";
import BubblesBackground from "./BubblesBackground";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import party1Image from "../assets/section1.jpeg";    
// import party2Image from "../assets/section2.jpeg";     
// import party3Image from "../assets/section3.jpeg";     
export default function PartyPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="service-page">
      {/* Hero Section */}
      <div className="hero">
        <img src={partyImg} alt="Baby Spa Party" loading="lazy" />
        <div className="hero-overlay">
          <h1>Spa Party</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h2>Παιδικό Spa Party</h2>
        <p>
          Θέλετε να γιορτάσετε τα γενέθλια ή μια ξεχωριστή στιγμή του παιδιού σας
          με έναν μοναδικό και αξέχαστο τρόπο;
          Το Spa Party είναι η ιδανική επιλογή!</p>

        <p>Θέλετε να γιορτάσετε τα γενέθλια ή μια ξεχωριστή στιγμή του παιδιού σας
          με έναν μοναδικό και αξέχαστο τρόπο;
          Το Spa Party είναι η ιδανική επιλογή!</p>

        <p>
          Το Spa Party δεν είναι απλώς μια γιορτή…είναι μια εμπειρία που μένει χαραγμένη
          στην καρδιά!
        </p>
        <p> <b> Ανακαλύψτε τα μοναδικά μας πακέτα: </b></p>
        <h2>Πακέτο 1 “Μαγεία &amp; Χρώμα”</h2>
        <p>Η απόλυτη εμπειρία ομορφιάς και διασκέδασης για τις μικρές μας πριγκίπισσες!</p>
        <ul>
          <li>Χαλαρωτική μουσική για να ξεκινήσουμε</li>
          <li>Ρόμπες, κορδέλες μαλλιών, ατομικές πετσετούλες &amp; face mask</li>
          <li><b>Περιποίηση προσώπου</b>: μάσκα σοκολάτας ή γιαουρτιού &amp; φρέσκο αγγουράκι</li>
          <li><b>Μανικιούρ &amp; πεντικιούρ</b> με παιδικά βερνίκια νερού</li>
          <li>Απαλό μακιγιάζ με υποαλλεργικά παιδικά καλλυντικά &amp; Glitter</li>
          <li>Χτένισμα για την εορτάζουσα και όλες τις φίλες</li>
          <li>Μασάζ με αρωματική, απαλή κρεμούλα</li>
          <li>Χορός και καραόκε</li>
          <li>Πασαρέλα &amp; fashion show με αξεσουάρ μαλλιών και γυαλιά</li>
          <li>Ένα ξεχωριστό δωράκι-έκπληξη για την εορτάζουσα</li>
          <li>Στολισμός χώρου με θεματικά μπαλόνια</li>
          <li><b>Menu</b>: Cupcakes &amp; χυμό</li>
          <li>Ηλεκτρονικές προσκλήσεις</li>

        </ul>

        <p>

          Για περισσότερες πληροφορίες ή διευκρινίσεις, μπορείτε να επικοινωνήσετε μαζί μας!
        </p>
        <img src={SpaParty1} alt="Baby Spa Party - Πακέτο 1" className="package-image" loading="lazy" />

        {/* Πακέτο 2 */}
        <h3>Πακέτο 2 “Μαγικά Γενέθλια” ✨</h3>
        <ul>
          <li>Χαλαρωτική μουσική &amp; ρόμπες, κορδέλες μαλλιών, πετσετούλες &amp; face mask</li>
          <li>Τα μαγιό μας είναι έτοιμα για τζακούζι γεμάτο μουσική και μπουρμπουλήθρες</li>
          <li>Περιποίηση προσώπου: μάσκα σοκολάτας ή γιαουρτιού &amp; φρέσκο αγγουράκι</li>
          <li>Μανικιούρ &amp; πεντικιούρ με παιδικά βερνίκια νερού</li>
          <li>Απαλό μακιγιάζ με υποαλλεργικά παιδικά καλλυντικά &amp; Glitter</li>
          <li>Χτένισμα για την εορτάζουσα και φίλες</li>
          <li>Μασάζ με αρωματική, απαλή κρεμούλα</li>
          <li>Χορός &amp; καραόκε</li>
          <li>Πασαρέλα &amp; fashion show</li>
          <li>Δωράκι-έκπληξη για την εορτάζουσα</li>
          <li>Στολισμός χώρου με θεματικά μπαλόνια</li>
          <li>Menu: Cupcakes &amp; χυμό</li>
          <li>Ηλεκτρονικές προσκλήσεις</li>
        </ul>
        <p>

          Για περισσότερες πληροφορίες ή διευκρινίσεις, μπορείτε να επικοινωνήσετε μαζί μας!
        </p>
        <img src={SpaParty2} alt="Baby Spa Party - Πακέτο 2" className="package-image" loading="lazy" />

        {/* Πακέτο 3 */}
        <h3>Πακέτο 3 “Mini Party” ✨</h3>
        <ul>
          <li>Χαλαρωτική μουσική &amp; ρόμπες, κορδέλες μαλλιών, πετσετούλες &amp; face mask</li>
          <li>Περιποίηση προσώπου: μάσκα σοκολάτας ή γιαουρτιού &amp; φρέσκο αγγουράκι</li>
          <li>Μανικιούρ &amp; πεντικιούρ με παιδικά βερνίκια νερού</li>
          <li>Απαλό μακιγιάζ με υποαλλεργικά παιδικά καλλυντικά &amp; Glitter</li>
          <li>Χτένισμα για την εορτάζουσα και φίλες</li>
          <li>Μασάζ με αρωματική, απαλή κρεμούλα</li>
        </ul>
        <p>
          Για περισσότερες πληροφορίες ή διευκρινίσεις, μπορείτε να επικοινωνήσετε μαζί μας!
        </p>
        <img src={SpaParty3} alt="Baby Spa Party - Πακέτο 3" className="package-image" loading="lazy" />

        {/* Πακέτο 4 */}
        <h3>Πακέτο 4 “Boys Bubble Party” 🎉</h3>
        <ul>
          <li>Cool μουσική &amp; μαγιό για τζακούζι</li>
          <li>Χορός &amp; καραόκε με αγαπημένα τραγούδια</li>
          <li>Στολισμός χώρου με θεματικά μπαλόνια</li>
          <li>Menu: Cupcakes &amp; χυμό</li>
          <li>Ηλεκτρονικές προσκλήσεις</li>
        </ul>
        <p>
          Για περισσότερες πληροφορίες ή διευκρινίσεις, μπορείτε να επικοινωνήσετε μαζί μας!
        </p>
        <br />
        <h2> * Απο 6 χρονών και άνω</h2>
        <img src={SpaParty4} alt="Baby Spa Party - Πακέτο 3" className="package-image" loading="lazy" />
      </div>

      <BubblesBackground />
      <ContactForm />
    </div>
  );
}
