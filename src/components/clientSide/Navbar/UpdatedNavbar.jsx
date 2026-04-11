import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useNavbar from "./useNavbar";
import DesktopNav from "./DesktopNav";
import MobileDrawer from "./MobileDrawer";
import { LOGO_URL } from "./navbarConstants";

const UpdatedNavbar = () => {
  const axiosPublic = useAxiosPublic();

  //  Data fetching
  const { data: allservices = [] } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axiosPublic.get("/get-all-service");
      return res.data.data;
    },
  });

  const { data: allProducts = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get("/get-products");
      return res.data.data;
    },
  });

  // ── State + side effects via hook
  const {
    isOpen,
    setOpenMenu,
    activeDropdown,
    toggleDropdown,
    scrolled,
    closeAll,
    navRef,
  } = useNavbar();

  return (
    // navRef detects outside clicks for desktop dropdowns
    <div ref={navRef} className="sticky top-0 z-50 overflow-visible">
      {/* Scrolled: blur + shadow; default: simple white border */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="w-full px-4 lg:px-0">
          {/*  Mobile topbar */}
          {/* Only shows below lg breakpoint */}
          <div className="flex justify-between items-center py-2 lg:hidden">
            <Link to="/" onClick={closeAll}>
              <img src={LOGO_URL} alt="Universe Soft Tech" className="w-24" />
            </Link>

            {/* MobileDrawer renders  */}
            <MobileDrawer
              isOpen={isOpen}
              setOpenMenu={setOpenMenu}
              allProducts={allProducts}
              allservices={allservices}
              activeDropdown={activeDropdown}
              toggleDropdown={toggleDropdown}
              closeAll={closeAll}
            />
          </div>

          {/*  Desktop topbar  */}
          {/* Only shows at lg and above */}
          <div className="hidden lg:flex items-center justify-between container mx-auto py-3">
            {/* Logo */}
            <Link to="/" onClick={closeAll}>
              <img src={LOGO_URL} alt="Universe Soft Tech" className="w-32" />
            </Link>

            {/* Center nav: Home | Products | Services | Portfolio | Get in Touch */}
            <DesktopNav
              allProducts={allProducts}
              allservices={allservices}
              activeDropdown={activeDropdown}
              toggleDropdown={toggleDropdown}
              closeAll={closeAll}
            />

            {/* Right CTA */}
            <Link
              to="/request-demo"
              className="flex items-center gap-2 bg-text_primari hover:opacity-90 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-all duration-200 shadow-sm"
            >
              Get a Demo
              <HiOutlineArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatedNavbar;
