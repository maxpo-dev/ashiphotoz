"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
//   { name: "Contact", href: "/contact" },
]

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
      <Link href="/" className="flex items-center gap-2 text-xl font-bold">
  <Image 
    src="/icon.png" 
    alt="Ashi Photoz Logo" 
    width={130} 
    height={130} 
    className="w-30 h-20"
  />
  {/* <span>Ashi Photoz</span> */}
</Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <Link href="/contact">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
<Sheet open={isOpen} onOpenChange={setIsOpen}>
  <SheetTrigger asChild className="md:hidden">
    <Button variant="ghost" size="icon">
      <Menu className="w-6 h-6" />
      <span className="sr-only">Toggle menu</span>
    </Button>
  </SheetTrigger>
  <SheetContent side="right" className="w-[85%] max-w-[380px] sm:w-[400px] bg-white dark:bg-gray-900">
  {/* <SheetTitle className="sr-only">Navigation Menu</SheetTitle> Hidden but accessible */}
  <nav className="flex flex-col gap-5 mt-10 p-6 items-center">
    {navigation.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        onClick={() => setIsOpen(false)}
        className={`text-lg font-semibold w-full text-center py-2 rounded-lg transition-colors ${
          pathname === item.href 
            ? "bg-primary text-white shadow-md" 
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        }`}
      >
        {item.name}
      </Link>
    ))}
    <Button asChild className="mt-5 w-full text-lg py-3">
      <Link href="/contact" onClick={() => setIsOpen(false)}>
        Book Now
      </Link>
    </Button>
  </nav>
</SheetContent>

</Sheet>

      </div>
    </header>
  )
}

