'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'How do I find the right tutor for my needs?',
      answer:
        'You can browse our tutor profiles by subject, experience level, and ratings. Our matching system also recommends tutors based on your learning goals and preferences.',
    },
    {
      question: 'What are your rates for tutoring sessions?',
      answer:
        'Tutor rates vary depending on the subject, tutor experience, and session length. Our tutors set their own rates, which typically range from $30 to $80 per hour.',
    },
    {
      question: 'Do you offer online tutoring sessions?',
      answer:
        'Yes! Most of our tutors offer both in-person and online sessions through our virtual classroom platform, which includes video conferencing, a shared whiteboard, and file sharing.',
    },
    {
      question: 'How do I become a tutor with Tutor Connect?',
      answer:
        "We're always looking for qualified tutors! Visit our 'Become a Tutor' page to submit your application. We require subject expertise, teaching experience, and a background check.",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-primary">
              <span className="mr-2">🎓</span>
              Tutor Connect
            </a>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-primary">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                Tutors
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                Subjects
              </a>
              <a href="#" className="text-primary font-medium">
                Contact
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                About
              </a>
            </nav>
            <Button variant="ghost" className="md:hidden text-gray-600 p-2">
              <span className="text-2xl">☰</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch With Us
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Have questions or need assistance? Our team is here to help you find
            the perfect tutor.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-6xl mx-auto overflow-hidden">
            <div className="md:flex">
              {/* Contact Form */}
              <div className="md:w-1/2 p-8 md:p-12">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-gray-800">
                    Send us a message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name
                      </label>
                      <Input type="text" id="name" placeholder="John Doe" />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <Input
                        type="email"
                        id="email"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">
                            General Inquiry
                          </SelectItem>
                          <SelectItem value="tutor">Find a Tutor</SelectItem>
                          <SelectItem value="become-tutor">
                            Become a Tutor
                          </SelectItem>
                          <SelectItem value="technical">
                            Technical Support
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Type your message here..."
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </div>

              {/* Contact Info */}
              <div className="md:w-1/2 bg-gray-50 p-8 md:p-12">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-gray-800">
                    Contact Information
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    We're here to help and answer any questions you might have.
                    We look forward to hearing from you.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                      <MapPin className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Our Location
                      </h3>
                      <p className="text-gray-600">
                        123 Education Street, Suite 400
                        <br />
                        San Francisco, CA 94107
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                      <Mail className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email Us</h3>
                      <p className="text-gray-600">
                        support@tutorconnect.com
                        <br />
                        info@tutorconnect.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                      <Phone className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Call Us</h3>
                      <p className="text-gray-600">
                        +1 (555) 123-4567
                        <br />
                        Mon-Fri: 9am-6pm
                      </p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="font-semibold text-gray-800 mb-4">
                      Follow Us
                    </h3>
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <Facebook className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <Instagram className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our tutoring
              services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-0 divide-y divide-gray-200">
                {faqs.map((faq, index) => (
                  <div key={index} className="p-6">
                    <Button
                      variant="ghost"
                      className="flex justify-between items-center w-full text-left p-0 h-auto"
                      onClick={() => toggleFaq(index)}
                    >
                      <h3 className="text-lg font-medium text-gray-800">
                        {faq.question}
                      </h3>
                      {activeFaq === index ? (
                        <ChevronUp className="text-primary h-5 w-5" />
                      ) : (
                        <ChevronDown className="text-primary h-5 w-5" />
                      )}
                    </Button>
                    {activeFaq === index && (
                      <div className="mt-3 text-gray-600">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-0">
        <div className="container mx-auto px-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.538962143603!2d-122.4199066846824!3d37.77492997975936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-b-xl"
          />
        </div>
      </section>
    </div>
  );
}
