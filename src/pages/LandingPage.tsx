"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Store,
  Users,
  CreditCard,
  BarChart3,
  Shield,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";
import MainHeader from "@/components/headers/MainHeader";

interface LandingPageProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

export default function LandingPage({
  onGetStarted,
  onLogin,
}: LandingPageProps) {
  const features = [
    {
      icon: Users,
      title: "Borrower Management",
      description:
        "Easily manage all your borrowers and their information in one place",
    },
    {
      icon: CreditCard,
      title: "Transaction Tracking",
      description:
        "Record loans, track payments, and monitor outstanding balances",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description:
        "Get insights into your business with comprehensive reports and analytics",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description:
        "Your data is protected with enterprise-grade security measures",
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description:
        "Access your store management tools from any device, anywhere",
    },
    {
      icon: Store,
      title: "Multi-Store Support",
      description: "Manage multiple store locations from a single dashboard",
    },
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      role: "Sari-sari Store Owner",
      content:
        "Elista has transformed how I manage my store. I can now easily track who owes what and when payments are due.",
      rating: 5,
    },
    {
      name: "Juan Dela Cruz",
      role: "Store Manager",
      content:
        "The mobile app is perfect for our business. I can record transactions on the go and my customers can check their balances anytime.",
      rating: 5,
    },
    {
      name: "Ana Rodriguez",
      role: "Business Owner",
      content:
        "The analytics feature helps me understand my business better. I can see trends and make informed decisions.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <MainHeader>
        <Button variant="ghost" onClick={onLogin}>
          Sign In
        </Button>
        <Button
          onClick={onGetStarted}
          className="bg-primary-600 hover:bg-primary-700"
        >
          Get Started
        </Button>
      </MainHeader>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Manage Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">
                {" "}
                Sari-sari Store{" "}
              </span>
              Like a Pro
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Streamline your store operations with our comprehensive loan and
              borrower management system. Track transactions, manage payments,
              and grow your business with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={onGetStarted}
                className="bg-primary-600 hover:bg-primary-700 text-lg px-8 py-3"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Manage Your Store
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From borrower management to payment tracking, we've got all the
              tools you need to run your business efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-neutral-200 hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Elista?
              </h2>
              <div className="space-y-6">
                {[
                  "Easy to use interface designed for Filipino store owners",
                  "Track all your borrowers and their payment history",
                  "Generate QR codes for easy customer access",
                  "SMS reminders for overdue payments",
                  "Comprehensive analytics and reporting",
                  "Works on any device - phone, tablet, or computer",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-6 text-white mb-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Dashboard Overview
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="opacity-80">Total Borrowers</p>
                      <p className="text-2xl font-bold">25</p>
                    </div>
                    <div>
                      <p className="opacity-80">Outstanding</p>
                      <p className="text-2xl font-bold">₱12,500</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Maria Santos</span>
                    <span className="text-red-600 font-semibold">₱1,250</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Juan Dela Cruz</span>
                    <span className="text-green-600 font-semibold">Paid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Store Owners Across the Philippines
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers have to say about Elista
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary-600 to-indigo-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Store Management?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of store owners who are already using Elista to
            streamline their operations and grow their business.
          </p>
          <Button
            size="lg"
            onClick={onGetStarted}
            className="bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-3"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                  <Store className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Elista</span>
              </div>
              <p className="text-gray-400">
                The complete solution for managing your sari-sari store loans
                and borrowers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Features</li>
                <li>Pricing</li>
                <li>Security</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Status</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Elista. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
