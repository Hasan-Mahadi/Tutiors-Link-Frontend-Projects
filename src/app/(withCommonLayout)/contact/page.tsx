'use client';

import { useForm } from 'react-hook-form';

import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log('Form Submitted:', data);
    toast.success('Message sent successfully!');
    reset();
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Connect With Our Team
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-95">
            We're here to help you find the perfect learning match. Reach out
            anytime!
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-6xl mx-auto overflow-hidden border border-slate-200">
            <div className="md:flex">
              <div className="md:w-1/2 p-6 md:p-8 lg:p-10 bg-white">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl md:text-3xl font-bold text-slate-800">
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    Fill out the form and we'll get back to you promptly
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-0 pb-0 space-y-4">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Name */}
                    <div className="space-y-1">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-slate-700"
                      >
                        Full Name
                      </label>
                      <Input
                        id="name"
                        {...register('name', {
                          required: 'Full name is required',
                        })}
                        placeholder="Your name"
                        className="focus:ring-2 focus:ring-indigo-500"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm">
                          {typeof errors.name?.message === 'string' &&
                            errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-slate-700"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email', {
                          required: 'Email is required',
                        })}
                        placeholder="your.email@example.com"
                        className="focus:ring-2 focus:ring-indigo-500"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm">
                          {typeof errors.email?.message === 'string' &&
                            errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Subject */}
                    <div className="space-y-1">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-slate-700"
                      >
                        Subject
                      </label>
                      <Select
                        onValueChange={(value) => setValue('subject', value)}
                      >
                        <SelectTrigger className="w-full focus:ring-2 focus:ring-indigo-500">
                          <SelectValue placeholder="What can we help with?" />
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
                      {errors.subject && (
                        <p className="text-red-500 text-sm">
                          Subject is required
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-slate-700"
                      >
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        rows={5}
                        {...register('message', {
                          required: 'Message is required',
                        })}
                        placeholder="Tell us about your learning needs..."
                        className="focus:ring-2 focus:ring-indigo-500"
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm">
                          {typeof errors.message?.message === 'string' &&
                            errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-indigo-600 hover:bg-indigo-700 py-6 text-lg font-medium"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </div>

              {/* Contact Info — unchanged, keep your version here */}
              <div className="md:w-1/2 p-6 md:p-8 lg:p-10 bg-indigo-50">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl md:text-3xl font-bold text-slate-800">
                    Contact Information
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    Multiple ways to reach our dedicated support team
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-0 pb-0 space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-slate-200">
                    <div className="bg-indigo-100 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">
                        Our Location
                      </h3>
                      <p className="text-slate-600 mt-1">
                        123 Education Street, Suite 400
                        <br />
                        San Francisco, CA 94107
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-slate-200">
                    <div className="bg-indigo-100 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Email Us</h3>
                      <p className="text-slate-600 mt-1">
                        support@tutorconnect.com
                        <br />
                        info@tutorconnect.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-slate-200">
                    <div className="bg-indigo-100 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Call Us</h3>
                      <p className="text-slate-600 mt-1">
                        +1 (555) 123-4567
                        <br />
                        Monday-Friday: 9am-6pm EST
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-semibold text-slate-800 mb-3">
                      Follow Our Community
                    </h3>
                    <div className="flex space-x-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-slate-300 hover:bg-indigo-100"
                      >
                        <Facebook className="h-4 w-4 text-indigo-600" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-slate-300 hover:bg-indigo-100"
                      >
                        <Twitter className="h-4 w-4 text-indigo-600" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-slate-300 hover:bg-indigo-100"
                      >
                        <Instagram className="h-4 w-4 text-indigo-600" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-slate-300 hover:bg-indigo-100"
                      >
                        <Linkedin className="h-4 w-4 text-indigo-600" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-slate-50 border-t border-slate-200">
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
