'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: 'support@heritageleather.co',
    description: 'We respond within 24 hours',
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '+1 (800) 555-0123',
    description: 'Mon-Fri, 9am-6pm EST',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: '123 Craftsman Way',
    description: 'Portland, OR 97201',
  },
  {
    icon: Clock,
    title: 'Hours',
    details: 'Mon-Fri: 9am-6pm',
    description: 'Sat: 10am-4pm EST',
  },
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    orderNumber: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send the form data to an API
    setIsSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="pt-20 lg:pt-24">
      {/* Header */}
      <div className="bg-muted/30 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-sm font-medium tracking-widest text-secondary uppercase">
              Get in Touch
            </span>
            <h1 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl lg:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Have a question about our products or your order? We&apos;re here to help.
              Reach out and we&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Contact info */}
          <div className="lg:col-span-1">
            <h2 className="font-serif text-2xl font-semibold">
              Contact Information
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our customer service team is available to assist you with any
              questions or concerns.
            </p>

            <div className="mt-8 space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10">
                    <item.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-foreground">{item.details}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                    <CheckCircle2 className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-semibold">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-muted-foreground max-w-sm">
                    Thank you for reaching out. We&apos;ll get back to you within 24
                    hours.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        orderNumber: '',
                        message: '',
                      })
                    }}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value) =>
                          setFormData((prev) => ({ ...prev, subject: value }))
                        }
                      >
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="order">Order Inquiry</SelectItem>
                          <SelectItem value="product">
                            Product Question
                          </SelectItem>
                          <SelectItem value="returns">
                            Returns & Exchanges
                          </SelectItem>
                          <SelectItem value="care">
                            Leather Care Advice
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="orderNumber">
                        Order Number (Optional)
                      </Label>
                      <Input
                        id="orderNumber"
                        name="orderNumber"
                        placeholder="#12345"
                        value={formData.orderNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2">
                    Send Message
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ link */}
        <div className="mt-16 rounded-xl bg-muted/50 p-8 lg:p-12 text-center">
          <h2 className="font-serif text-2xl font-semibold">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Looking for quick answers? Check out our FAQ section for information
            about shipping, returns, product care, and more.
          </p>
          <Button variant="outline" className="mt-6">
            View FAQ
          </Button>
        </div>
      </div>
    </div>
  )
}
