import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section className="max-w-full mx-auto px-4 py-16" style={{ backgroundImage: 'url(/bg_13.jpg)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions at Urban Leaf Dispensary</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="bg-white rounded-lg shadow-md">
            <AccordionTrigger className="text-xl font-semibold text-gray-800 px-6 py-4">What is Urban Leaf's address?</AccordionTrigger>
            <AccordionContent className="text-gray-600 px-6 pb-4">
              <i>old:Urban Leaf is located at 977 2nd Ave, making us a convenient option for those 
              searching for a "Dispensary near me" in New York, NY. We are conveniently near Midtown East, Sutton Place and are a 
              close to the Diamond District.</i> 
              <br/>
              <br/>///ReWrite:
              <br/> Urban Leaf, conveniently located at 977 2nd Ave in the heart of New York City, is your go-to destination for premium cannabis products. Perfectly situated near Midtown East, Sutton Place, and just steps away from the Diamond District, we make it easy for you to find exactly what you need when searching for a "dispensary near me" in NYC. Stop by and discover our curated selection in a location that’s as convenient as it is accessible!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-white rounded-lg shadow-md">
            <AccordionTrigger className="text-xl font-semibold text-gray-800 px-6 py-4">What Are Your Dispensary Operating Hours?</AccordionTrigger>
            <AccordionContent className="text-gray-600 px-6 pb-4">
              We are open the following hours for your convenience:
              <br/>
              Sunday: 11:00 AM - 10:00 PM
              <br/>
              Monday - Wednesday: 10:00 AM - 10:00 PM
              <br/>
              Thursday - Saturday: 10:00 AM - 11:00 PM
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="bg-white rounded-lg shadow-md">
            <AccordionTrigger className="text-xl font-semibold text-gray-800 px-6 py-4">Can I Place An Order Online For Pickup?</AccordionTrigger>
            <AccordionContent className="text-gray-600 px-6 pb-4">
              Yes, you can browse our product selection and place an order online for quick and easy pickup. 
              Just add it to your cart and proceed to checkout. See our <a href="/products" className="text-blue-600 hover:underline">Cannabis menu</a> for more details.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="bg-white rounded-lg shadow-md">
            <AccordionTrigger className="text-xl font-semibold text-gray-800 px-6 py-4">Does Urban Leaf Provide Cannabis Delivery?</AccordionTrigger>
            <AccordionContent className="text-gray-600 px-6 pb-4">
              No, we do not currently provide delivery services at this time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="bg-white rounded-lg shadow-md">
            <AccordionTrigger className="text-xl font-semibold text-gray-800 px-6 py-4">What Kind Of Cannabis Products Are For Sale?</AccordionTrigger>
            <AccordionContent className="text-gray-600 px-6 pb-4">
              We offer a wide variety of cannabis products. Visit our menu to see our current selection.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6" className="bg-white rounded-lg shadow-md">
            <AccordionTrigger className="text-xl font-semibold text-gray-800 px-6 py-4">What If I Am New To Cannabis?</AccordionTrigger>
            <AccordionContent className="text-gray-600 px-6 pb-4">
              Our knowledgeable staff is here to help guide you through your cannabis journey.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7" className="bg-white rounded-lg shadow-md">
            <AccordionTrigger className="text-xl font-semibold text-gray-800 px-6 py-4">Do You Have Vape Cartridges?</AccordionTrigger>
            <AccordionContent className="text-gray-600 px-6 pb-4">
              Yes, we carry a selection of vape cartridges.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8" className="bg-white rounded-lg shadow-md">
            <AccordionTrigger className="text-xl font-semibold text-gray-800 px-6 py-4">Do You Ever Have Cannabis Deals?</AccordionTrigger>
            <AccordionContent className="text-gray-600 px-6 pb-4">
              Yes, we regularly offer special deals and promotions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9" className="bg-white rounded-lg shadow-md">
            <AccordionTrigger className="text-xl font-semibold text-gray-800 px-6 py-4">What Makes Urban Leaf The Best Dispensary Near Me?</AccordionTrigger>
            <AccordionContent className="text-gray-600 px-6 pb-4">
              We pride ourselves on our quality products, excellent customer service, and knowledgeable staff.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

