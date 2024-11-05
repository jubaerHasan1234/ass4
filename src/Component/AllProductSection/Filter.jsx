import { useContext, useState } from "react";
import IconSvg from "../../SvgJsx/IconSvg";
import { CategoriContext } from "../../contexts/context";
import { formatSentence } from "../../utils";

export default function Filter() {
  const { data } = useContext(CategoriContext);

  /* state management start */
  const [show, setShow] = useState(false);
  const { handelInputCheckBox, inputValue } = useContext(CategoriContext);
  /* state management end */

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
          id="filter-button"
          aria-expanded="false"
          aria-haspopup="true"
          onClick={() => setShow(!show)}
        >
          Filter
          <IconSvg />
        </button>
      </div>

      {show && (
        <div
          className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="filter-button"
          tabIndex="-1"
          id="filter-dropdown"
        >
          <div className="py-1" role="none">
            {data?.map((categori) => (
              <label
                key={categori}
                className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700"
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4"
                  id="filter-option-1"
                  value={categori}
                  checked={inputValue?.value === categori && inputValue?.check}
                  onChange={handelInputCheckBox}
                />
                <span className="ml-2">{formatSentence(categori)}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
