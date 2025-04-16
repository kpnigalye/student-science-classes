
import { Link } from "react-router-dom";

const HeaderWithLogos = () => {
  return (
    <div className="flex items-center justify-between max-w-6xl mx-auto">
      <Link to="/" className="flex items-center gap-4">
        <img
          src="/lovable-uploads/9e351afa-1010-4062-8ce4-cfd54f708b61.png"
          alt="45th Anniversary"
          className="h-16 w-auto"
        />
        <img
          src="/lovable-uploads/34c43abf-23cf-46d1-8de4-793b35e5d154.png"
          alt="Students' Science Classes"
          className="h-14 w-auto"
        />
      </Link>
    </div>
  );
};

export default HeaderWithLogos;
