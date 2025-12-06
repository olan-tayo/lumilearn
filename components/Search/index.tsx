import Image from "next/image";
import search from "../../public/assets/icons/search.svg";

const SearchComponent = ({
  onChange,
  value,
}: {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}) => {
  return (
    <div className="border border-border w-full md:w-[70%] lg:w-[229px] h-[35px] rounded-[1000px] flex gap-2 items-center px-3 py-1">
      <Image src={search} alt="search icon" width={18} height={18} />
      <input
        type="search"
        onChange={onChange}
        name="search"
        id="search"
        value={value}
        placeholder="Search for a course"
        className="w-full h-full rounded-[1000px] outline-none text-xs text-text-secondary"
      />
    </div>
  );
};

export default SearchComponent;
