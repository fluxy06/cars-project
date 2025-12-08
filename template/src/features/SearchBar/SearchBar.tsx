import React from "react";

type SearchBarProps = {
    value_placeholder?: string
    onclick?: () => void;

}

const SearchBar: React.FC<SearchBarProps> = ({value_placeholder, onclick}) => {
    return(
        <>
            <div className="relative w-[clamp(150px,30vw,450px)]">
      <input
        type="search"
        className="w-full bg-white border-[0.1px] border-[#596780]/50 rounded-2xl py-2 px-5 text-[#596780] text-[clamp(12px,2vw,20px)]"
        placeholder={value_placeholder}
      />

      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full
                  w-[clamp(16px,2vw,24px)] h-[clamp(16px,2vw,24px)]
                   bg-no-repeat bg-center
                  hover:scale-111 transition-transform  duration-444 cursor-pointer
                   "
        onClick={onclick}
        style={{
            backgroundImage: "url(./src/features/SearchBar/filter.svg)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
      />
    </div>
    </>
    )
}

export default SearchBar