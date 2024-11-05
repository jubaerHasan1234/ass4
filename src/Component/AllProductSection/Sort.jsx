import { useState } from "react";
import IconSvg from "../../SvgJsx/IconSvg";
import SortButton from "./SortButton";

export default function Sort() {
  const [show, setShow] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setShow(!show)}
        >
          Sort
          <IconSvg />
        </button>
      </div>

      {show && <SortButton />}
    </div>
  );
}
