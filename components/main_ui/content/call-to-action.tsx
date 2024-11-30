import { Button } from "@/components/ui/button"

export const CallToAction = () => (
  <section
    className="relative bg-cover bg-center py-24 md:py-32"
    style={{ backgroundImage: 'url(/bg_13.jpg)' }}
  >
    <div className="absolute" aria-hidden="true" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
          Visit Us Today!
        </h2>
        <p className="text-lg md:text-xl text-green-500">
          Come to our store or contact us for more information.
        </p>
        <Button className="bg-green-500 text-black hover:bg-green-300 text-lg px-8 py-3 rounded-full">
          Contact Us
        </Button>
      </div>
    </div>
  </section>
)

