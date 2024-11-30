import { NavBar } from "@/components/main_ui/navigation/navbar";

export default function ProductsPage() {
  return (
    <>
    <NavBar />
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-primary">
        Products
      </h1>
      {/* <ProductsList /> */}
    </div>
    </>
  )
}
