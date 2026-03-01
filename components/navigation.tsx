"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const mainNavLinks = [
  { name: "Početna", href: "/" },
  {
    name: "Info",
    href: "#",
    children: [
      { name: "Kako radi", href: "/#how-it-works" },
      { name: "Oprema", href: "/#machine-info" },
      { name: "Šta operemo", href: "/#what-to-clean" },
      { name: "Zašto mi", href: "/#why-choose-us" },
      { name: "Poverenje", href: "/#poverenje" },
      { name: "FAQ", href: "/#faq" },
    ],
  },
  {
    name: "Cenovnik",
    href: "#",
    children: [
      { name: "Cene", href: "/#pricing" },
      { name: "Dostava i obuka", href: "/#dodatne-usluge" },
    ],
  },
  {
    name: "Usluge",
    href: "#",
    children: [
      { name: "Nameštaj", href: "/dubinsko-pranje-namestaja" },
      { name: "Tepisi", href: "/dubinsko-pranje-tepiha" },
      { name: "Automobili", href: "/dubinsko-pranje-automobila" },
    ],
  },
  {
    name: "Lokacije",
    href: "#",
    children: [
      { name: "Ćuprija", href: "/dubinsko-pranje-cuprija" },
      { name: "Paraćin", href: "/dubinsko-pranje-paracin" },
      { name: "Jagodina", href: "/dubinsko-pranje-jagodina" },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "Kontakt", href: "/kontakt" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const phoneNumber = "+381604564481";
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDrawerOpen]);

  useEffect(() => {
    setIsDrawerOpen(false);
    setOpenDropdown(null);
    setOpenMobileSection(null);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl shadow-lg shadow-foreground/5 border-b border-border/50"
            : "bg-background/80 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 sm:h-14 items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-1.5 cursor-pointer group"
            >
              <img
                src="/favicon.svg"
                alt="Dubinsko Pranje 035 - Logo"
                width={32}
                height={32}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <span className="hidden sm:block text-sm font-semibold text-foreground">
                Dubinsko Pranje
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-0.5">
              {mainNavLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="px-2 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-md hover:bg-accent cursor-pointer flex items-center gap-0.5">
                      {link.name}
                      <ChevronDown className="h-3 w-3" />
                    </button>
                    {openDropdown === link.name && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-card border border-border rounded-lg shadow-xl py-1.5 z-50">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-3 py-2 text-xs transition-colors hover:bg-accent ${
                              pathname === child.href
                                ? "text-primary font-medium"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-2 py-1.5 text-xs font-medium transition-colors duration-200 rounded-md hover:bg-accent relative group ${
                      pathname === link.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-1/2 rounded-full" />
                  </Link>
                ),
              )}
            </div>

            <div className="flex items-center gap-3">
              <Button
                asChild
                size="sm"
                className="hidden sm:inline-flex gap-1.5 h-8 text-xs transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <a
                  href={`tel:${phoneNumber}`}
                  onClick={() => trackEvent("click_tel", "nav_tel")}
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span className="hidden md:inline">Pozovite</span>
                </a>
              </Button>

              <button
                onClick={() => setIsDrawerOpen(true)}
                className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-foreground transition-all hover:bg-accent/80 active:scale-95 cursor-pointer"
                aria-label="Otvori meni"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] bg-foreground/20 backdrop-blur-sm transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsDrawerOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 z-[70] h-full w-72 max-w-[85vw] bg-card border-l border-border shadow-2xl transition-transform duration-300 ease-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-3 border-b border-border bg-muted/50">
          <span className="text-sm font-semibold text-foreground">Meni</span>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-foreground transition-all hover:bg-destructive hover:text-destructive-foreground active:scale-95 cursor-pointer"
            aria-label="Zatvori meni"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col h-[calc(100%-57px)] bg-card">
          <div className="flex-1 overflow-y-auto py-3">
            {mainNavLinks.map((link, index) =>
              link.children ? (
                <div
                  key={link.name}
                  className="border-b border-border/30"
                  style={{
                    animationDelay: `${index * 40}ms`,
                    animationFillMode: "both",
                  }}
                >
                  <button
                    onClick={() =>
                      setOpenMobileSection((prev) =>
                        prev === link.name ? null : link.name
                      )
                    }
                    className={`flex w-full items-center justify-between px-5 py-3 text-left text-sm font-medium transition-all hover:bg-accent/50 ${
                      openMobileSection === link.name
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openMobileSection === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      openMobileSection === link.name ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsDrawerOpen(false)}
                        className={`block px-5 py-2.5 pl-8 text-sm transition-colors hover:bg-accent/50 text-left ${
                          pathname === child.href
                            ? "text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsDrawerOpen(false)}
                  className={`block px-5 py-3 text-left text-sm font-medium border-b border-border/30 transition-all ${
                    pathname === link.href
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          <div className="p-4 border-t border-border bg-muted/30 space-y-3">
            <Button
              asChild
              className="w-full gap-2 min-h-[48px] cursor-pointer"
            >
              <a href={`tel:${phoneNumber}`}>
                <Phone className="h-5 w-5" />
                Pozovite nas
              </a>
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Pomoravlje | Ćuprija • Paraćin • Jagodina
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
