'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useMediaQuery } from '@/hooks/use-media-query'

interface Product {
  id: string;
  productName: string;
  productImage: string;
}

const ProductCarousel = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement & { touchStartX?: number }>(null)

  const isMobile = useMediaQuery('(max-width: 640px)')
  const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)')

  const itemsPerView = isMobile ? 1 : isTablet ? 2 : 3
  const totalSlides = Math.max(0, products.length - (itemsPerView - 1))

  useEffect(() => {
    fetch("https://674b2c5171933a4e8854a555.mockapi.io/api/v1/products")
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  useEffect(() => {
    if (products.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
        )
      }, 5000)

      return () => clearInterval(timer)
    }
  }, [products.length, totalSlides])

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    )
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (carouselRef.current) {
      carouselRef.current.touchStartX = e.touches[0].clientX
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (carouselRef.current && carouselRef.current.touchStartX !== undefined) {
      const touchEndX = e.touches[0].clientX
      const diff = carouselRef.current.touchStartX - touchEndX
      if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0) {
          handleNext()
        } else {
          handlePrevious()
        }
        carouselRef.current.touchStartX = undefined
      }
    }
  }

  if (!products.length) return null

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
        Our Products
      </h2>
      
      <div className="relative" ref={carouselRef}>
        <button 
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-white p-1 sm:p-2 rounded-full shadow-lg hover:bg-gray-50 transition-all z-10"
          aria-label="Previous product"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
        </button>
        
        <button 
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-white p-1 sm:p-2 rounded-full shadow-lg hover:bg-gray-50 transition-all z-10"
          aria-label="Next product"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
        </button>

        <div 
          className="overflow-hidden touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className={`w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-4`}
              >
                <div className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={product.productImage} 
                      alt={product.productName}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                  </div>
                  
                  <div className="p-3 sm:p-4">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-gray-900 line-clamp-2">
                      {product.productName}
                    </h3>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">
                        Learn More
                      </span>
                      <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-1 sm:gap-2 mt-4 sm:mt-6">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 sm:h-2 rounded-full transition-all ${
                currentIndex === index ? 'w-4 sm:w-6 bg-gray-800' : 'w-1 sm:w-2 bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCarousel
