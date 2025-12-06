import Logo from "../../public/assets/images/Logo.svg";
import Image from "next/image";

const LumilearnPageLoader = () => {
  return (
    <div className="animate-bounce">
      <Image src={Logo} alt="Loading..." width={200} height={200} />
    </div>
  );
};

export default LumilearnPageLoader;
