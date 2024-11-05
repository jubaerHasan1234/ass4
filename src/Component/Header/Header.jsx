import Nav from "./Nav";
import Offer from "./Offer";

export default function Header() {
  return (
    <header className="relative bg-white">
      <Offer />
      <Nav />
    </header>
  );
}
