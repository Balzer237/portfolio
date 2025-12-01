"use client";

import { useTranslation } from 'react-i18next';
import { useState } from "react";
import { useParams, usePathname } from "next/navigation";
import {
  FiHome,
  FiUser,
  FiFolder,
  FiFileText,
  FiMail,
} from "react-icons/fi";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Home", href: "/me", icon: FiHome },
  { label: "About", href: "/me/about", icon: FiUser },
  { label: "Work", href: "/me/work", icon: FiFolder },
  { label: "Services", href: "/me/services", icon: FiFolder },
  { label: "Blog", href: "/blog", icon: FiFileText ,active:false},
  { label: "Contact", href: "/me/contact", icon: FiMail },
];

function NavItem({ href, icon: Icon, label, active, onClick,canClick=true }) {
 
  return (
    <Link
      href={canClick?href:''}
      onClick={canClick&&onClick}
      className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all
        ${active ? "bg-gray-700 font-semibold" :canClick? "hover:bg-gray-800":"text-gray-600"}`
      }
    >
      <Icon className="text-xl" />
      <span>{label}</span>
    </Link>
  );
}

// ---------------------------------------------
// COMPONENT: Sidebar
// ---------------------------------------------
export default function Sidebar() {
 const {locale} = useParams()

  const pathname = usePathname();
  const [open, setOpen] = useState(false);
const {t}=useTranslation()

  const renderNav = (onClick) =>
     
    NAV_ITEMS.map((item) => (
      <NavItem
        key={item.href}
        href={item.href}
        label={t(`${item.label}`)}
        icon={item.icon}
        active={pathname === `/${locale}${item.href}`}
        onClick={onClick}
        canClick={item.active??true}
      />
    ));
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col h-screen bg-gray-900 text-white p-6 fixed left-0 top-0 w-[15%]">
        <h1 className="text-3xl font-bold mb-10">Kevin</h1>
        <nav className="flex flex-col gap-4">{renderNav()}</nav>
      </aside>

      {/* Mobile Menu Button */}
      {!open && (
        <button
          onClick={() => {setOpen(true),console.log('je clique')}}
          className="lg:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white px-4 py-2 rounded-md shadow-lg"
        >
          Menu
        </button>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden h-full fixed left-0 top-0 w-64 bg-gray-900 text-white p-6 transform transition-transform duration-300 z-40
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center mb-10">
          <span className="text-2xl font-bold">Kevin</span>
          <button
            onClick={() => setOpen(false)}
            className="text-white text-2xl"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-4">
          {renderNav(() => setOpen(false))}
        </nav>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
