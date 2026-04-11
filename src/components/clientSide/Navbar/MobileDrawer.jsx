
import { NavLink, Link } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";
import {
  LOGO_URL,
  TOUCH_LINKS,
  ACCORDION_VARIANTS,
  MOBILE_STATIC_LINKS,
} from "./navbarConstants";

// ── Accordion section (Products / Services / Get in Touch) 
const AccordionSection = ({
  label,
  name,
  activeDropdown,
  onToggle,
  children,
}) => (
  <div className="w-full">
    {/* Trigger button */}
    <button
      onClick={() => onToggle(name)}
      className="flex justify-between items-center w-full px-3 py-2.5 text-sm font-medium text-gray-300 hover:text-white rounded-xl hover:bg-white/10 transition-all"
    >
      {label}
      <IoChevronDown
        size={14}
        className={`flex-shrink-0 transition-transform duration-200 ${
          activeDropdown === name ? "rotate-180" : ""
        }`}
      />
    </button>

    {/* Animated children — always column layout */}
    <AnimatePresence>
      {activeDropdown === name && (
        <motion.div
          variants={ACCORDION_VARIANTS}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="flex flex-col gap-0.5 ml-2 mt-1" // flex-col = vertical stack
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// ── Main MobileDrawer 
const MobileDrawer = ({
  isOpen,
  setOpenMenu,
  allProducts,
  allservices,
  activeDropdown,
  toggleDropdown,
  closeAll,
}) => {
  return (
    <>
      {/* ── Hamburger icon (stays inside the navbar topbar) */}
      <div className="lg:hidden">
        <Hamburger
          toggled={isOpen}
          toggle={setOpenMenu}
          size={22}
          duration={0.5}
          color="#1e293b"
        />
      </div>

      {/* ── Portal-style overlay + panel (fixed, outside navbar flow) ─ */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Semi-transparent backdrop — click to close */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeAll}
              className="fixed inset-0 bg-black/50  z-50"
            />

            {/* Slide-in sidebar */}
            <motion.aside
              key="sidebar"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-0 left-0 h-screen w-72 md:w-80 bg-universe_secondary z-50 overflow-y-auto shadow-2xl"
            >
              <div className="flex flex-col p-5 gap-1 min-h-full">
                {/* Logo row + close (X) button */}
                <div className="flex items-center justify-between mb-5">
                  <Link to="/" onClick={closeAll}>
                    <img
                      src={LOGO_URL}
                      alt="Universe Soft Tech"
                      className="w-28 brightness-0 invert"
                    />
                  </Link>
                  <button
                    onClick={closeAll}
                    className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
                    aria-label="Close menu"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M5 5l10 10M15 5L5 15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>

                {/*  Static links: Home, Portfolio  */}
                {MOBILE_STATIC_LINKS.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    onClick={closeAll}
                    className={({ isActive }) =>
                      `block px-3 py-2.5 rounded-xl text-sm transition-all
                      ${
                        isActive
                          ? "bg-white/20 text-white font-medium"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}

                {/*  Products accordion  */}
                <AccordionSection
                  label="Products"
                  name="products"
                  activeDropdown={activeDropdown}
                  onToggle={toggleDropdown}
                >
                  {allProducts.map((p) => (
                    <NavLink
                      key={p._id}
                      to={`/productsDetails/${p._id}`}
                      onClick={closeAll}
                      // flex-row: icon left, text right — full width row
                      className="flex flex-row items-center gap-2.5 w-full px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    >
                      <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center flex-shrink-0">
                        <img
                          src={p.nav_logo}
                          alt=""
                          className="w-5 h-5 object-contain"
                        />
                      </div>
                      <span className="truncate">{p.nav_title}</span>
                    </NavLink>
                  ))}
                </AccordionSection>

                {/* ── Services accordion ─────────────────────── */}
                <AccordionSection
                  label="Services"
                  name="services"
                  activeDropdown={activeDropdown}
                  onToggle={toggleDropdown}
                >
                  {allservices.map((s) => (
                    <NavLink
                      key={s._id}
                      to={`/serviceDetails/${s._id}`}
                      onClick={closeAll}
                      className="flex flex-row items-center gap-2.5 w-full px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    >
                      <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center flex-shrink-0">
                        <img
                          src={s.nav_logo}
                          alt=""
                          className="w-5 h-5 object-contain"
                        />
                      </div>
                      <span className="truncate">{s.nav_title}</span>
                    </NavLink>
                  ))}
                </AccordionSection>

                {/* ── Get in Touch accordion ─────────────────── */}
                <AccordionSection
                  label="Get in Touch"
                  name="touch"
                  activeDropdown={activeDropdown}
                  onToggle={toggleDropdown}
                >
                  {TOUCH_LINKS.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={closeAll}
                      className={({ isActive }) =>
                        `block w-full px-3 py-2 rounded-lg text-sm transition-all
                        ${
                          isActive
                            ? "text-white bg-white/20 font-medium"
                            : "text-gray-400 hover:text-white hover:bg-white/10"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </AccordionSection>

                {/*  Divider  */}
                <div className="border-t border-white/10 mt-3 pt-3">
                  <Link
                    to="/request-demo"
                    onClick={closeAll}
                    className="block text-center bg-text_primari hover:opacity-90 text-white text-sm font-medium px-4 py-3 rounded-xl transition-all"
                  >
                    Get a Demo
                  </Link>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileDrawer;
