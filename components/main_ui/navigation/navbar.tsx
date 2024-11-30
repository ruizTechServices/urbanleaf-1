"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Search, Leaf } from 'lucide-react'
import Image from "next/image"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Input } from "@/components/ui/input"

export function NavBar() {
  const [open, setOpen] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const handleSearch = (value: string) => {
    setSearch(value)
    console.log("Searching for:", value)
  }

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/urbanLeaf-logo48.png" alt="Logo" width={48} height={48} />
            <span className="hidden md:block"><Image src="/urbanLeaf-brand48.png" alt="Logo" width={200} height={200} /></span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/" className="font-semibold">
            Home
          </Link>
          <Link href="/products" className="font-semibold">
            Products
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <div className="hidden md:flex items-center space-x-2">
            <Input
              type="search"
              placeholder="Search..."
              className="w-[200px]"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(true)}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col space-y-4">
                <Link href="#" className="font-semibold" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
                <Link href="#" className="font-semibold" onClick={() => setMenuOpen(false)}>
                  Products
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type to search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Search results will appear here...</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </nav>
  )
}

