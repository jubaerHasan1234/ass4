import logo from "../../assets/logo.svg";
import ThreeDod from "../../SvgJsx/ThreeDod";
import CategoryMenue from "./CategoryMenue";
import UserMenue from "./UserMenue";
export default function Nav() {
  return (
    <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="border-b border-gray-200">
        <div className="flex h-16 items-center">
          <button
            type="button"
            className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
          >
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open menu</span>
            <ThreeDod />
          </button>

          <div className="ml-4 flex lg:ml-0">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={logo} alt="logo" />
            </a>
          </div>

          <CategoryMenue />

          <UserMenue />
        </div>
      </div>
    </nav>
  );
}
