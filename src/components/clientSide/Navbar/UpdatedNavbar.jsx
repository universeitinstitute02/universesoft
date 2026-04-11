// import React, { useEffect, useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { Fade as Hamburger } from 'hamburger-react';
// import { motion } from 'framer-motion';
// import { IoMdArrowDropdown } from 'react-icons/io';
// import useAxiosPublic from '../../../hooks/useAxiosPublic';
// import { useQuery } from '@tanstack/react-query'


// const UpdatedNavbar = () => {
//     const [isOpen, setOpenMenu] = useState(false);
//     const [isDropdownOpen, setDropdownOpen] = useState(false);
//     const [isDropdownOpen2, setDropdownOpen2] = useState(false);
//     const [isGetInTouchOpen, setGetInTouch] = useState(false);

//     const axiosPublic = useAxiosPublic();

//     const { data: allservices = [] } = useQuery({
//         queryKey: ['services'],
//         queryFn: async () => {
//             const response = await axiosPublic.get('/get-all-service');
//             return response.data.data;
//         }
//     })

//     const { data: allProducts = [] } = useQuery({
//         queryKey: ['products'],
//         queryFn: async () => {
//             const res = await axiosPublic.get('/get-products');
//             return res.data.data;
//         }
//     })
//     // console.log("from nav",allProducts);




    

//     useEffect(() => {
//         const handleOutsideClick = (event) => {
//             if (!event.target.closest('.navbarUl')) {
//                 setDropdownOpen(false);
//                 setDropdownOpen2(false);
//                 setGetInTouch(false);
//             }
//         };


//         document.addEventListener('click', handleOutsideClick);
//         return () => {
//             document.removeEventListener('click', handleOutsideClick);
//         };
//     }, [setDropdownOpen, setDropdownOpen2, setGetInTouch]);


//     const handleDropdownToggle = () => {
//         setDropdownOpen(!isDropdownOpen);
//         setDropdownOpen2(false);
//         setGetInTouch(false);
//     };

//     const handleDropdownToggle2 = () => {
//         setDropdownOpen2(!isDropdownOpen2);
//         setGetInTouch(false);
//         setDropdownOpen(false);
//     };

//     const handleDropdownToggle3 = () => {
//         setGetInTouch(!isGetInTouchOpen);
//         setDropdownOpen2(false);
//         setDropdownOpen(false);
//     };



//     const handleHideDrawer = () => {
//         setOpenMenu(false);
//         document.getElementById('my-drawer').checked = false;
//     };



//     const logo = 'https://res.cloudinary.com/dxvacpgrv/image/upload/v1734868184/UniverseSoftTech/Image/htnalzbw4rj4jigwrckj.png';

//     const NavLinkStyle =
//         'text-universe_secondary hover:text-text_primari text-xl py-[5px] hover:px-[10px] lg:px-[10px] transition-all duration-300 font-medium';

//     // Desktop View 
//     const navNavLinks = (
//         <>

//             <NavLink to="/" onClick={handleHideDrawer} className={`${NavLinkStyle} `}>
//                 Home
//             </NavLink>



//             {/* Products Dropdown Toggle */}
//             <p
//                 // onClick={handleDropdownToggle}
//                 className={`${NavLinkStyle} transition-all duration-300 flex justify-between items-center cursor-pointer`}
//             >
//                <Link to={'/products'}>Products</Link>
//                 {/* <span className={`transition-all duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}>
//                     <IoMdArrowDropdown />
//                 </span> */}
//             </p>

//             {/* Products Dropdown Menu */}
//             <div
//                 className={`absolute border mx-auto top-12 left-120 rounded-md bg-white transition-all origin-top duration-300 ${isDropdownOpen ? 'block scale-y-100 p-2' : 'scale-y-0 h-0'
//                     }`}
//                 style={{ width: '200px', minWidth: '700px', maxWidth: '700px' }} // Adjust width if needed
//             >
//                 <div className="grid grid-cols-3 gap-4 ">
//                     {allProducts?.map((product) => (
//                         <NavLink

