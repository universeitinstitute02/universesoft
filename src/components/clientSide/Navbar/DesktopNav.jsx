
// Desktop navigation: Home | Products (hover mega) | Services (hover mega) | Portfolio | Get in Touch (click dropdown)

import { NavLink, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { IoChevronDown } from 'react-icons/io5';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { TOUCH_LINKS, DROPDOWN_VARIANTS } from './navbarConstants';

// ── Shared active/inactive NavLink className ─────────────────────────────────
const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 whitespace-nowrap
  ${isActive
    ? 'text-universe_primary bg-blue-50'
    : 'text-universe_secondary hover:bg-gray-100 hover:text-gray-900'}`;

// ── Small chevron trigger button (Services, Get in Touch) 
const DropdownTrigger = ({ label, name, activeDropdown, onToggle }) => (
  <button
    onClick={() => onToggle(name)}
    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 whitespace-nowrap
      ${activeDropdown === name
        ? 'text-universe_primary bg-blue-50'
        : 'text-universe_secondary hover:bg-gray-100 hover:text-gray-900'}`}
  >
    {label}
    <IoChevronDown
      size={13}
      className={`transition-transform duration-200 ${activeDropdown === name ? 'rotate-180' : ''}`}
    />
  </button>
);

// ── Products mega panel (hover-triggered) 
export const ProductsMegaMenu = ({ products, onClose }) => (
  <motion.div
    variants={DROPDOWN_VARIANTS}
    initial="hidden"
    animate="visible"
    exit="exit"
    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[580px] bg-white border border-gray-100 rounded-2xl shadow-2xl shadow-black/8 p-4 z-50"
  >
    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-3 px-1">
      Our Products
    </p>
    <div className="grid grid-cols-3 gap-1">
      {products.map((product) => (
        <NavLink
          key={product._id}
          to={`/productsDetails/${product._id}`}
          onClick={onClose}
          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50 transition-colors group"
        >
          {/* Product icon */}
          <div className="w-9 h-9 rounded-lg bg-gray-100 flex-shrink-0 flex items-center justify-center overflow-hidden">
            <img src={product.nav_logo} alt="" className="w-6 h-6 object-contain" />
          </div>
          <div className="min-w-0">
            <p className="text-[13px] font-medium text-gray-800 group-hover:text-universe_primary transition-colors truncate">
              {product.nav_title}
            </p>
            <p className="text-[11px] text-gray-400 mt-0.5 truncate">
              {product.nav_description?.slice(0, 26)}...
            </p>
          </div>
        </NavLink>
      ))}
    </div>
  </motion.div>
);

// ── Services mega panel (click-triggered) 

export const ServicesMegaMenu = ({ services, onClose }) => (
  <motion.div
    variants={DROPDOWN_VARIANTS}
    initial="hidden"
    animate="visible"
    exit="exit"
    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[580px] bg-white border border-gray-100 rounded-2xl shadow-2xl shadow-black/8 p-4 z-50"
  >
    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-3 px-1">
      Our Services
    </p>
    <div className="grid grid-cols-3 gap-1">
      {services.map((service) => (
        <NavLink
          key={service._id}
          to={`/serviceDetails/${service._id}`}
          onClick={onClose}
          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50 transition-colors group"
        >
          {/* Service icon */}
          <div className="w-9 h-9 rounded-lg bg-gray-100 flex-shrink-0 flex items-center justify-center overflow-hidden">
            <img src={service.nav_logo} alt="" className="w-6 h-6 object-contain" />
          </div>
          <div className="min-w-0">
            <p className="text-[13px] font-medium text-gray-800 group-hover:text-universe_primary transition-colors truncate">
              {service.nav_title}
            </p>
            <p className="text-[11px] text-gray-400 mt-0.5 truncate">
              {service.nav_description?.slice(0, 26)}...
            </p>
          </div>
        </NavLink>
      ))}
    </div>
  </motion.div>
);

// ── Get in Touch small dropdown 

export const TouchDropdown = ({ onClose }) => (
  <motion.div
    variants={DROPDOWN_VARIANTS}
    initial="hidden"
    animate="visible"
    exit="exit"
    className="absolute top-full right-0 mt-2 w-52 bg-white border border-gray-100 rounded-2xl shadow-2xl shadow-black/8 p-2 z-50"
  >
    {TOUCH_LINKS.map((item) => (
      <NavLink
        key={item.to}
        to={item.to}
        onClick={onClose}
        className={({ isActive }) =>
          `flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-colors
          ${isActive
            ? 'bg-blue-50 text-universe_primary font-medium'
            : 'text-gray-700 hover:bg-gray-50 hover:text-universe_primary'}`
        }
      >
        {item.label}
        <HiOutlineArrowRight size={12} className="opacity-30" />
      </NavLink>
    ))}
  </motion.div>
);

// ── Main DesktopNav 

const DesktopNav = ({ allProducts, allservices, activeDropdown, toggleDropdown, closeAll }) => {
  return (
    <nav className="flex items-center gap-1">

      {/* Home */}
      <NavLink to="/" onClick={closeAll} className={navLinkClass}>
        Home
      </NavLink>

      {/* Products — hover to open mega menu */}
      <div
        className="relative"
        onMouseEnter={() => toggleDropdown('products')}
        onMouseLeave={() => toggleDropdown('products')}
      >
        {/* Clicking also navigates to /products page */}
        <NavLink to="/products" onClick={closeAll} className={navLinkClass}>
          <span className="flex items-center gap-1">
            Products
            <IoChevronDown
              size={13}
              className={`transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180' : ''}`}
            />
          </span>
        </NavLink>
        <AnimatePresence>
          {activeDropdown === 'products' && (
            <ProductsMegaMenu products={allProducts} onClose={closeAll} />
          )}
        </AnimatePresence>
      </div>

      {/* Services — click to open mega menu */}
      <div className="relative">
        <DropdownTrigger
          label="Services"
          name="services"
          activeDropdown={activeDropdown}
          onToggle={toggleDropdown}
        />
        <AnimatePresence>
          {activeDropdown === 'services' && (
            <ServicesMegaMenu services={allservices} onClose={closeAll} />
          )}
        </AnimatePresence>
      </div>

      {/* Portfolio */}
      <NavLink to="/portfolio" onClick={closeAll} className={navLinkClass}>
        Portfolio
      </NavLink>

      {/* Get in Touch — click dropdown */}
      <div className="relative">
        <DropdownTrigger
          label="Get in Touch"
          name="touch"
          activeDropdown={activeDropdown}
          onToggle={toggleDropdown}
        />
        <AnimatePresence>
          {activeDropdown === 'touch' && (
            <TouchDropdown onClose={closeAll} />
          )}
        </AnimatePresence>
      </div>

    </nav>
  );
};

export default DesktopNav;