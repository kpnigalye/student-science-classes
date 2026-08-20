import logoAsset from "@/assets/students-classes-logo.png.asset.json";

const Logo = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <img
        src={logoAsset.url}
        alt="Students' Classes"
        className="w-full h-auto"
      />
    </div>
  );
};

export default Logo;