//                             key={product._id}
//                             to={`/productsDetails/${product._id}`}
//                             onClick={handleHideDrawer}
//                             className="flex items-center gap-2 p-2 text-gray-400 hover:text-blue-500 transition-all duration-300"
//                         >
//                             <img src={product.nav_logo}  className="w-[30px]" />

//                             <div className="">
//                                 <span className="text-gray-400">{product.nav_title} </span>
//                                 <p className="text-gray-300 text-[11px]">{product.nav_description.slice(0, 20)}... </p>
//                             </div>
//                         </NavLink>
//                     ))}
//                 </div>
//             </div>

//             {/* Services Dropdown Toggle */}
//             <p
//                 onClick={handleDropdownToggle2}
//                 className={`${NavLinkStyle} transition-all duration-300 flex justify-between items-center cursor-pointer`}
//             >
//                 Services
//                 <span className={`transition-all duration-300 ${isDropdownOpen2 ? 'rotate-180' : 'rotate-0'}`}>
//                     <IoMdArrowDropdown />
//                 </span>
//             </p>

//             {/* Services Dropdown Menu */}
//             <div
//                 className={`absolute border mx-auto top-10 left-166 rounded-md bg-white transition-all origin-top duration-300 ${isDropdownOpen2 ? 'block scale-y-100 p-2' : 'scale-y-0 h-0'
//                     }`}
//                 style={{ width: '200px', minWidth: '700px', maxWidth: '700px' }} // Adjust width if needed
//             >
//                 <div className="grid grid-cols-3 gap-4 ">
//                     {allservices?.map((service) => (
//                         <NavLink
//                             key={service._id}
//                             to={`/serviceDetails/${service._id}`}
//                             onClick={handleHideDrawer}
//                             className="flex items-center gap-2 p-2 hover:text-blue-500 transition-all duration-300"
//                         >
//                             <img src={service.nav_logo} className="w-8 h-8 bg-white rounded-lg" />
//                             <div className="">
//                                 <span className="text-gray-400">{service.nav_title} </span>
//                                 <p className="text-gray-300 text-[11px]">{service.nav_description.slice(0, 20)}... </p>
//                             </div>
//                         </NavLink>
//                     ))}
//                 </div>
//             </div>

//             <NavLink to="/portfolio" onClick={handleHideDrawer} className={`${NavLinkStyle} `}>
//                 Portfolio
//             </NavLink>

//             {/* Get in Touch Dropdown Toggle */}
//             <p
//                 onClick={handleDropdownToggle3}
//                 className={`${NavLinkStyle} transition-all duration-300 flex justify-between items-center cursor-pointer`}
//             >
//                 Get in Touch
//                 <span className={`transition-all duration-300 ${isGetInTouchOpen ? 'rotate-180' : 'rotate-0'}`}>
//                     <IoMdArrowDropdown />
//                 </span>
//             </p>

//             {/* Get in Touch Dropdown Menu */}
//             <div
//                 className={`absolute border mx-auto top-10 left-[470px] rounded-md bg-white transition-all origin-top duration-300 ${isGetInTouchOpen ? 'block scale-y-100 p-2' : 'scale-y-0 h-0'
//                     }`}
//                 style={{ width: '80px', minWidth: '200px', maxWidth: '150px' }} // Adjust width if needed
//             >
//                 <div className='flex flex-col items-center justify-center'>

//                 <NavLink to="/ceo-speech" className={`${NavLinkStyle} text-left w-full`}>
//                         CEO Speech
//                     </NavLink>

//                     <NavLink to="/about-us" className={`${NavLinkStyle} text-left w-full`}>
//                         About Us
//                     </NavLink>

//                     <NavLink to="/contact-us" className={`${NavLinkStyle} text-left w-full`}>
//                         Contact Us
//                     </NavLink>

//                     <NavLink to="/career" className={`${NavLinkStyle} text-left w-full`}>
//                         Career
//                     </NavLink>

//                     <NavLink to="/company-profile" className={`${NavLinkStyle} text-left w-full`}>
//                         Company Profile
//                     </NavLink>

