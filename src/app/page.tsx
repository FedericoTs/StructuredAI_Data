import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PricingCard from "@/components/pricing-card";
import Footer from "@/components/footer";
import { createClient } from "../../supabase/server";
import {
  ArrowUpRight,
  CheckCircle2,
  Upload,
  Brain,
  FileText,
  Download,
  Clock,
  Target,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Star,
  Quote,
  PlayCircle,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: plans, error } = await supabase.functions.invoke(
    "supabase-functions-get-plans",
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* Problem Statement Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              The Data Problem Every Business Faces
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              80% of enterprise data is unstructured and largely unused. Teams
              spend weeks preparing data instead of analyzing it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Time Consuming
              </h3>
              <p className="text-gray-600">
                Data teams spend 60-80% of their time on data preparation
                instead of analysis and insights.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Error Prone
              </h3>
              <p className="text-gray-600">
                Manual data structuring leads to inconsistencies, errors, and
                unreliable datasets.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Expensive
              </h3>
              <p className="text-gray-600">
                Enterprise solutions cost $3,000+/month and require technical
                expertise to operate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6 border border-blue-200">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Solution
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              How DataStructure AI Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform any unstructured data into clean, organized datasets in
              three simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Upload className="w-8 h-8" />,
                title: "Upload Files",
                description:
                  "Drag & drop CSV, JSON, TXT, or XML files. Our AI automatically detects format and encoding.",
                color: "blue",
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "AI Analysis",
                description:
                  "Advanced AI analyzes structure, detects patterns, and identifies optimal data organization.",
                color: "purple",
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Smart Structuring",
                description:
                  "Intelligent schema generation with quality assessment and structure recommendations.",
                color: "green",
              },
              {
                icon: <Download className="w-8 h-8" />,
                title: "Export Results",
                description:
                  "Download structured data in CSV, JSON, or Excel with comprehensive data dictionary.",
                color: "orange",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="absolute top-4 right-4 text-2xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                  {index + 1}
                </div>
                <div
                  className={`w-16 h-16 bg-${feature.color}-100 rounded-2xl flex items-center justify-center mb-6 text-${feature.color}-600`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Why Choose DataStructure AI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of AI-driven data transformation with
              unmatched speed, accuracy, and simplicity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "90% Time Savings",
                description:
                  "Transform weeks of manual work into minutes of automated processing",
                stat: "< 30 seconds",
                statLabel: "Average processing time",
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "95% Accuracy Rate",
                description:
                  "AI-powered quality validation ensures reliable, error-free datasets",
                stat: "99.5%",
                statLabel: "Data quality score",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "No-Code Solution",
                description:
                  "Intuitive interface requires zero technical skills or programming knowledge",
                stat: "0",
                statLabel: "Lines of code needed",
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "70% Cost Reduction",
                description:
                  "Fraction of enterprise solution costs with superior functionality",
                stat: "$399/mo",
                statLabel: "All-in-One price",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Enterprise Security",
                description:
                  "GDPR & CCPA compliant with AES-256 encryption and audit logging",
                stat: "100%",
                statLabel: "Compliance rate",
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Universal Support",
                description:
                  "Handle any data format from KBs to GBs with intelligent processing",
                stat: "All",
                statLabel: "File formats supported",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="text-blue-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {benefit.stat}
                  </div>
                  <div className="text-sm text-gray-500">
                    {benefit.statLabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Trusted by Data Teams Worldwide
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join hundreds of organizations who've transformed their data
              workflow with AI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote:
                  "DataStructure AI reduced our data prep time from days to minutes. The AI accuracy is incredible.",
                author: "Sarah Chen",
                role: "Data Manager, TechCorp",
                rating: 5,
              },
              {
                quote:
                  "Finally, a tool that makes data structuring accessible to our entire team, not just developers.",
                author: "Michael Rodriguez",
                role: "Operations Director, StartupXYZ",
                rating: 5,
              },
              {
                quote:
                  "The cost savings alone paid for itself in the first month. The quality is enterprise-grade.",
                author: "Emily Johnson",
                role: "CDO, Enterprise Solutions",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-gray-300 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section
        id="demo"
        className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            See DataStructure AI in Action
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Watch how our AI transforms messy data into perfect datasets in
            under 30 seconds.
          </p>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="aspect-video bg-white/5 rounded-xl flex items-center justify-center mb-6">
                <PlayCircle className="w-20 h-20 text-white/80 hover:text-white cursor-pointer transition-colors" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                2-Minute Product Demo
              </h3>
              <p className="text-blue-100 mb-6">
                See real data transformation from upload to structured output
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Watch Demo
                <PlayCircle className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start free, scale as you grow. No hidden fees, no long-term
              contracts.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans?.map((item: any) => (
              <PricingCard key={item.id} item={item} user={user} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Ready to Transform Your Data Workflow?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join the data revolution. Start structuring your data with AI in
            minutes, not weeks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/dashboard"
              className="group inline-flex items-center px-8 py-4 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Free Trial
              <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center px-8 py-4 text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md"
            >
              View Pricing
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Free 14-day trial</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
