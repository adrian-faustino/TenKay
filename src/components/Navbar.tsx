import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full p-4 bg-gray-400 sticky top-0">
      <div className="flex">
        <Link to="/home">TenKay</Link>
      </div>

      <div className="flex gap-4">
        <Link to="/home">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/add-skill">Add Skill</Link>
      </div>
    </nav>
  );
}