//                     <NavLink to="/our-team" className={`${NavLinkStyle} text-left w-full`}>
//                         Our Team
//                     </NavLink>
//                     <NavLink to="/blogs" className={`${NavLinkStyle} text-left w-full`}>
//                         Blogs
//                     </NavLink>
//                 </div>


//             </div>

//         </>
//     );

//     // Mobile View 
//     const navNavLinksForDrawer = (
//         <>
//             <NavLink to="/" onClick={handleHideDrawer} className={`${NavLinkStyle}`}>
//                 <p className='text-white'>Home</p>
//             </NavLink>
//             <NavLink to="/about-us" onClick={handleHideDrawer} className={`${NavLinkStyle}`}>
//                 <p className='text-white'>About Us</p>
//             </NavLink>

//             {/* Mobile Drawer Dropdown */}
//             {/* Products  */}
//             <p
//                 onClick={handleDropdownToggle}
//                 className={`text-xl hover:text-white rounded-md py-[5px] transition-all duration-300 flex justify-between items-center cursor-pointer`}
//             >
//                 Products
//                 <span className={`transition-all duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}>
//                     <IoMdArrowDropdown />
//                 </span>
//             </p>

//             <div
//                 className={`rounded-md bg-black/10 flex flex-col ml-4 transition-all origin-top duration-300 ${isDropdownOpen ? 'block scale-y-100 p-2' : 'scale-y-0 h-0'
//                     } gap-2`}
//             >
//                 {allProducts.map((product) => (
//                     <NavLink
//                         key={product._id}
//                         to={`/productsDetails/${product._id}`}
//                         onClick={handleHideDrawer}
//                         className="flex items-center gap-2 p-2 hover:text-blue-500 transition-all duration-300"
//                     >
//                         <img src={product.nav_logo} className="w-8 h-8 bg-white rounded-lg" />
//                         <span className="text-white">{product.nav_title}</span>
//                     </NavLink>
//                 ))}
//             </div>


//             {/* Mobile Drawer Dropdown */}
//             {/* Services  */}
//             <p
//                 onClick={handleDropdownToggle2}
//                 className={`text-xl hover:text-white rounded-md py-[5px] transition-all duration-300 flex justify-between items-center cursor-pointer`}
//             >
//                 Services
//                 <span className={`transition-all duration-300 ${isDropdownOpen2 ? 'rotate-180' : 'rotate-0'}`}>
//                     <IoMdArrowDropdown />
//                 </span>
//             </p>

//             <div
//                 className={`rounded-md bg-black/10 flex flex-col ml-4 transition-all origin-top duration-300 ${isDropdownOpen2 ? 'block scale-y-100 p-2' : 'scale-y-0 h-0'
//                     } gap-2`}
//             >
//                 {allservices.map((service) => (
//                     <NavLink
//                         key={service.id}
//                         to={`/serviceDetails/${service._id}`}
//                         onClick={handleHideDrawer}
//                         className="flex items-center gap-2 p-2 hover:text-blue-500 transition-all duration-300"
//                     >
//                         <img src={service.nav_logo} className="w-8 h-8 bg-white rounded-lg" />
//                         <span className="text-white">{service.nav_title} </span>
//                     </NavLink>
//                 ))}
//             </div>


//             {/* Mobile Drawer Dropdown */}
//             {/* Get in touch  */}
//             <p
//                 onClick={handleDropdownToggle3}
//                 className={`text-xl hover:text-white rounded-md py-[5px] transition-all duration-300 flex justify-between items-center cursor-pointer`}
//             >
//                 Get In Touch
//                 <span className={`transition-all duration-300 ${isGetInTouchOpen ? 'rotate-180' : 'rotate-0'}`}>
//                     <IoMdArrowDropdown />
//                 </span>
//             </p>

//             <div
//                 className={`rounded-md bg-black/10 flex flex-col ml-4 transition-all origin-top duration-300 ${isGetInTouchOpen ? 'block scale-y-100 p-2' : 'scale-y-0 h-0'
//                     } gap-2`}
//             >
//                 <div className='flex flex-col items-center justify-center'>
//                     <NavLink to="/about-us" className={`${NavLinkStyle} text-left text-white w-full`}>
//                         About Us
//                     </NavLink>

