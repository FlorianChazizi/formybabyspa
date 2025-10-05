import partyImg from "../assets/Spa Party.jpg"; // replace with your image
import "../styles/party.css";
import ContactForm from "./Contact-form";
import BubblesBackground from "./BubblesBackground";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import party1Image from "../assets/section1.jpeg";     // image between package 1 & 2
import party2Image from "../assets/section2.jpeg";     // image between package 2 & 3
import party3Image from "../assets/section3.jpeg";     // image between package 3 & 4
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
          <h1>Birthday Party</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h2>Τι είναι το Baby Spa Party;</h2>
        <p>
          Θέλετε να γιορτάσετε τα γενέθλια ή μια ξεχωριστή στιγμή του μωρού σας με έναν μοναδικό και
          αξέχαστο τρόπο; Το <b>Baby Spa Party</b> είναι η ιδανική επιλογή! Δημιουργήστε όμορφες
          αναμνήσεις μαζί με φίλους και συγγενείς σε έναν χώρο που συνδυάζει παιχνίδι, χαλάρωση και
          ατελείωτη διασκέδαση.</p>

        <p>Ανακαλύψτε τα μοναδικά μας πακέτα:</p>

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

        <h3>Διάρκεια:</h3>
        <ul>
          <li>Έως 6 παιδάκια: 2 ώρες</li>
          <li>Έως 8 παιδάκια: 2,5 ώρες</li>
          <li>Έως 10 παιδάκια: 3 ώρες</li>
        </ul>
              <img src={party1Image} alt="Baby Spa Party - Πακέτο 1" className="package-image"  loading="lazy"/>

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
          <b>Διάρκεια:</b><br />
          Έως 6 παιδάκια: 2,5 ώρες<br />
          Έως 8 παιδάκια: 3 ώρες<br />
          Έως 10 παιδάκια: 3 ώρες
        </p>
        <img src={party2Image} alt="Baby Spa Party - Πακέτο 2" className="package-image"  loading="lazy"/>

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
          <b>Διάρκεια:</b><br />
          Έως 6 παιδάκια: 1 ώρα<br />
          Έως 10 παιδάκια: 1,5 ώρα
        </p>
        <img src={party3Image} alt="Baby Spa Party - Πακέτο 3" className="package-image"  loading="lazy"/>

        {/* Πακέτο 4 */}
        <h3>Πακέτο 4 “Boys Bubble Party” 🎉</h3>
        <ul>
          <li>Cool μουσική &amp; μαγιό για τζακούζι</li>
          <li>Ντύνονται super ήρωες</li>
          <li>Χορός &amp; καραόκε με αγαπημένα τραγούδια</li>
          <li>Δωράκι-έκπληξη για τον εορτάζοντα</li>
          <li>Στολισμός χώρου με θεματικά μπαλόνια</li>
          <li>Menu: Cupcakes &amp; χυμό</li>
          <li>Ηλεκτρονικές προσκλήσεις</li>
        </ul>
        <p>
          <b>Διάρκεια &amp; Τιμή:</b><br />
          Έως 6 παιδάκια: 2 ώρες<br />
          Έως 10 παιδάκια: 2,5 ώρες
        </p>
        <br />
        <h2> * Απο 6 χρονών και άνω</h2>
      </div>

      <BubblesBackground />
      <ContactForm />
    </div>
  );
}
