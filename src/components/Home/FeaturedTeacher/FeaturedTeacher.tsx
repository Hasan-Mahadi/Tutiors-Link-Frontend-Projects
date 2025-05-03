'use client';

import React, { useEffect, useRef } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import Link from 'next/link';

const tutors = [
  {
    name: 'Sarah Johnson',
    subject: 'Mathematics Tutor',
    rate: 45,
    rating: 4.9,
    badge: 'Math Expert',
    badgeColor: 'indigo',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=688&q=80',
    description:
      '10+ years experience helping students master algebra, calculus, and geometry.',
  },
  {
    name: 'Michael Chen',
    subject: 'Science Tutor',
    rate: 50,
    rating: 4.8,
    badge: 'Science Pro',
    badgeColor: 'green',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=687&q=80',
    description:
      'Specializes in chemistry and physics with a hands-on experimental approach.',
  },
  {
    name: 'Emily Rodriguez',
    subject: 'English & Spanish Tutor',
    rate: 40,
    rating: 4.7,
    badge: 'Language Coach',
    badgeColor: 'red',
    image:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=687&q=80',
    description:
      'Bilingual instructor with focus on conversational fluency and academic writing.',
  },
  {
    name: 'David Wilson',
    subject: 'SAT/ACT Specialist',
    rate: 60,
    rating: 4.9,
    badge: 'Test Prep',
    badgeColor: 'blue',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=687&q=80',
    description:
      'Helped 200+ students improve test scores by an average of 300 points.',
  },
];

const TutorsSlider = () => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 20,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 4, spacing: 20 },
      },
    },
  });

  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!slider.current) return;
    timer.current = setInterval(() => {
      slider.current?.next();
    }, 3000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [slider]);

  return (
    <section className="py-12 sm:py-14 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Meet Our Expert Tutors
        </h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-sm sm:text-base">
          Highly qualified professionals ready to help you achieve your learning
          goals
        </p>
      </div>

      <div ref={sliderRef} className="keen-slider">
        {tutors.map((tutor, idx) => (
          <Card
            key={idx}
            className="keen-slider__slide group overflow-hidden border border-gray-100   hover:shadow-xl  bg-white"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={tutor.image}
                alt={tutor.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <Badge
                className={`absolute top-3 right-3 bg-${tutor.badgeColor}-600 text-white text-xs`}
              >
                {tutor.badge}
              </Badge>
            </div>
            <CardContent className="p-4 sm:p-5 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {tutor.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {tutor.subject}
                  </p>
                </div>
                <div className="flex items-center bg-amber-100 text-amber-600 px-2 py-1 rounded-md text-sm">
                  <Star size={14} className="mr-1" />
                  {tutor.rating}
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {tutor.description}
              </p>
              <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
                <span className="text-indigo-600 font-semibold">
                  ${tutor.rate}/hr
                </span>
                <Button variant="default" size="sm" className="rounded-md">
                  View Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link href="/browseTutor">
          {' '}
          <Button size="lg" className="rounded-lg bg-indigo-600 text-white">
            Browse All Tutors
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default TutorsSlider;
