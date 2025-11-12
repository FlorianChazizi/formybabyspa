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
import proetimasiagennas from "../assets/Προετοιμασία για τον τοκετό.jpg";
import mathimatathilasmou from "../assets/Μαθημα θημασού.jpg";
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
    title: "Υδροθεραπεία | 40 ημερών - 3 ετών",
    navTitle: "Υδροθεραπεία",
    description:
      "Το ζεστό νερό και οι απαλές κινήσεις , δημιουργούν αίσθημα ασφάλειας, βοηθώντας στην ανάπτυξη της αυτοπεποίθησης του μωρού",
    price: "35 €",
    image: hydro,
    bgClass: "pink-bg",
    link: "/hydrotherapy",
  },
  {
    icon: Hand,
    title: "Βρεφική Μάλαξη | Η τρυφερή τέχνη της φροντίδας",
    navTitle: "Βρεφική Μάλαξη",
    description:
      "Η σωματική επαφή είναι το πιο δυνατό, θεραπευτικό και καθησυχαστικό συναίσθημα για το μωρό σας. Το βρεφικό μασάζ δεν είναι απλώς μια στιγμή τρυφερότητας.",
    price: "35 €",
    image: massage,
    bgClass: "pink-bg",
    link: "/massage",
  },
  {
    icon: Cake,
    title: "Spa Party | Γενέθλια",
    navTitle: "Spa Party",
    description:
      "Γιορτάστε τα γενέθλια του παιδιού σας σε έναν μαγικό χώρο γεμάτο φροντίδα, χαρά και αισθητηριακές εμπειρίες που θα μείνουν αξέχαστες! *6 χρονών και άνω",
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
    title: "Family Tub | Υδροθεραπεία για όλη την οικογένεια",
    navTitle: "Family Tub",
    description: `Η υπηρεσία Family Tub στο For My Baby Spa δεν είναι μόνο για μωράκια, αλλά και για παιδιά μεγαλύτερης ηλικίας, και φυσικά για τους γονείς που θέλουν να ζήσουν αυτήν την όμορφη εμπειρία μαζί τους! Πρόκειται για μια μοναδική στιγμή χαλάρωσης και παιχνιδιού μέσα στο νερό, που φέρνει την οικογένεια πιο κοντά και δημιουργεί αξέχαστες αναμνήσεις.`,
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
  {
    icon: Footprints,
    title: "Προετοιμασία για την Γέννα",
    navTitle: "Προετοιμασία για την Γέννα",
    description: `Αν περιμένετε ένα μωρό και θέλετε να νιώθετε προετοιμασμένες για τον ερχόμενο
τοκετό, τα μαθήματα προετοιμασίας τοκετού είναι εδώ για εσάς. Στόχος μας είναι
να σας δώσουμε τις γνώσεις, την εμπιστοσύνη και την υποστήριξη που χρειάζεστε,
είτε πρόκειται για το πρώτο σας παιδί είτε όχι.`,
    link: "/proetimasia-gia-thn-genna",
    image: proetimasiagennas,
    bgClass: "pink-bg",
  },
  {
    icon: Footprints,
    title: "Μαθήματα Θηλασμού",
    navTitle: "Μαθήματα Θηλασμού",
    description: `Θέλετε να θηλάσετε το μωρό σας με ασφάλεια και αυτοπεποίθηση;
Τα μαθήματα θηλασμού προσφέρουν όλες τις γνώσεις και την πρακτική εξάσκηση που
χρειάζεστε για έναν επιτυχημένο και άνετο θηλασμό.`,
    link: "/mathimata-thilasmou",
    image: mathimatathilasmou,
    bgClass: "pink-bg",
  },
  {
    icon: Footprints,
    title: "Μαθήματα Βρεφικής Μάλαξης",
    navTitle: "Μαθήματα Βρεφικής Μάλαξης",
    description: `Η βρεφική μάλαξη είναι πολλά περισσότερα από μια τεχνική· είναι ένας μοναδικός τρόπος
επικοινωνίας ανάμεσα στον γονιό και το μωρό του. Μέσα από την απαλότητα της αφής, το μωρό
νιώθει ασφάλεια, αγάπη και φροντίδα, ενώ ταυτόχρονα ωφελείται σωματικά και ψυχικά.`,
    link: "/mathimata-vrefikis-malaxis",
    image: vrefiki,
    bgClass: "pink-bg",
  },
  {
    icon: Footprints,
    title: "Ξεμύρωμα",
    navTitle: "Ξεμύρωμα",
    description: "Ξεμύρωμα | Η παράδοση συναντά τη φροντίδα",
    link: "/ksemiroma",
    image: Ksemiroma2,
    bgClass: "pink-bg",
  },
];