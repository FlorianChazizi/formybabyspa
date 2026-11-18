import partyImg from "../assets/Spa Party.jpg";
import SpaParty1 from "../assets/SpaPartyImage1.jpeg";
import SpaParty2 from "../assets/SpaPartyImage2.jpeg";
import SpaParty3 from "../assets/SpaPartyImage3.jpeg";
import SpaParty4 from "../assets/SpaPartyImage4.jpg";

import "../styles/party.css";
import ContactForm from "./Contact-form";
import BubblesBackground from "./BubblesBackground";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const partyItems = [
  { icon: "🎀", text: "Ρόμπες και αξεσουάρ" },
  { icon: "🫧", text: "Face mask" },
  { icon: "✨", text: "Beauty moments" },
  { icon: "💅", text: "Παιδικό μανικιούρ & πεντικιούρ" },
  { icon: "💄", text: "Απαλό παιδικό makeup & glitter" },
  { icon: "💇‍♀️", text: "Χτένισμα" },
  { icon: "🎶", text: "Χορό & Karaoke" },
  { icon: "👑", text: "Πασαρέλα & Fashion Show" },
  { icon: "🛁", text: "Jacuzzi, ανάλογα με το πακέτο" },
  { icon: "🎨", text: "Δημιουργικές δραστηριότητες" },
  { icon: "🎂", text: "Birthday moment" },
  { icon: "🎈", text: "Στολισμό" },
  { icon: "💌", text: "Ηλεκτρονικές προσκλήσεις" },
];

const partyPhotos = [SpaParty1, SpaParty2, SpaParty3, SpaParty4];

export default function PartyPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="service-page">
      {/* Hero Section */}
      <div className="hero">
        <img src={partyImg} alt="Spa Party - For My Baby Spa" loading="lazy" />
        <div className="hero-overlay">
          <h1>Spa Party</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h2>Το πιο ξεχωριστό party experience για κορίτσια</h2>

        <p className="sp-lead">Θέλεις ένα πάρτι διαφορετικό από τα συνηθισμένα;</p>
        <p>
          Στο <b>For My Baby Spa</b> δημιουργούμε ξεχωριστά Spa Parties για κορίτσια που
          αγαπούν τη διασκέδαση, τη μουσική, τη δημιουργία και φυσικά… το pink mood! 🎀
        </p>
        <p>
          Τα κορίτσια μεταμορφώνονται σε μικρές πριγκίπισσες και απολαμβάνουν μια γιορτή
          γεμάτη χαμόγελα, περιποίηση, παιχνίδι και όμορφες στιγμές με τις φίλες τους.
        </p>

        <h2 className="sp-center">Τα πακέτα μας μπορούν να περιλαμβάνουν:</h2>
        <ul className="sp-values">
          {partyItems.map((item) => (
            <li key={item.text}>
              <span className="sp-icon" aria-hidden="true">{item.icon}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>

        <p className="sp-note">
          Κάθε πάρτι μπορεί να προσαρμοστεί στην ηλικία και στον αριθμό των παιδιών.
        </p>

        <div className="sp-gallery">
          {partyPhotos.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              alt={`Spa Party - φωτογραφία ${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>

        <div className="sp-closing">
          <h2>Δεν είναι απλώς ένα πάρτι.</h2>
          <p>Είναι μια εμπειρία που τα κορίτσια θα θυμούνται για καιρό.</p>
        </div>

        <p className="sp-age">
          Τα Spa Parties απευθύνονται σε παιδιά από <b>5 ετών και άνω</b>.
        </p>
      </div>

      <BubblesBackground />
      <ContactForm />
    </div>
  );
}