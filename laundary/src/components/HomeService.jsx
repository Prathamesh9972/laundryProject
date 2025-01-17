import React from 'react';
import { motion } from 'framer-motion';
import {
  Shirt, Timer, Star, Sparkles, Calendar, Clock, Users,
  TrendingUp, Shield, Award, PieChart, Target, 
  Rocket, Gift, TrendingDown, MessageCircle, CheckCircle,
  DollarSign, Zap, Heart
} from 'lucide-react';
import PHeader from './PHeader';
import PFooter from './PFooter';
import './HomeService.css';

const HomeService = () => {
  // ... [previous data constants remain the same] ...
  const features = [
    {
      icon: <Users />,
      title: "Expand Your Reach",
      description: "Connect with thousands of customers looking for quality laundry services in your area",
      stats: "10K+ Active Users"
    },
    {
      icon: <TrendingUp />,
      title: "Grow Your Business",
      description: "Increase your revenue with our smart scheduling and customer management tools",
      stats: "45% Average Growth"
    },
    {
      icon: <Shield />,
      title: "Reliable Partnership",
      description: "Join our verified network of service providers with guaranteed payments and support",
      stats: "100% Payment Protection"
    },
    {
      icon: <Zap />,
      title: "Smart Operations",
      description: "Streamline your operations with our AI-powered scheduling and route optimization",
      stats: "30% Time Saved"
    }
  ];

  const testimonials = [
    {
      name: "John's Laundry",
      quote: "Revenue increased by 60% within 3 months of joining",
      rating: 5,
      location: "New York, NY",
      image: "../images/laundaryimg2.jpg"
    },
    {
      name: "Clean Express",
      quote: "The platform's tools helped us scale operations efficiently",
      rating: 5,
      location: "Los Angeles, CA",
       image: "../images/laundaryimg2.jpg"
    },
    {
      name: "Wash Masters",
      quote: "Customer base grew significantly through the platform",
      rating: 5,
      location: "Chicago, IL",
      image: "../images/laundaryimg2.jpg"
    }
  ];

  const stats = [
    { icon: <Users />, value: "500+", label: "Service Providers" },
    { icon: <Target />, value: "98%", label: "Satisfaction Rate" },
    { icon: <TrendingUp />, value: "45%", label: "Average Growth" },
    { icon: <Award />, value: "50K+", label: "Orders Completed" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      features: ["Basic Analytics", "100 Orders/month", "Email Support", "Basic Marketing Tools"],
      recommended: false
    },
    {
      name: "Professional",
      price: "$99",
      features: ["Advanced Analytics", "Unlimited Orders", "24/7 Support", "Premium Marketing Tools", "Route Optimization"],
      recommended: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Custom Analytics", "Unlimited Everything", "Dedicated Support", "White-label Solution", "API Access"],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PHeader />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#194376] to-[#46C6CE] py-32">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:20px_20px]" />
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] mix-blend-overlay opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              Transform Your 
              <span className="text-[#46C6CE] bg-white/10 px-4 py-2 rounded-lg ml-3 backdrop-blur-sm">
                Laundry Business
              </span>
            </motion.h1>
            <motion.p 
              className="text-2xl text-white/90 mb-12 leading-relaxed"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join our network of successful laundry service providers and grow your business with our digital solutions
            </motion.p>
            <motion.div 
              className="flex gap-6 justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button className="bg-white text-[#194376] px-10 py-5 rounded-xl font-bold hover:bg-[#46C6CE] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
                Become a Partner
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-[#194376] transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100 hover:border-[#46C6CE] group transition-all duration-300"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-[#194376]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#194376] group-hover:bg-[#194376] group-hover:text-white transition-all duration-300">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-[#194376] mb-2 group-hover:text-[#46C6CE] transition-colors duration-300">
                {stat.value}
              </h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-32">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-5xl font-bold text-[#194376] mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Partner With Us?
          </motion.h2>
          <p className="text-2xl text-gray-600">Discover how we can help you scale your laundry business</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#46C6CE] group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -15 }}
            >
              <div className="w-16 h-16 bg-[#194376]/10 rounded-2xl flex items-center justify-center text-[#194376] mb-8 group-hover:bg-[#194376] group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#194376] group-hover:text-[#46C6CE] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
              <div className="text-[#46C6CE] font-bold">{feature.stats}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-50/50 py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-5xl font-bold text-[#194376] mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Simple, Transparent Pricing
            </motion.h2>
            <p className="text-2xl text-gray-600">Choose the plan that works best for your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-2xl p-10 ${
                  plan.recommended 
                    ? 'ring-4 ring-[#46C6CE] shadow-2xl scale-105' 
                    : 'shadow-xl hover:shadow-2xl'
                } transition-all duration-300`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {plan.recommended && (
                  <div className="text-[#46C6CE] text-sm font-bold mb-6 bg-[#46C6CE]/10 py-2 px-4 rounded-full inline-block">
                    RECOMMENDED
                  </div>
                )}
                <h3 className="text-3xl font-bold text-[#194376] mb-4">{plan.name}</h3>
                <div className="text-5xl font-bold text-[#194376] mb-8">{plan.price}</div>
                <ul className="space-y-6 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="text-[#46C6CE]" size={24} />
                      <span className="text-gray-600 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  plan.recommended 
                    ? 'bg-[#194376] text-white hover:bg-[#46C6CE]' 
                    : 'bg-gray-100 text-[#194376] hover:bg-[#194376] hover:text-white'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-32">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-5xl font-bold text-[#194376] mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What Our Partners Say
          </motion.h2>
          <p className="text-2xl text-gray-600">Join hundreds of successful laundry businesses</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#46C6CE]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center gap-6 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-2xl shadow-lg"
                />
                <div>
                  <h3 className="font-bold text-xl text-[#194376]">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={24} className="text-[#46C6CE]" fill="currentColor" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#194376] to-[#46C6CE] py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Laundry Business?
          </motion.h2>
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Join our platform today and experience the benefits of digital transformation
          </p>
          <motion.button 
            className="bg-white text-[#194376] px-12 py-6 rounded-xl font-bold text-xl hover:bg-[#46C6CE] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get Started Now
          </motion.button>
        </div>
      </div>

      <PFooter />
    </div>
  );
};

export default HomeService;