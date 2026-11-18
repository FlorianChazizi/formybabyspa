import "../styles/whoweare.css";
import teamPhoto from "../assets/whoweare.jpeg";

export default function WhoWeAre() {
  return (
    <section className="who-we-are" id="who-we-are">
      <div className="who-container">
        <h2>Ποιοί Είμαστε</h2>
        <span className="who-divider" aria-hidden="true"></span>

        <p className="who-lead">
          Ένας χώρος φτιαγμένος με αγάπη για τα μικρά σας
        </p>

        <p>
          Στο <b>For My Baby Spa Κατερίνη</b> δημιουργήσαμε έναν χώρο όπου τα μωρά
          και τα παιδιά μπορούν να απολαύσουν ξεχωριστές εμπειρίες μέσα από το νερό,
          την επαφή, το παιχνίδι και τη δημιουργία.
        </p>

        <p>
          Η <b>Αναστασία Βελώνη</b>, μητέρα τριών παιδιών και ιδιοκτήτρια του For My
          Baby Spa, δημιούργησε τον χώρο έχοντας ως βασική αρχή ότι κάθε παιδί αξίζει
          να νιώθει ασφάλεια, ζεστασιά και φροντίδα.
        </p>

        <div className="who-image-wrapper">
          <img
            src={teamPhoto}
            alt="Η ομάδα του For My Baby Spa"
            className="who-image"
            loading="lazy"
          />
        </div>

        <p>
          Η εμπειρία της και η εξειδικευμένη της κατάρτιση στον χώρο της βρεφικής και
          παιδικής φροντίδας αποτελούν τη βάση για τις υπηρεσίες που προσφέρουμε.
        </p>

        <ul className="who-certifications">
          <li>Πιστοποιημένη Εκπαιδεύτρια Tiny Feet Big Steps</li>
          <li>Πιστοποίηση Μασάζ για Βρέφη και Παιδιά</li>
          <li>
            Πιστοποιημένη Εκπαιδεύτρια IAIM – International Association of Infant
            Massage
          </li>
          <li>Πιστοποίηση Baby Spa Experts</li>
        </ul>

        <p>
          Στο For My Baby Spa δίνουμε ιδιαίτερη σημασία στην{" "}
          <b>ασφάλεια, την καθαριότητα και την προσεγμένη εμπειρία</b> κάθε μικρού
          επισκέπτη.
        </p>

        <p>
          Τα ειδικά Jacuzzi μας είναι πιστοποιημένα για χρήση από βρέφη και
          χρησιμοποιούνται με ιδιαίτερη προσοχή στην καθαριότητα και την υγιεινή.
        </p>

        <p className="who-closing">
          Για εμάς, κάθε μωρό είναι μοναδικό.
          <br />
          Και κάθε οικογένεια αξίζει μια όμορφη εμπειρία.
        </p>
      </div>
    </section>
  );
}