//                     <NavLink to="/contact-us" className={`${NavLinkStyle} text-left text-white w-full`}>
//                         Contact Us
//                     </NavLink>

//                     <NavLink to="/career" className={`${NavLinkStyle} text-left text-white w-full`}>
//                         Career
//                     </NavLink>

//                     <NavLink to="/company-profile" className={`${NavLinkStyle} text-left text-white w-full`}>
//                         Company Profile
//                     </NavLink>

//                     <NavLink to="/our-team" className={`${NavLinkStyle} text-left text-white w-full`}>
//                         Our Team
//                     </NavLink>

//                     <NavLink to="/blogs" className={`${NavLinkStyle} text-left text-white w-full`}>
//                         Blogs
//                     </NavLink>
//                 </div>

//             </div>








//             <NavLink to="/portfolio" onClick={handleHideDrawer} className={`${NavLinkStyle}`}>
//                 <p className="text-white">Portfolio</p>
//             </NavLink>

//         </>
//     );

//     return (
//         <div className="sticky top-0 z-20 shadow-lg">
//             <div className="navbar bg-gray-50 text-white py-1">
//                 <div className="w-full">
//                     {/* Mobile view */}
//                     <div className="text-white w-full flex justify-between items-center lg:hidden">
//                         <img src={logo} alt="Logo" className="w-24" />
//                         <div className="block lg:hidden drawer w-max z-50">
//                             <input id="my-drawer" type="checkbox" className="drawer-toggle" />
//                             <div className="drawer-content cursor-pointer">
//                                 <label htmlFor="my-drawer" className="z-50 cursor-pointer text-black">
//                                     <Hamburger toggled={isOpen} toggle={setOpenMenu} size={23} duration={0.6} />
//                                 </label>
//                             </div>
//                             <div className="drawer-side">
//                                 <label
//                                     onClick={() => setOpenMenu(false)}
//                                     htmlFor="my-drawer"
//                                     className="drawer-overlay"
//                                 ></label>
//                                 <motion.ul className="menu p-4 w-56 md:w-80 min-h-full bg-universe_secondary text-white space-y-2 rounded-lg z-40 navbarUl">
//                                     {navNavLinksForDrawer}
//                                 </motion.ul>
//                             </div>
//                         </div>
//                     </div>
//                     {/* Laptop view */}
//                     <div className="text-sm hidden lg:flex container mx-auto ">
//                         <div className='flex justify-center gap-24'>
//                             <Link to="/">
//                                 <img src={logo} alt="Logo" className="w-32" />
//                             </Link>
//                             <nav className="relative md:ml-auto flex flex-wrap items-center justify-center font-bold navbarUl gap-x-4 gap-y-1">
//                                 {navNavLinks}
//                             </nav>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UpdatedNavbar;

