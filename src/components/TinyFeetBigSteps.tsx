import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import tfbsHero from "../assets/tfbs.jpeg"; // hero image
import "../styles/party.css"; // reuse same styles
import ContactForm from "./Contact-form";
import BubblesBackground from "./BubblesBackground";

// optional section images (replace with your own or remove if not needed)
// import section1Img from "../assets/tfbs-section1.jpeg";
// import section2Img from "../assets/tfbs-section2.jpeg";
// import section3Img from "../assets/tfbs-section3.jpeg";

export default function TinyFeetBigStepsPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="service-page">
      {/* Hero Section */}
      <div className="hero">
        <img src={tfbsHero} alt="Tiny Feet Big Steps" loading="lazy" />
        <div className="hero-overlay">
          <h1>Tiny Feet Big Steps</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h2>Δραστηριότητες για Μωρά</h2>
        <p>
          Ανακαλύψτε το πιο διασκεδαστικό και αναπτυξιακό πρόγραμμα για βρέφη από 4 έως 12 μηνών!
          Το <b>Tiny Feet Big Steps</b> συνδυάζει παιχνίδι, μουσική, χορό και ειδικά σχεδιασμένες
          δραστηριότητες για να ενισχύσει την ψυχοκινητική και συναισθηματική ανάπτυξη του μωρού
          σας, ενώ προσφέρει μοναδικές στιγμές σύνδεσης με τη μαμά ή τον φροντιστή.
        </p>

        <h2>Στόχοι του Προγράμματος</h2>
        <ul>
          <li>Ενίσχυση της αδρής και λεπτής κινητικότητας.</li>
          <li>Ανάπτυξη γλωσσικών και γνωστικών δεξιοτήτων.</li>
          <li>Ενδυνάμωση της κοινωνικότητας και συναισθηματικής νοημοσύνης.</li>
          <li>Προώθηση ασφαλούς συναισθηματικού δεσμού μέσω του Attachment Parenting.</li>
        </ul>

        <h2>Δραστηριότητες</h2>
        <ul>
          <li>
            <b>Baby Gym:</b> Διασκεδαστική γυμναστική με τραγούδια για σωστή μυοσκελετική ανάπτυξη.
          </li>
          <li>
            <b>Baby Spa:</b> Χαλαρωτικό μασάζ και επαφή με το νερό για ηρεμία και ευεξία.
          </li>
          <li>
            <b>Sensory Play:</b> Αισθητηριακό παιχνίδι με υλικά που διεγείρουν τις αισθήσεις.
          </li>
          <li>
            <b>Messy Play:</b> Εξερεύνηση με "βρώμικο" παιχνίδι για ανάπτυξη δημιουργικότητας.
          </li>
          <li>
            <b>Music Party:</b> Μουσικοκινητική δραστηριότητα με ήχους και ρυθμούς.
          </li>
          <li>
            <b>Babywearing Dancing:</b> Χορός με μάρσιπο, ενισχύοντας τη σύνδεση γονέα-μωρού.
          </li>
        </ul>

        {/* <img src={section1Img} alt="Baby Gym" className="package-image" loading="lazy" />
        <img src={section2Img} alt="Sensory Play" className="package-image" loading="lazy" />
        <img src={section3Img} alt="Music Party" className="package-image" loading="lazy" /> */}

        <h2>Πληροφορίες</h2>
        <ul>
          <li>Ηλικίες: 3–12 μηνών</li>
          <li>Διάρκεια: 6 εβδομάδες</li>
        </ul>
      </div>

      <BubblesBackground />
      <ContactForm />
    </div>
  );
}
