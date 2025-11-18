'use client';

import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Shield, 
  Clock, 
  ArrowRight,
  Sparkles,
  Users,
  Award,
  Droplets,
  Wind,
  Zap,
  Star,
  Heart,
  Home as HomeIcon,
  Calendar
} from 'lucide-react';
import Layout from '@/components/Layout';

const CarpetCleaning: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const carpetServices = [
    {
      title: "Steam Cleaning",
      description: "Deep hot water extraction removes embedded dirt, allergens, and bacteria from carpet fibers",
      icon: "🔥",
      features: ["Hot water extraction", "Deep sanitization", "Fast drying", "Eco-friendly products"]
    },
    {
      title: "Stain Removal",
      description: "Specialized treatment for tough stains including wine, coffee, pet accidents, and more",
      icon: "🧽",
      features: ["Pre-treatment", "Spot cleaning", "Odor elimination", "Color protection"]
    },
    {
      title: "Pet Odor Treatment",
      description: "Complete elimination of pet odors and stains with enzyme-based cleaning solutions",
      icon: "🐕",
      features: ["Enzyme treatment", "Odor neutralization", "Bacteria elimination", "Safe for pets"]
    },
    {
      title: "Commercial Carpet Cleaning",
      description: "Professional carpet maintenance for offices, retail spaces, and commercial properties",
      icon: "🏢",
      features: ["Flexible scheduling", "Minimal disruption", "High-traffic areas", "Maintenance plans"]
    },
    {
      title: "Upholstery Cleaning",
      description: "Professional cleaning for sofas, chairs, and other upholstered furniture",
      icon: "🛋️",
      features: ["Fabric care", "Color restoration", "Stain protection", "Quick drying"]
    },
    {
      title: "Rug Cleaning",
      description: "Specialized cleaning for area rugs, Persian rugs, and delicate textiles",
      icon: "🏺",
      features: ["Hand cleaning", "Color testing", "Fringe care", "Pickup & delivery"]
    }
  ];

  const cleaningProcess = [
    {
      step: "1",
      title: "Pre-Inspection",
      description: "We assess your carpets and identify problem areas, stains, and high-traffic zones",
      icon: CheckCircle
    },
    {
      step: "2", 
      title: "Pre-Treatment",
      description: "Stains and heavily soiled areas receive specialized pre-treatment solutions",
      icon: Droplets
    },
    {
      step: "3",
      title: "Deep Steam Cleaning",
      description: "Hot water extraction removes dirt, allergens, and cleaning solutions from deep within fibers",
      icon: Zap
    },
    {
      step: "4",
      title: "Final Inspection",
      description: "We ensure your complete satisfaction and provide care instructions for your clean carpets",
      icon: Award
    }
  ];

  const whyChooseWipely = [
    {
      title: "Advanced Equipment",
      description: "We use professional-grade steam cleaning equipment that delivers superior results compared to rental machines.",
      icon: Zap
    },
    {
      title: "Eco-Friendly Solutions",
      description: "Our cleaning products are safe for children, pets, and the environment while being tough on dirt and stains.",
      icon: Shield
    },
    {
      title: "Fast Drying Time",
      description: "Our efficient extraction process means your carpets dry faster, typically within 2-4 hours.",
      icon: Wind
    },
    {
      title: "Satisfaction Guarantee",
      description: "We stand behind our work with a 100% satisfaction guarantee. If you're not happy, we'll make it right.",
      icon: Heart
    }
  ];

  const beforeAfterImages = [
    {
      before: "/images/upholsteryBefore.jpg",
      after: "/images/upholsteryAfter.jpg",
      title: "Living Room Carpet"
    },
    {
      before: "/images/kitchenBefore.jpg",
      after: "/images/kitchenAfter.jpg",
      title: "Office Carpet"
    },
    {
      before: "/images/bathroomBefore.jpeg",
      after: "/images/bathroomAfter.jpeg",
      title: "Bedroom Carpet"
    }
  ];

  const faqs = [
    {
      question: "How often should I have my carpets professionally cleaned?",
      answer: "We recommend professional carpet cleaning every 12-18 months for average households, or every 6-12 months for homes with pets, children, or high foot traffic."
    },
    {
      question: "How long does it take for carpets to dry after cleaning?",
      answer: "With our advanced extraction equipment, carpets typically dry within 2-4 hours. Factors like humidity, airflow, and carpet thickness can affect drying time."
    },
    {
      question: "Can you remove all types of stains?",
      answer: "While we can remove most stains, some permanent stains may not be completely removable. We'll assess each stain and provide honest expectations during our pre-inspection."
    },
    {
      question: "Is carpet cleaning safe for pets and children?",
      answer: "Yes! We use eco-friendly, non-toxic cleaning solutions that are safe for your family and pets. Your carpets will be safe to walk on once dry."
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Walsh",
      location: "Toorak",
      rating: 5,
      text: "Amazing results! My carpets look brand new after Wipely's steam cleaning. The pet odors are completely gone and the service was professional.",
      service: "Pet Odor Treatment"
    },
    {
      name: "David Kim",
      location: "South Melbourne",
      rating: 5,
      text: "Excellent carpet cleaning service. They removed wine stains I thought were permanent. Fast drying and great customer service.",
      service: "Stain Removal"
    },
    {
      name: "Sarah Mitchell",
      location: "Brighton",
      rating: 5,
      text: "Professional and thorough. My office carpets look fantastic and the team worked around our business hours perfectly.",
      service: "Commercial Cleaning"
    }
  ];

  return (
    <Layout>
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional Carpet
              <span className="block text-emerald-600">Cleaning</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Deep steam cleaning that removes dirt, stains, and allergens ,  leaving your carpets fresh, clean, and healthy
            </p>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-6 h-6 text-emerald-400 opacity-60"
          >
            <Sparkles className="w-full h-full animate-float" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-32 right-20 w-4 h-4 text-blue-400 opacity-60"
          >
            <Sparkles className="w-full h-full animate-float" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-32 left-1/4 w-5 h-5 text-emerald-300 opacity-60"
          >
            <Sparkles className="w-full h-full animate-float" />
          </motion.div>
        </div>
      </section>

      {/* What is Professional Carpet Cleaning */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Professional Carpet Cleaning?
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional carpet cleaning extends carpet life, improves indoor air quality, and creates a healthier home environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative">
                <img
                  src="/images/carpetCleaningSecImg.jpg"
                  alt="Professional carpet cleaning in action"
                  className="rounded-2xl shadow-2xl w-full"
                />
                
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Lisa R.</div>
                      <div className="text-gray-600 text-xs">Malvern</div>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic text-sm leading-relaxed">
                    "My carpets haven't looked this good since they were new! The team was professional and the results are amazing."
                  </blockquote>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-1 lg:order-2"
            >
              <div className="bg-white rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-100 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-100 rounded-full translate-y-8 -translate-x-8 opacity-50"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Droplets className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">The Wipely Difference</h3>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <p className="text-gray-700 leading-relaxed">
                      Our professional carpet cleaning uses <strong>hot water extraction</strong> (steam cleaning) to remove deep-seated dirt, 
                      allergens, and bacteria that regular vacuuming can't reach.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Unlike DIY methods, our <strong>commercial-grade equipment</strong> and specialized cleaning solutions 
                      deliver superior results while being safe for your family and pets.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { icon: Shield, text: "Safe & Non-Toxic" },
                      { icon: Wind, text: "Fast Drying" },
                      { icon: Award, text: "Guaranteed Results" },
                      { icon: Users, text: "Trained Experts" }
                    ].map((benefit, index) => (
                      <div key={benefit.text} className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                          <benefit.icon className="w-4 h-4 text-emerald-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Carpet Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Carpet Cleaning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive carpet care solutions for homes and businesses across Melbourne
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {carpetServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cleaning Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Carpet Cleaning Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures the best possible results for your carpets
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-200 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {cleaningProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="relative z-10 bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-[5px]">
              Carpet Cleaning Results
            </h2>
            <div className="w-20 h-1 bg-emerald-500 rounded mt-[5px] mb-6 mx-auto"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
              See the dramatic difference our professional carpet cleaning makes to homes and offices across Melbourne
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beforeAfterImages.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="grid grid-cols-2">
                  <div className="relative overflow-hidden group">
                    <img
                      src={item.before}
                      alt="Before"
                      className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white text-xs font-semibold text-center py-1">
                      Before
                    </div>
                  </div>
                  <div className="relative overflow-hidden group">
                    <img
                      src={item.after}
                      alt="After"
                      className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-emerald-600 text-white text-xs font-semibold text-center py-1">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Wipely */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
              <Award className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Wipely for Carpet Cleaning?
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional equipment, expert techniques, and guaranteed satisfaction for the best carpet cleaning results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {whyChooseWipely.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-50 rounded-full -translate-y-10 translate-x-10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-200 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link href="/book">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
              >
                <span>Book Your Carpet Cleaning Now</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real reviews from satisfied customers across Melbourne
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium">
                    {testimonial.service}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our carpet cleaning services
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <div className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : ''}`}>
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-bold text-xl">+</span>
                    </div>
                  </div>
                </button>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Cleaner, Healthier Carpets?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Book your professional carpet cleaning service today and experience the Wipely difference
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/book">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Now</span>
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-emerald-600"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </Layout>
  );
};

export default CarpetCleaning;
