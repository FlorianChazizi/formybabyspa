import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import massageImage from "../assets/βρεφική μάλαξη 3.jpg";
import "../styles/massage.css";
import ContactForm from "./Contact-form";
import BubblesBackground from "./BubblesBackground";

const massageItems = [
  { icon: "🤍", text: "Επαφή" },
  { icon: "🫶", text: "Επικοινωνία" },
  { icon: "👶", text: "Σύνδεση" },
  { icon: "🌸", text: "Τρυφερότητα" },
  { icon: "✨", text: "Χρόνος αφιερωμένος στο μωρό" },
];

export default function MassagePage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="service-page">
      <div className="hero">
        <img src={massageImage} alt="Βρεφική Μάλαξη" loading="lazy" />
        <div className="hero-overlay">
          <h1>Βρεφική Μάλαξη</h1>
        </div>
      </div>

      <div className="content">
        <h2>Η τρυφερή τέχνη της φροντίδας</h2>
        <p className="bm-lead">
          Το άγγιγμα είναι ένας από τους πρώτους τρόπους επικοινωνίας ανάμεσα στον
          γονέα και το μωρό.
        </p>
        <p>
          Η <b>βρεφική μάλαξη</b> δημιουργεί έναν ήρεμο και πολύτιμο χρόνο αφιερωμένο
          στη σχέση γονέα και παιδιού.
        </p>
        <p>
          Μέσα από απαλές κινήσεις και τρυφερή επαφή, ο γονιός μαθαίνει να παρατηρεί
          καλύτερα το μωρό του και να δημιουργεί μια όμορφη στιγμή επικοινωνίας και
          σύνδεσης.
        </p>

        <h2 className="bm-center">Η βρεφική μάλαξη είναι:</h2>
        <ul className="bm-values">
          {massageItems.map((item) => (
            <li key={item.text}>
              <span className="bm-icon" aria-hidden="true">{item.icon}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>

        <p className="bm-closing">
          Γιατί ένα απαλό άγγιγμα μπορεί να πει όσα δεν μπορούν να πουν οι λέξεις.
        </p>
      </div>

      <BubblesBackground />
      <ContactForm />
    </div>
  );
}