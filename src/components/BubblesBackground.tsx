import "../styles/bubbles.css";

export default function BubblesBackground() {
  return (
    <div className="bubbles-wrapper">
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="bubble"></div>
      ))}
    </div>
  );
}
