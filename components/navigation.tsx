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
    name: "Usluge",
    href: "#",
    children: [
      { name: "Dubinsko pranje nameštaja", href: "/dubinsko-pranje-namestaja" },
      { name: "Dubinsko pranje tepiha", href: "/dubinsko-pranje-tepiha" },
      { name: "Dubinsko pranje automobila", href: "/dubinsko-pranje-automobila" },
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
  { name: "Cenovnik", href: "/cenovnik" },
  { name: "Kako funkcioniše", href: "/kako-funkcionise" },
  { name: "Blog", href: "/blog" },
  { name: "Kontakt", href: "/kontakt" },
];

const mobileNavLinks = [
  { name: "Početna", href: "/" },
  { name: "Dubinsko pranje nameštaja", href: "/dubinsko-pranje-namestaja" },
  { name: "Dubinsko pranje tepiha", href: "/dubinsko-pranje-tepiha" },
  { name: "Dubinsko pranje automobila", href: "/dubinsko-pranje-automobila" },
  { name: "Ćuprija", href: "/dubinsko-pranje-cuprija" },
  { name: "Paraćin", href: "/dubinsko-pranje-paracin" },
  { name: "Jagodina", href: "/dubinsko-pranje-jagodina" },
  { name: "Cenovnik", href: "/cenovnik" },
  { name: "Kako funkcioniše", href: "/kako-funkcionise" },
  { name: "Blog", href: "/blog" },
  { name: "Kontakt", href: "/kontakt" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
        <div className="mx-auto max-w-10xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 cursor-pointer group"
            >
              <img
                src="/favicon.svg"
                alt="Dubinsko Pranje 035 - Logo"
                width={40}
                height={40}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <span className="hidden sm:block font-semibold text-foreground">
                Dubinsko Pranje
              </span>
            </Link>

            <div className="hidden xl:flex items-center gap-1">
              {mainNavLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-accent cursor-pointer flex items-center gap-1"
                    >
                      {link.name}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>
                    {openDropdown === link.name && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-card border border-border rounded-xl shadow-xl py-2 z-50">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-2.5 text-sm transition-colors hover:bg-accent ${
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
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-accent relative group ${
                      pathname === link.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-1/2 rounded-full" />
                  </Link>
                )
              )}
            </div>

            <div className="flex items-center gap-3">
              <Button
                asChild
                size="sm"
                className="hidden sm:inline-flex gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <a
                  href={`tel:${phoneNumber}`}
                  onClick={() => trackEvent("click_tel", "nav_tel")}
                >
                  <Phone className="h-4 w-4" />
                  <span className="hidden md:inline">Pozovite nas</span>
                </a>
              </Button>

              <button
                onClick={() => setIsDrawerOpen(true)}
                className="xl:hidden flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-foreground transition-all hover:bg-accent/80 active:scale-95 cursor-pointer"
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
        className={`fixed top-0 right-0 z-[70] h-full w-80 max-w-[85vw] bg-card border-l border-border shadow-2xl transition-transform duration-300 ease-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border bg-muted/50">
          <span className="font-semibold text-foreground">Meni</span>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-foreground transition-all hover:bg-destructive hover:text-destructive-foreground active:scale-95 cursor-pointer"
            aria-label="Zatvori meni"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col h-[calc(100%-73px)] bg-card">
          <div className="flex-1 overflow-y-auto py-4">
            {mobileNavLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-6 py-4 text-right text-base font-medium border-b border-border/30 transition-all ${
                  pathname === link.href
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                } ${isDrawerOpen ? "animate-in fade-in slide-in-from-right-3" : ""}`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: "both",
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="p-4 border-t border-border bg-muted/30 space-y-3">
            <Button asChild className="w-full gap-2 min-h-[48px] cursor-pointer">
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
