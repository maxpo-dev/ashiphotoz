import Portfolio from "@/components/portfolio";


export default function PortfolioPage() {
  // Get unique categories
  

  return (
    <div className="container px-4 py-16 mx-auto">
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Portfolio</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Browse through our collection of professional photography work
        </p>
      </div>
       <Portfolio />
      
    </div>
  )
}



