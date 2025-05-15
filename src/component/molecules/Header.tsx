import { GiMusicalNotes } from "react-icons/gi";

import SearchBar from "../atoms/SearchBar";

function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary-900 w-full px-4 py-4 ">
      <div className="flex items-center justify-around gap-4  mx-auto">
        <div className="flex items-center gap-3 text-primary-100">
          <GiMusicalNotes size={40} />
          <h1 className="text-3xl font-bold">Rythmiq</h1>
        </div>

        <SearchBar />

      </div>
    </div>
  );
}

export default Header;
