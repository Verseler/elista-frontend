import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import GuestHeader from "@/components/headers/GuestHeader";
import { data } from "@/data/landingPageData";
import { Link } from "react-router";
import Container from "@/components/ui/container";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import Section from "@/components/typography/Section";
import H2 from "@/components/typography/H2";
import Footer from "@/components/typography/Footer";
import FeatureCard from "@/components/landing/FeatureCard";
import FeatureHighlightCard from "@/components/landing/FeatureHighlightCard";
import DashboardOverview from "@/components/landing/DashboardOverview";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <GuestHeader />

      <Section className="bg-primary-50">
        <Container className="text-center">
          <div className="max-w-4xl mx-auto">
            <H1>
              Manage Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">
                Sari-sari Store{" "}
              </span>
              Transactions
            </H1>
            <P>
              Streamline your store operations with our comprehensive loan and
              borrower management system. Track transactions, manage payments
              records, and grow your business with confidence.
            </P>
            <Button
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 text-lg px-8 py-3"
              asChild
            >
              <Link to="register">Get Started</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center mb-16">
            <H2>Everything You Need to Manage Your Store Transactions</H2>
            <P>
              From borrower management to payment tracking, we've got all the
              tools you need to run your business efficiently.
            </P>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-gradient-to-r from-primary-50 to-indigo-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <H2 className="mb-6">Why Choose Elista?</H2>
              <div className="space-y-5">
                {data.featureHighlights.map((benefit, index) => (
                  <FeatureHighlightCard key={index}>
                    {benefit}
                  </FeatureHighlightCard>
                ))}
              </div>
            </div>
            <DashboardOverview />
          </div>
        </Container>
      </Section>

      <Section className="bg-gradient-to-r from-primary-600 to-indigo-600">
        <Container className="text-center">
          <H2 className="text-white mb-6">
            Ready to Transform Your Store Management?
          </H2>
          <P className="text-primary-100 max-w-2xl mx-auto">
            Join thousands of store owners who are already using Elista to
            streamline their operations and grow their business.
          </P>
          <Button
            size="lg"
            className="bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-3"
            asChild
          >
            <Link to="register">
              Get Started Today
              <ArrowRight className="ml-2 size-5" />
            </Link>
          </Button>
        </Container>
      </Section>

      <Footer>
        <p className="text-center text-gray-400">
          &copy; 2025 Elista. All rights reserved.
        </p>
      </Footer>
    </div>
  );
}
