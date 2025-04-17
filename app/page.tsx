import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Camera, Heart, Star, Users } from "lucide-react"
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

import { Button } from "@/components/ui/button"
import Video from "@/components/videosection/video";
import ServiceHighlight from "@/components/ServiceHighlight";

export default function Home() {
  

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex flex-col justify-center pt-20 overflow-hidden">
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/Edited photo.jpg"
      alt="Photography background"
      fill
      className="object-cover brightness-50 bg-black opacity-90"
      priority
    />
  </div>
  <div className="container relative z-10  mx-auto text-center text-white flex flex-col justify-between h-full">
    {/* Main Content */}
    <div>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Ashi Photoz</h1>
      <p className="max-w-2xl mx-auto mt-6 text-xl">
      &apos;Return ticket to past life&apos;
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
        <Button asChild size="lg" className="text-lg">
          <Link href="/portfolio">View Our Work</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="text-lg bg-transparent border-white text-white hover:bg-white hover:text-black"
        >
          <Link href="/contact">Book a Session</Link>
        </Button>
      </div>
    </div>

    {/* Social Links at the Bottom */}
    <div className="flex justify-center gap-6 mb-6">
      <Link
        href="https://maps.app.goo.gl/KCCr9aGL4U6jUVRbA?g_st=ac"
        target="_blank"
        className="text-white hover:text-gray-300 transition text-3xl"
      >
        <MdLocationOn />
      </Link>
      <Link
        href="https://www.instagram.com/ashi.photoz?igsh=bDh5cWVuMXJxbnlx"
        target="_blank"
        className="text-white hover:text-gray-300 transition text-3xl"
      >
        <FaInstagram />
      </Link>
      <Link
        href="https://www.youtube.com/@ashi.photoz"
        target="_blank"
        className="text-white hover:text-gray-300 transition text-3xl"
      >
        <FaYoutube />
      </Link>
    </div>
  </div>
  </section>

    <ServiceHighlight />
      {/* Services Preview */}
      <section className="py-20 bg-white">
  <div className="container px-4 mx-auto">
    <div className="flex flex-col items-center mb-16 text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
      <p className="max-w-2xl mt-4 text-lg text-muted-foreground">
        Professional photography services tailored to your needs
      </p>
    </div>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
       <div
       key={service.title}
       className="flex flex-col p-6 transition-all border border-[#A0522D] rounded-lg shadow-xl hover:shadow-[0_4px_12px_rgba(160,82,45,0.3)]"
     >
     
          <div className="p-2 mb-4 rounded-full w-fit bg-primary/10">
            <service.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
          <p className="mb-4 text-muted-foreground">{service.description}</p>
          <Link
            href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
            className="flex items-center mt-auto text-sm font-medium text-primary"
          >
            Learn more <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>


      <Video />

      {/* Portfolio Preview */}
      <section className="py-20 bg-gray-50">
  <div className="container px-4 mx-auto">
    <div className="flex flex-col items-center mb-16 text-center">
      <h2 className="text-amber-900 text-3xl font-bold tracking-tight sm:text-4xl">Our Captures</h2>
      <p className="max-w-2xl mt-4 text-lg text-muted-foreground">
        Explore some of our favorite photography moments from recent shoots and events
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {portfolioItems.slice(0, 6).map((item, index) => (
        <div key={index} className="relative overflow-hidden transition-all group hover:shadow-xl">
  <div className="overflow-hidden">
  <Image
    src={item.image || "/placeholder.svg"}
    alt={item.category}
    width={1920}
    height={1080}
    className="transition-transform duration-500 group-hover:scale-110 px-0.5 py-0.5"
  />
</div>


          <div className="absolute inset-0 flex flex-col items-center justify-center text-white transition-opacity bg-black/60 opacity-0 group-hover:opacity-100">
            {/* <h3 className="text-xl font-bold">{item.title}</h3> */}
            {/* <p className="mt-2">{item.category}</p> */}
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-12">
      <Button asChild size="lg">
        <Link href="/portfolio">View All Projects</Link>
      </Button>
    </div>
  </div>
</section>


      {/* Testimonials */}
      <section className="py-20 bg-white">
  <div className="container px-4 mx-auto">
    <div className="flex flex-col items-center mb-16 text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-amber-900">What Our Clients Say</h2>
      <p className="max-w-2xl mt-4 text-lg text-gray-600">
        Hear from people who have experienced our services
      </p>
    </div>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.slice(0, 6).map((testimonial, index) => (
        <div key={index} className="p-6 transition-all border rounded-lg border-amber-800 hover:shadow-md hover:shadow-amber-800">
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            ))}
          </div>
          <p className="mb-6 text-gray-700 arial-black font-semibold">{testimonial.text}</p>
          <div className="flex items-center">
            {/* Uncomment for image support */}
            {/* <div className="relative w-12 h-12 mr-4 overflow-hidden rounded-full">
              <Image
                src="/placeholder.svg?height=50&width=50"
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div> */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
              {/* <p className="text-sm text-muted-foreground">{testimonial.role}</p> */}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* View More Button */}
    <div className="flex justify-center mt-12">
      <Link
        href="https://www.google.com/search?sca_esv=103171e1811cae30&sxsrf=AHTn8zo2S5Qf_YaqjV_GSi-iDnVQ-yfFzQ:1744536270580&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzSVmwstxJmUxhjHK7et3mF8gR5AI1NZ-cwAVUNTx6pWHnwHUiT8qFrvMkiGOxm7wxLak_pdhXkFVVZSh7Eubtfh-WUp9IG8wUSIyuVDvqLNfyWzNFg%3D%3D&q=Ashi+photoz+Studio+Reviews&sa=X&ved=2ahUKEwinr9KF2NSMAxXZyjgGHT4PJ-UQ0bkNegQIIBAD&biw=1366&bih=645&dpr=1"
        className="px-6 py-3 text-sm font-semibold text-white transition bg-amber-900 rounded-md hover:bg-amber-800"
      >
        View More Reviews
      </Link>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 text-amber-800 ">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Capture Your Moments?</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-primary-foreground/90">
            Let&apos;s create beautiful memories together. Book a session with us today.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-10 bg-amber-800 text-white">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    title: "Wedding Photography",
    description: "Capture the magic of your special day with our professional wedding photography services.",
    icon: Heart,
  },
  {
    title: "Pre-Wedding Photography",
    description: "Celebrations of your ceremonies that take place before the main wedding day, allowing you  to celebrate with your  close friends and family and create precious memories.",
    icon: Users,
  },
  {
    title: "Event Coverage",
    description: "We make every special moment of your event, big or small and We cover all types of your thoughts and designs.",
    icon: Camera,
  },
  {
    title: "Housewarming",
    description: "Capturing the joy, warmth, and new beginnings housewarming photography that preserves the laughter, love, and special moments as you turn a house into a home.",
    icon: Camera,
  },
];


const portfolioItems = [
  {
    title: "Summer Wedding",
    category: "Wedding",
    image: "/images/A (2).jpg",
  },
  {
    title: "Corporate Portraits",
    category: "Portrait",
    image: "/images/P (39).jpg",
  },
  {
    title: "Fashion Shoot",
    category: "Fashion",
    image: "/images/A (3).jpg",
  },
  {
    title: "Family Reunion",
    category: "Event",
    image: "/images/A (30).jpg",
  },
  {
    title: "Product Launch",
    category: "Commercial",
    image: "/images/IMG-20250408-WA0010.jpg",
  },
  {
    title: "Engagement Session",
    category: "Couples",
    image: "/images/1d.jpg",
  },
]

const testimonials = [
  {
    text: "I’m happy with your photography, and the pictures were very much clear !!!! They were exactly on time .. they wre friendly and they didn’t made us feel uncomfortable while clicking photos!!! Thank you for your patience.. Thanks for the beautiful baby shower pictures ☺️",
    name: "Shãlînî Gowda",
    // role: "Newlyweds",
  },
  {
    text: "One of the best photography I have done recently and most importantly I should mention here The way you captured the photos are stunning . And when it's come to vediogrophy the story telling in the vedio engaging nd emotionally resonant. The way you handle nd guide for the output amazing . Important mention : how many times I ask for editing you did very patiently Thank you ashi with your work mean photography nd vediogrophy you make our moment very memorable nd beautiful 😍 Thank you sooo much All the best 👍",
    name: "Smitha Smitha",
    // role: "Family Portrait Client",
  },
  {
    text: "I’m happy with your photography, and the pictures were very much clear !!!! They were exactly on time .. they wre friendly and they didn’t made us feel uncomfortable while clicking photos!!! Thank you for your patience.. Thanks for the beautiful baby shower pictures ☺️",
    name: "VINOD KUMAR S",
    // role: "Marketing Director",
  },
]

