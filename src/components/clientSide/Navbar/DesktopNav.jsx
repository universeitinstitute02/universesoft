import { NavLink, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { IoChevronDown } from 'react-icons/io5';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { TOUCH_LINKS, DROPDOWN_VARIANTS } from './navbarConstants';

// modern glass effect
const navLinkClass = ({ isActive }) =>
  `px-4 py-2 rounded-xl text-[14px] font-semibold transition-all duration-300 whitespace-nowrap flex items-center gap-1.5
  ${isActive
    ? 'text-universe_primary bg-blue-50/80 shadow-sm border border-blue-100/50'
    : 'text-slate-600 hover:bg-slate-50 hover:text-universe_primary'}`;

    // mega menu item component
const MegaItem = ({ to, title, description, logo, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className="flex items-start gap-4 p-3.5 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-white transition-all duration-300 group border border-transparent hover:border-blue-100"
  >
    <div className="w-11 h-11 rounded-xl bg-slate-50 flex-shrink-0 flex items-center justify-center border border-slate-100 group-hover:scale-110 group-hover:bg-white group-hover:shadow-md transition-all duration-300">
      <img src={logo} alt="" className="w-7 h-7 object-contain" />
    </div>
    <div className="min-w-0">
      <p className="text-[14px] font-bold text-slate-800 group-hover:text-universe_primary transition-colors">
        {title}
      </p>
      <p className="text-[12px] text-slate-500 mt-1 leading-relaxed line-clamp-1">
        {description}
      </p>
    </div>
  </NavLink>
);

// product and service
export const SharedMegaMenu = ({ items, type, onClose }) => (
  <motion.div
    variants={DROPDOWN_VARIANTS}
    initial="hidden"
    animate="visible"
    exit="exit"
    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[640px] bg-white/95 backdrop-blur-xl border border-slate-200/60 rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-6 z-50 overflow-hidden"
  >
    {/* Background Decorative Blur */}
    <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-100/30 blur-3xl rounded-full" />
    
    <div className="relative z-10">
      <div className="flex justify-between items-center mb-5 px-1">
        <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[2px]">
          Our {type}
        </h4>
        <Link to={`/${type.toLowerCase()}`} onClick={onClose} className="text-[12px] font-bold text-universe_primary flex items-center gap-1 hover:gap-2 transition-all">
          View All <HiOutlineArrowRight />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {items.map((item) => (
          <MegaItem
            key={item._id}
            to={type === 'Products' ? `/productsDetails/${item._id}` : `/serviceDetails/${item._id}`}
            title={item.nav_title}
            description={item.nav_description}
            logo={item.nav_logo}
            onClick={onClose}
          />
        ))}
      </div>
    </div>
  </motion.div>
);

const DesktopNav = ({ allProducts, allservices, activeDropdown, toggleDropdown, closeAll }) => {
  return (
    <nav className="flex items-center gap-2">
      <NavLink to="/" onClick={closeAll} className={navLinkClass}>Home</NavLink>

      {/* Products — Hover logic */}
      <div 
        className="relative py-2" 
        onMouseEnter={() => toggleDropdown('products')} 
        onMouseLeave={() => toggleDropdown(null)}
      >
        <button className={navLinkClass({ isActive: activeDropdown === 'products' })}>
          Products
          <IoChevronDown className={`transition-transform duration-300 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
        </button>
        {/* invisible hover area */}
        <div className="absolute top-full left-0 w-full h-4 bg-transparent" />
        <AnimatePresence>
          {activeDropdown === 'products' && (
            <SharedMegaMenu items={allProducts} type="Products" onClose={closeAll} />
          )}
        </AnimatePresence>
      </div>

      {/* Services — Hover logic (As requested) */}
      <div 
        className="relative py-2" 
        onMouseEnter={() => toggleDropdown('services')} 
        onMouseLeave={() => toggleDropdown(null)}
      >
        <button className={navLinkClass({ isActive: activeDropdown === 'services' })}>
          Services
          <IoChevronDown className={`transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
        </button>
        <div className="absolute top-full left-0 w-full h-4 bg-transparent" />
        <AnimatePresence>
          {activeDropdown === 'services' && (
            <SharedMegaMenu items={allservices} type="Services" onClose={closeAll} />
          )}
        </AnimatePresence>
      </div>

      <NavLink to="/portfolio" onClick={closeAll} className={navLinkClass}>Portfolio</NavLink>

      {/* Get in Touch — Static Click (Dropdown) */}
      <div className="relative py-2">
        <button 
          onClick={() => toggleDropdown(activeDropdown === 'touch' ? null : 'touch')}
          className={navLinkClass({ isActive: activeDropdown === 'touch' })}
        >
          Get in Touch
          <IoChevronDown className={`transition-transform duration-300 ${activeDropdown === 'touch' ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {activeDropdown === 'touch' && (
            <motion.div
              variants={DROPDOWN_VARIANTS}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-full right-0 mt-2 w-56 bg-white border border-slate-200 rounded-3xl shadow-2xl p-2.5 z-50"
            >
              {TOUCH_LINKS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeAll}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-universe_primary transition-all group"
                >
                  {item.label}
                  <HiOutlineArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default DesktopNav;