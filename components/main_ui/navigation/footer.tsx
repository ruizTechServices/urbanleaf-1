"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, MapPin, Phone, ChevronsUpDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const footerLinks = {
  shop: {
    title: "Shop",
    links: [
      { label: "Shop All", href: "#" },
      { label: "Shop Specials", href: "#" },
      { label: "Shop By Category", href: "#" },
      { label: "Shop By Effect", href: "#" },
      { label: "Shop By Strain", href: "#" },
    ],
  },
  categories: {
    title: "Categories",
    links: [
      { label: "Flower", href: "#" },
      { label: "Pre-Rolls", href: "#" },
      { label: "Vapes", href: "#" },
      { label: "Edibles", href: "#" },
      { label: "Extracts", href: "#" },
      { label: "Tinctures", href: "#" },
      { label: "Topicals", href: "#" },
      { label: "Accessories", href: "#" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Directions", href: "#" },
    ],
  },
  more: {
    title: "More",
    links: [
      { label: "Rewards", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
}

function FooterSection({ title, links }) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="w-full md:hidden">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="space-y-2"
      >
        <div className="flex items-center justify-between py-2">
          <h3 className="text-lg font-semibold tracking-wide">{title}</h3>
          <CollapsibleTrigger asChild>
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-9 p-0 hover:bg-gray-800"
            >
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle {title} section</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2 pb-4">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block rounded-md px-2 py-1 text-sm text-gray-400 transition-colors hover:text-white hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo and Social Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <div className="flex items-center space-x-2">
                <div className="relative h-12 w-12">
                  <Image
                    src="/urbanLeaf-logo48.png"
                    alt="Urban Leaf Logo"
                    layout="fill"
                    objectFit="contain"
                    className="rounded-md bg-white"
                  />
                </div>
                <span className="text-xl font-bold tracking-tight">URBAN LEAF</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-gray-400">Organic Relief Leaf</p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.85-11.55L11 13.3V8h2v4.17l3.85-3.85 1.41 1.41-5.26 5.27-3.85-3.85 1.41-1.41 2.44 2.44z" />
                </svg>
                <span className="sr-only">Yelp</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 14H7v-2h4v2zm0-4H7v-2h4v2zm0-4H7V7h4v2zm5 8h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2z" />
                </svg>
                <span className="sr-only">Weedmaps</span>
              </Link>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <React.Fragment key={key}>
              <FooterSection title={section.title} links={section.links} />
              <div className="hidden md:block">
                <h3 className="text-lg font-semibold tracking-wide mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="block text-sm text-gray-400 transition-colors hover:text-white hover:underline py-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-2">
              <h4 className="font-semibold tracking-wide">Hours</h4>
              <p className="text-sm text-gray-400">Mon – Wed 10AM to 10PM</p>
              <p className="text-sm text-gray-400">Thur – Sat 10AM to 11PM</p>
              <p className="text-sm text-gray-400">Sunday 11AM to 10PM</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold tracking-wide">Address</h4>
              <p className="flex items-start text-sm text-gray-400">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>
                  977 2nd Ave
                  <br />
                  New York, NY 10022
                </span>
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold tracking-wide">Contact</h4>
              <p className="flex items-center text-sm text-gray-400">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0" />
                <a href="tel:+16463602157" className="hover:underline transition-colors hover:text-white">
                  (646) 360-2157
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="mt-12 flex flex-col items-center justify-between space-y-4 border-t border-gray-800 pt-8 text-sm md:flex-row md:space-y-0">
          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Urban Leaf. All Rights Reserved.
          </p>
          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} <span><a href="https://ruiztechservices.com">ruizTechServices</a></span><span className="blinking">|</span>, LLC. 
          </p>
          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-gray-400 transition-colors hover:text-white hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-400 transition-colors hover:text-white hover:underline"
            >
              Terms Of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}