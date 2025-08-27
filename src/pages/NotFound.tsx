import { motion } from "framer-motion";
import { Baby, Home } from "lucide-react";
import { Link } from "react-router-dom";
import "./notfound.css"; 

export default function NotFound() {
  return (
    <div className="notfound-container">
      {/* Animated Baby Icon */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="notfound-icon"
      >
        <Baby className="baby-icon" />
      </motion.div>

      {/* Error Code */}
      <h1 className="notfound-title">404</h1>
      <p className="notfound-text">
        Oops! Αυτή η σελίδα δεν βρέθηκε. 🍼
      </p>

      {/* Button to go home */}
      <Link to="/" className="notfound-button">
        <Home className="home-icon" />
        Επιστροφή στην Αρχική
      </Link>
    </div>
  );
}
