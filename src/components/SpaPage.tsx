import Gallery from "../components/Gallery";
import BabySpa1 from "../assets/babyspa1.jpg";
import BabySpa2 from "../assets/babyspa2.jpg";
import BabySpa3 from "../assets/babyspa3.jpg";
import BabySpa5 from "../assets/babyspa5.jpeg";
import BabySpa6 from "../assets/babyspa6.jpeg";
import BabySpa7 from "../assets/babyspa7.jpeg";
import BabySpa8 from "../assets/babyspa8.jpeg";
import BabySpa9 from "../assets/babyspa9.jpeg";
import BabySpa10 from "../assets/babyspa10.jpeg";
import HeroGallery from "../assets/herogallery.jpeg";
import "../styles/gallery.css";
import BubblesBackground from "./BubblesBackground";
import ContactForm from "./Contact-form";
export default function SpaPage() {
    const photos = [
        { src: BabySpa1, alt: "Baby spa relaxing in float" },
        { src: BabySpa2, alt: "Hydrotherapy session" },
        { src: BabySpa3, alt: "Mother and baby bonding" },
        { src: BabySpa5, alt: "Our cozy spa environment" },
        { src: BabySpa6, alt: "Our cozy spa environment" },
        { src: BabySpa7, alt: "Our cozy spa environment" },
        { src: BabySpa8, alt: "Our cozy spa environment" },
        { src: BabySpa9, alt: "Our cozy spa environment" },
        { src: BabySpa10, alt: "Our cozy spa environment" },
    ];

    return (
        <div>
            <div className="hero">
                <img src={HeroGallery} alt="Gallery" />
                <div className="hero-overlay">
                    <h1>Gallery</h1>
                </div>
            </div>
            <Gallery images={photos} />
            <BubblesBackground />
            <ContactForm />
        </div>
    );
}
