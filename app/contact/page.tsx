"use client"
import { FaInstagram, FaYoutube } from "react-icons/fa";
import type React from "react"
import { MdLocationOn } from "react-icons/md";
import { useState } from "react"
import Link from "next/link"
import { Calendar, Clock,Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    preferredContact: "email",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, preferredContact: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible!",
    })
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      preferredContact: "email",
    })
  }

  return (
    <div className="container px-4 py-16 mx-auto">
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Get in touch with our team to discuss your photography needs
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>Fill out the form below and we&apos;ll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service Interested In</Label>
                <Select value={formData.service} onValueChange={handleSelectChange}>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-amber-50 text-amber-900 border border-amber-200 shadow-md rounded-md">
  <SelectItem value="Pre-wedding">Pre-Wedding Photography</SelectItem>
  <SelectItem value="wedding">Wedding Photography</SelectItem>
  <SelectItem value="portrait">Candid Photography</SelectItem>
  <SelectItem value="commercial">House Warming</SelectItem>
  <SelectItem value="Naming-Ceremony">Naming Ceremony</SelectItem>
  <SelectItem value="event">Event Coverage</SelectItem>
  <SelectItem value="other">Other</SelectItem>
</SelectContent>

                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your photography needs..."
                  rows={5}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Preferred Contact Method</Label>
                <RadioGroup
                  value={formData.preferredContact}
                  onValueChange={handleRadioChange}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="email-contact" />
                    <Label htmlFor="email-contact" className="font-normal">
                      Email
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="phone-contact" />
                    <Label htmlFor="phone-contact" className="font-normal">
                      Phone
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-semibold">Studio Address</h3>
                  <p className="text-muted-foreground">Shivakote, main road, opposite Oxygen gym, Hesaraghatta, Bengaluru, Karnataka 560089</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">+91 99642 84475</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">Ashi.photoz1@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-semibold">Business Hours</h3>
                  <p className="text-muted-foreground">Monday - Saturday: 9am - 9pm</p>
                  {/* <p className="text-muted-foreground">: </p> */}
                  <p className="text-muted-foreground">Sunday: 10am - 6pm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6 mb-6">
      <Link
        href="https://maps.app.goo.gl/KCCr9aGL4U6jUVRbA?g_st=ac"
        target="_blank"
        className="text-amber-700 hover:text-gray-300 transition text-3xl"
      >
        <MdLocationOn />
      </Link>
      <Link
        href="https://www.instagram.com/ashi.photoz?igsh=bDh5cWVuMXJxbnlx"
        target="_blank"
        className="text-amber-700 hover:text-gray-300 transition text-3xl"
      >
        <FaInstagram />
      </Link>
      <Link
        href="https://www.youtube.com/@ashi.photoz"
        target="_blank"
        className="text-amber-800 hover:text-gray-300 transition text-3xl"
      >
        <FaYoutube />
      </Link>
    </div>

          <div className="p-6 mt-auto border rounded-lg bg-muted/50">
            <h3 className="flex items-center gap-2 mb-4 text-lg font-semibold">
              <Calendar className="w-5 h-5 text-primary" />
              Book a Consultation
            </h3>
            <p className="mb-4 text-muted-foreground">
              Want to discuss your project in person? Schedule a free consultation with one of our photographers.
            </p>
            <Button asChild>
              <Link href="#">Schedule Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

