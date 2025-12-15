"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { name: "Početna", href: "#hero" },
  { name: "Kako funkcioniše", href: "#how-it-works" },
  { name: "Mašina", href: "#machine-info" },
  { name: "Šta možete čistiti", href: "#what-to-clean" },
  { name: "Cenovnik", href: "#pricing" },
  { name: "Zašto mi", href: "#why-choose-us" },
  { name: "Kontakt", href: "#contact-section" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const phoneNumber = "+381604564481"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isDrawerOpen])

  const handleNavClick = (href: string) => {
    setIsDrawerOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

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
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("#hero")
              }}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                035
              </div>
              <span className="hidden sm:block font-semibold text-foreground">Dubinsko Pranje</span>
            </a>

            {/* Desktop Navigation - hidden, drawer used for both */}
            <div className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-accent cursor-pointer relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-1/2 rounded-full" />
                </a>
              ))}
            </div>

            {/* CTA Button & Menu Toggle */}
            <div className="flex items-center gap-3">
              <Button
                asChild
                size="sm"
                className="hidden sm:inline-flex gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <a href={`tel:${phoneNumber}`}>
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
        {/* Drawer Header */}
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

        {/* Drawer Content */}
        <div className="flex flex-col h-[calc(100%-73px)] bg-card">
          <div className="flex-1 overflow-y-auto py-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className={`block px-6 py-4 text-right text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 border-b border-border/30 transition-all cursor-pointer ${
                  isDrawerOpen ? "animate-in fade-in slide-in-from-right-3" : ""
                }`}
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: "both" }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Drawer Footer */}
          <div className="p-4 border-t border-border bg-muted/30 space-y-3">
            <Button asChild className="w-full gap-2 min-h-[48px] cursor-pointer">
              <a href={`tel:${phoneNumber}`}>
                <Phone className="h-5 w-5" />
                Pozovite nas
              </a>
            </Button>
            <p className="text-center text-sm text-muted-foreground">Pomoravlje | Ćuprija • Paraćin • Jagodina</p>
          </div>
        </div>
      </div>
    </>
  )
}
