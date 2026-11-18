import {
  Baby,
  Hand,
  Cake,
  Footprints,
} from "lucide-react";

import hydro from '../assets/υδροθεραπεία 1.jpg';
import massage from '../assets/βρεφική μάλαξη 2.jpg';
import serviceparty from '../assets/Spa Party.jpg';
import FamilyTub from '../assets/familytub.jpeg';
// import proetimasiagennas from "../assets/Προετοιμασία για τον τοκετό.jpg";
// import mathimatathilasmou from "../assets/Μαθημα θημασού.jpg";
import vrefiki from "../assets/Μάθημα βρεφικής μάλαξης.jpg";
import Ksemiroma2 from '../assets/ksemiroma2.jpg';
// Ανενεργά απο 11/12/25
// import FitForBirth from '../assets/Fit for birth 1.jpg';
// import FitAfterBirth from '../assets/Fit after birth.jpg';
// import YogaMamaMwro from '../assets/Yoga μαμά & παιδί.jpg';
// import tfbs from '../assets/Tiny feet big steps 1.png';


export interface Service {
  icon: React.ElementType;
  title: string;
  navTitle?: string;
  description: string;
  price?: string;
  image: string;
  bgClass: string;
  link: string;
}

export const services: Service[] = [
  {
    icon: Baby,
    title: "💧Baby Spa | Μια ξεχωριστή εμπειρία στο νερό",
    navTitle: "Baby Spa | Μια ξεχωριστή εμπειρία στο νερό",
    description:
      "Μια όμορφη εμπειρία νερού για βρέφη και μικρά παιδιά",
    price: "35 €",
    image: hydro,
    bgClass: "pink-bg",
    link: "/hydrotherapy",
  },
  {
    icon: Hand,
    title: "🤍Βρεφική Μάλαξη",
    navTitle: "Βρεφική Μάλαξη",
    description:
      "Τρυφερές στιγμές επαφής, επικοινωνίας και σύνδεσης γονέα και μωρού.",
    price: "35 €",
    image: massage,
    bgClass: "pink-bg",
    link: "/massage",
  },
  {
    icon: Cake,
    title: " 🎀 Spa Parties",
    navTitle: "Spa Party",
    description:
      "Ξεχωριστά παιδικά πάρτι γεμάτα διασκέδαση, δημιουργία και όμορφες στιγμές.",
    image: serviceparty,
    bgClass: "pink-bg",
    link: "/party",
  },
  // {
  //   icon: Footprints,
  //   title: "Tiny Feet Big Steps | 6 εβδομάδες",
  //   navTitle: "Tiny Feet Big Steps",
  //   description: `Ανακαλύψτε το πιο διασκεδαστικό και αναπτυξιακό πρόγραμμα για βρέφη από 4 έως 12 μηνών! Το Tiny Feet Big Steps συνδυάζει παιχνίδι, μουσική, χορό και ειδικά σχεδιασμένες δραστηριότητες για να ενισχύσει την ψυχοκινητική και συναισθηματική ανάπτυξη του μωρού σας, ενώ προσφέρει μοναδικές στιγμές σύνδεσης με τη μαμά ή τον φροντιστή.`,
  //   link: "/tiny-feet-big-steps",
  //   image: tfbs,
  //   bgClass: "pink-bg",
  // },
  {
    icon: Footprints,
    title: "🛁Family Tub",
    navTitle: "Family Tub",
    description: `Μια όμορφη εμπειρία νερού που μπορούν να μοιραστούν γονείς και παιδιά.`,
    link: "/family-tub",
    image: FamilyTub,
    bgClass: "pink-bg",
  },
  // {
  //   icon: Footprints,
  //   title: "Fit For Birth",
  //   navTitle: "Fit For Birth",
  //   description: `Είστε έγκυος και θέλετε να κρατήσετε το σώμα σας σε φόρμα, ενώ
  // προετοιμάζεστε για τον τοκετό; Το Fit for Birth είναι το μάθημα που συνδυάζει
  // άσκηση, χαλάρωση και διασκέδαση, ειδικά σχεδιασμένο για μέλλουσες μαμάδες.`,
  //   link: "/fit-for-birth",
  //   image: FitForBirth,
  //   bgClass: "pink-bg",
  // },
  // {
  //   icon: Footprints,
  //   title: "Fit After Birth",
  //   navTitle: "Fit After Birth",
  //   description: `Μόλις γεννήσατε και θέλετε να επιστρέψετε σταδιακά στη φόρμα σας;
  // Το Fit after Birth είναι το ιδανικό μάθημα για νέες μαμάδες που θέλουν να
  // αφιερώσουν χρόνο στον εαυτό τους, να ενδυναμώσουν το σώμα τους και να
  // νιώσουν ξανά δυνατές.`,
  //   link: "/fit-after-birth",
  //   image: FitAfterBirth,
  //   bgClass: "pink-bg",
  // },
  // {
  //   icon: Footprints,
  //   title: "Yoga Μαμά Μωρό",
  //   navTitle: "Yoga Μαμά Μωρό",
  //   description: `Οι πρώτες εβδομάδες με το μωρό είναι μαγικές, αλλά ταυτόχρονα απαιτητικές.
  // Μεταξύ θηλασμού, αλλαγής πάνας και ελάχιστου ύπνου, ο χρόνος για τον εαυτό
  // σας φαίνεται να εξαφανίζεται. Η γιόγκα για μαμάδες και μωρά είναι μια ευκαιρία
  // να χαλαρώσετε μαζί, να αναζωογονηθείτε και να απολαύσετε στιγμές σύνδεσης με
  // το μωρό σας.`,
  //   link: "/yoga-mama-mwro",
  //   image: YogaMamaMwro,
  //   bgClass: "pink-bg",
  // },
//   {
//     icon: Footprints,
//     title: "Προετοιμασία για την Γέννα",
//     navTitle: "Προετοιμασία για την Γέννα",
//     description: `Αν περιμένετε ένα μωρό και θέλετε να νιώθετε προετοιμασμένες για τον ερχόμενο
// τοκετό, τα μαθήματα προετοιμασίας τοκετού είναι εδώ για εσάς. Στόχος μας είναι
// να σας δώσουμε τις γνώσεις, την εμπιστοσύνη και την υποστήριξη που χρειάζεστε,
// είτε πρόκειται για το πρώτο σας παιδί είτε όχι.`,
//     link: "/proetimasia-gia-thn-genna",
//     image: proetimasiagennas,
//     bgClass: "pink-bg",
//   },
//   {
//     icon: Footprints,
//     title: "Μαθήματα Θηλασμού",
//     navTitle: "Μαθήματα Θηλασμού",
//     description: `Θέλετε να θηλάσετε το μωρό σας με ασφάλεια και αυτοπεποίθηση;
// Τα μαθήματα θηλασμού προσφέρουν όλες τις γνώσεις και την πρακτική εξάσκηση που
// χρειάζεστε για έναν επιτυχημένο και άνετο θηλασμό.`,
//     link: "/mathimata-thilasmou",
//     image: mathimatathilasmou,
//     bgClass: "pink-bg",
//   },
  {
    icon: Footprints,
    title: "🎨 Creative Workshops",
    navTitle: "Creative Workshops",
    description: `Θεματικές δημιουργικές δραστηριότητες για μικρά χεράκια και μεγάλη φαντασία`,
    link: "/creative-workshops",
    image: vrefiki,
    bgClass: "pink-bg",
  },
  {
    icon: Footprints,
    title: "👶Ξεμύρωμα",
    navTitle: "Ξεμύρωμα",
    description: "Μια τρυφερή εμπειρία φροντίδας μετά τη βάπτιση.",
    link: "/ksemiroma",
    image: Ksemiroma2,
    bgClass: "pink-bg",
  },
];