import React, { useEffect, useState, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoChevronDown } from 'react-icons/io5';
import { HiOutlineArrowRight } from 'react-icons/hi';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const UpdatedNavbar = () => {
    const [isOpen, setOpenMenu] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null); // 'products' | 'services' | 'touch' | null
    const [scrolled, setScrolled] = useState(false);
    const navRef = useRef(null);

    const axiosPublic = useAxiosPublic();

    const { data: allservices = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosPublic.get('/get-all-service');
            return res.data.data;
        }
    });

    const { data: allProducts = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get('/get-products');
            return res.data.data;
        }
    });

    // Scroll effect: add blur + shadow on scroll
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown when clicking outside navbar
    useEffect(() => {
        const handleOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleOutside);
        return () => document.removeEventListener('mousedown', handleOutside);
    }, []);

    const toggleDropdown = (name) => {
        setActiveDropdown(prev => prev === name ? null : name);
    };

    const closeAll = () => {
        setActiveDropdown(null);
        setOpenMenu(false);
        // For DaisyUI drawer
        const drawer = document.getElementById('my-drawer');
        if (drawer) drawer.checked = false;
    };

    const logo = 'https://res.cloudinary.com/dxvacpgrv/image/upload/v1734868184/UniverseSoftTech/Image/htnalzbw4rj4jigwrckj.png';

    // Framer Motion variants for dropdown
    const dropdownVariants = {
        hidden: { opacity: 0, y: -8, scale: 0.97 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.18, ease: 'easeOut' } },
        exit:   { opacity: 0, y: -6, scale: 0.97, transition: { duration: 0.12 } }
    };

    // Reusable NavItem trigger button
    const NavTrigger = ({ label, name }) => (
        <button
            onClick={() => toggleDropdown(name)}
            className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150
                ${activeDropdown === name
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
        >
            {label}
            <IoChevronDown
                className={`text-xs transition-transform duration-200 ${activeDropdown === name ? 'rotate-180' : ''}`}
            />
        </button>
    );

    // ─── Desktop Nav Links ───────────────────────────────────────────
    const desktopNav = (
        <>
            <NavLink
                to="/"
                onClick={closeAll}
                className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150
                    ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`
                }
            >
                Home
            </NavLink>

            {/* Products — direct link, no dropdown */}
            <NavLink
                to="/products"
                onClick={closeAll}
                className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150
                    ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`
                }
            >
                Products
            </NavLink>

            {/* Services Mega Dropdown */}
            <div className="relative">
                <NavTrigger label="Services" name="services" />
                <AnimatePresence>
                    {activeDropdown === 'services' && (
                        <motion.div
                            variants={dropdownVariants}
                            initial="hidden" animate="visible" exit="exit"
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[620px] bg-white border border-gray-100 rounded-2xl shadow-xl shadow-black/5 p-4 z-50"
                        >
                            <p className="text-[11px] font-medium text-gray-400 uppercase tracking-widest mb-3 px-1">
                                Our Services
                            </p>
                            <div className="grid grid-cols-3 gap-1">
                                {allservices.map(service => (
                                    <NavLink
                                        key={service._id}
                                        to={`/serviceDetails/${service._id}`}
                                        onClick={closeAll}
                                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition-colors group"
                                    >
                                        <div className="w-9 h-9 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 flex items-center justify-center">
                                            <img src={service.nav_logo} alt="" className="w-6 h-6 object-contain" />
                                        </div>
                                        <div>
                                            <p className="text-[13px] font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                                                {service.nav_title}
                                            </p>
                                            <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">
                                                {service.nav_description?.slice(0, 28)}...
                                            </p>
                                        </div>
                                    </NavLink>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <NavLink
                to="/portfolio"
                onClick={closeAll}
                className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150
                    ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`
                }
            >
                Portfolio
            </NavLink>

            {/* Get in Touch Dropdown */}
            <div className="relative">
                <NavTrigger label="Get in Touch" name="touch" />
                <AnimatePresence>
                    {activeDropdown === 'touch' && (
                        <motion.div
                            variants={dropdownVariants}
                            initial="hidden" animate="visible" exit="exit"
                            className="absolute top-full right-0 mt-2 w-52 bg-white border border-gray-100 rounded-2xl shadow-xl shadow-black/5 p-2 z-50"
                        >
                            {[
                                { to: '/ceo-speech',       label: 'CEO Speech' },
                                { to: '/about-us',         label: 'About Us' },
                                { to: '/contact-us',       label: 'Contact Us' },
                                { to: '/career',           label: 'Career' },
                                { to: '/company-profile',  label: 'Company Profile' },
                                { to: '/our-team',         label: 'Our Team' },
                                { to: '/blogs',            label: 'Blogs' },
                            ].map(item => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    onClick={closeAll}
                                    className={({ isActive }) =>
                                        `flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-colors
                                        ${isActive ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`
                                    }
                                >
                                    {item.label}
                                    <HiOutlineArrowRight className="text-xs opacity-0 group-hover:opacity-100" />
                                </NavLink>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );

    // ─── Mobile Drawer Links ─────────────────────────────────────────
    const mobileLinks = [
        { to: '/', label: 'Home' },
        { to: '/about-us', label: 'About Us' },
        { to: '/portfolio', label: 'Portfolio' },
    ];

    return (
        <div ref={navRef} className="sticky top-0 z-50">
            {/* Navbar shell with scroll-based backdrop */}
            <div className={`transition-all duration-300 ${
                scrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100'
                    : 'bg-white border-b border-gray-100'
            }`}>
                <div className="w-full px-4 lg:px-0">

                    {/* ── Mobile header ───────────────────────────── */}
                    <div className="flex justify-between items-center py-3 lg:hidden">
                        <Link to="/">
                            <img src={logo} alt="Logo" className="w-24" />
                        </Link>
                        <div className="drawer w-max z-50">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                <label htmlFor="my-drawer" className="cursor-pointer text-gray-700">
                                    <Hamburger toggled={isOpen} toggle={setOpenMenu} size={22} duration={0.5} />
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label onClick={closeAll} htmlFor="my-drawer" className="drawer-overlay" />
                                <motion.ul
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    className="menu p-5 w-72 min-h-full bg-[#0f172a] text-white space-y-1"
                                >
                                    {/* Mobile logo */}
                                    <li className="mb-4">
                                        <img src={logo} alt="Logo" className="w-28 brightness-0 invert" />
                                    </li>

                                    {/* Simple links */}
                                    {mobileLinks.map(l => (
                                        <li key={l.to}>
                                            <NavLink to={l.to} onClick={closeAll}
                                                className="text-gray-300 hover:text-white hover:bg-white/10 rounded-xl px-3 py-2.5 text-sm">
                                                {l.label}
                                            </NavLink>
                                        </li>
                                    ))}

                                    {/* Products accordion */}
                                    <li>
                                        <button onClick={() => toggleDropdown('products')}
                                            className="flex justify-between items-center w-full text-gray-300 hover:text-white px-3 py-2.5 text-sm rounded-xl hover:bg-white/10">
                                            Products
                                            <IoChevronDown className={`transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
                                        </button>
                                        <AnimatePresence>
                                            {activeDropdown === 'products' && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden ml-3 mt-1 space-y-1"
                                                >
                                                    {allProducts.map(p => (
                                                        <NavLink key={p._id} to={`/productsDetails/${p._id}`} onClick={closeAll}
                                                            className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 text-sm">
                                                            <img src={p.nav_logo} className="w-6 h-6 rounded bg-white/20 object-contain" />
                                                            {p.nav_title}
                                                        </NavLink>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </li>

                                    {/* Services accordion */}
                                    <li>
                                        <button onClick={() => toggleDropdown('services')}
                                            className="flex justify-between items-center w-full text-gray-300 hover:text-white px-3 py-2.5 text-sm rounded-xl hover:bg-white/10">
                                            Services
                                            <IoChevronDown className={`transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                                        </button>
                                        <AnimatePresence>
                                            {activeDropdown === 'services' && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden ml-3 mt-1 space-y-1"
                                                >
                                                    {allservices.map(s => (
                                                        <NavLink key={s._id} to={`/serviceDetails/${s._id}`} onClick={closeAll}
                                                            className="flex  items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 text-sm">
                                                            <img src={s.nav_logo} className="w-6 h-6 rounded bg-white/20 object-contain" />
                                                            {s.nav_title}
                                                        </NavLink>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </li>

                                    {/* CTA */}
                                    <li className="pt-4">
                                        <Link to="/request-demo" onClick={closeAll}
                                            className="block text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-3 rounded-xl transition-colors">
                                            Get a Demo
                                        </Link>
                                    </li>
                                </motion.ul>
                            </div>
                        </div>
                    </div>

                    {/* ── Desktop header ───────────────────────────── */}
                    <div className="hidden lg:flex items-center justify-between container mx-auto py-3">
                        <Link to="/">
                            <img src={logo} alt="Logo" className="w-32" />
                        </Link>

                        {/* Center nav links */}
                        <nav className="flex items-center gap-1">
                            {desktopNav}
                        </nav>

                        {/* Right CTA */}
                        <Link to="/request-demo"
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-all duration-200 shadow-sm shadow-blue-200">
                            Get a Demo
                            <HiOutlineArrowRight />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UpdatedNavbar;
