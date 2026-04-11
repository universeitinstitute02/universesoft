
import { useState, useEffect, useRef } from 'react';

const useNavbar = () => {
  // Hamburger open state (mobile)
  const [isOpen, setOpenMenu] = useState(false);

  // Which dropdown is currently open: 'products' | 'services' | 'touch' | null
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Whether user has scrolled past 10px (used for backdrop-blur)
  const [scrolled, setScrolled] = useState(false);

  // Ref attached to the navbar root so we can detect outside clicks
  const navRef = useRef(null);

  // ── Scroll listener ──────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Outside click: close all dropdowns ──────────────────────────
  useEffect(() => {
    const onMouseDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, []);

useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
}, [isOpen]);

  // ── Toggle a specific dropdown (click same → close, different → switch) ──
  const toggleDropdown = (name) =>
    setActiveDropdown((prev) => (prev === name ? null : name));

  // ── Close everything: dropdowns + mobile panel 
  const closeAll = () => {
    setActiveDropdown(null);
    setOpenMenu(false);
   
  };

  return {
    isOpen,
    setOpenMenu,
    activeDropdown,
    toggleDropdown,
    scrolled,
    closeAll,
    navRef,
  };
};

export default useNavbar;