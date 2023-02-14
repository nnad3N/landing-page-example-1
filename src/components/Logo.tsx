import logoIcon from "../assets/logo-icon.svg";

interface Props {
  accented?: boolean;
}

const Logo: React.FC<Props> = ({ accented }) => {
  return (
    <div className="flex items-center">
      <img className="h-8 w-auto" src={logoIcon} alt="Głowa mówiącego dziecka" />
      <div className="ml-2 flex flex-col font-display leading-4">
        <span className={`${accented ? "text-accent" : ""}`}>PRZYJAZNY</span>
        <span className="tracking-special">LOGOPEDA</span>
      </div>
    </div>
  );
};

export default Logo;
