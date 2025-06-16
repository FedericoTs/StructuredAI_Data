import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Shield, Users } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000" />
      </div>

      <div className="relative pt-20 pb-24 sm:pt-32 sm:pb-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8 border border-blue-200">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Data Intelligence Platform
            </div>

            {/* Main headline */}
            <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
              Turn{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Messy Data
              </span>
              <br />
              Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Perfect Insights
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Our AI transforms your unstructured data into clean, organized
              datasets in{" "}
              <span className="font-semibold text-blue-600">
                under 30 seconds
              </span>
              . No coding required. No manual work. Just pure intelligence.
            </p>

            {/* Social proof numbers */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-semibold text-gray-900">10M+</span> files
                processed
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span className="font-semibold text-gray-900">95%</span>{" "}
                accuracy rate
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-500" />
                <span className="font-semibold text-gray-900">500+</span> happy
                customers
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                href="/dashboard"
                className="group inline-flex items-center px-8 py-4 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Transforming Data
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#demo"
                className="inline-flex items-center px-8 py-4 text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md"
              >
                Watch 2-Min Demo
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Enterprise-grade security</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full" />
              <span>GDPR & CCPA compliant</span>
              <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full" />
              <span>99.5% uptime SLA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
