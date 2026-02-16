
import React from 'react';
import { 
  Banana, 
  Target, 
  BarChart3, 
  MessageSquare, 
  Instagram, 
  Facebook, 
  Rocket, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Calendar,
  Layers,
  Mail,
  Phone
} from 'lucide-react';
import { Plan } from './types';

const PLANS: Plan[] = [
  {
    id: 'basic',
    name: 'Kickstart Plan',
    price: '$500',
    duration: 'One-time',
    features: [
      '4 Strategic Posts',
      'Community Engagement',
      'Page Setup & Optimization',
      'Basic Performance Summary'
    ]
  },
  {
    id: 'starter',
    name: '3-Month Starter',
    price: '$4,500',
    duration: 'Month 1 ($1,200 thereafter)',
    isPopular: true,
    features: [
      '8–10 Posts per Month',
      'Facebook & Instagram Coverage',
      'Meta Ad Management',
      '$200/mo Ad Budget Included',
      'Full Monthly Performance Report',
      'Dedicated Account Manager',
      'Witty Design & Copywriting'
    ]
  }
];

const WHATSAPP_NUMBER = "6594374615";
const CONTACT_WHATSAPP = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Monkey%20Business!%20I'm%20interested%20in%20your%20social%20media%20marketing%20plans.`;
const CONTACT_EMAIL = "mailto:2monkeycrew@gmail.com";
const CONTACT_FACEBOOK = "https://www.facebook.com/MonkeybusinessinSG/";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Banana className="w-8 h-8 text-yellow-500 fill-yellow-400" />
              <span className="font-bold text-xl tracking-tight">Monkey Business</span>
            </div>
            <div className="hidden md:flex space-x-8 font-medium">
              <a href="#services" className="text-gray-600 hover:text-yellow-600 transition-colors">Services</a>
              <a href="#plans" className="text-gray-600 hover:text-yellow-600 transition-colors">Plans</a>
              <a href="#contact" className="text-gray-600 hover:text-yellow-600 transition-colors">Contact</a>
            </div>
            <a href={CONTACT_WHATSAPP} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-2 rounded-full font-bold hover:bg-yellow-500 hover:text-black transition-all">
              Inquire Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Make your brand <span className="text-yellow-500 italic">go bananas</span> on social media.
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            We are a boutique agency focused 100% on helping Singapore SMEs grow through strategic Facebook & Instagram management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#plans" className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-yellow-500 transition-all flex items-center justify-center gap-2">
              View Plans <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Core Focus Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Focus</h2>
            <p className="text-gray-600 max-w-xl mx-auto">We don’t just post for the sake of posting — every piece of content is designed to connect and achieve results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Layers className="w-6 h-6 text-yellow-600" />}
              title="Content Creation"
              description="Static images, carousel posts, and short-form captions tailored to your brand voice."
            />
            <ServiceCard 
              icon={<Calendar className="w-6 h-6 text-yellow-600" />}
              title="Monthly Planning"
              description="Strategic content calendars and automated scheduling so you never miss a beat."
            />
            <ServiceCard 
              icon={<MessageSquare className="w-6 h-6 text-yellow-600" />}
              title="Community Engagement"
              description="Active monitoring of comments and messages to build a loyal community."
            />
            <ServiceCard 
              icon={<Target className="w-6 h-6 text-yellow-600" />}
              title="Meta Ad Management"
              description="Expert boosting of top-performing posts to reach wider, targeted audiences."
            />
            <ServiceCard 
              icon={<BarChart3 className="w-6 h-6 text-yellow-600" />}
              title="Monthly Reporting"
              description="Clear insights on engagement, reach, and follower growth."
            />
            <ServiceCard 
              icon={<Sparkles className="w-6 h-6 text-yellow-600" />}
              title="Page Optimization"
              description="Complete setup and profile cleanup for maximum professional impact."
            />
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Flexible Plans for Every Stage</h2>
            <p className="text-gray-600">Start small and scale your campaign as your business grows.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {PLANS.map((plan) => (
              <div key={plan.id} className={`relative p-8 rounded-3xl border-2 transition-all ${plan.isPopular ? 'border-yellow-400 bg-yellow-50 shadow-xl' : 'border-gray-100 bg-white hover:border-yellow-200'}`}>
                {plan.isPopular && (
                  <span className="absolute top-0 right-8 -translate-y-1/2 bg-yellow-400 text-black text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-gray-500 font-medium"> / {plan.duration}</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href={CONTACT_WHATSAPP} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${plan.isPopular ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
                >
                  Select {plan.name}
                </a>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-gray-50 rounded-2xl max-w-4xl mx-auto border border-gray-100 flex flex-wrap justify-between items-center gap-4">
            <div>
              <p className="font-bold text-lg">Looking for more?</p>
              <p className="text-gray-600">Custom enterprise plans and full-funnel marketing available on request.</p>
            </div>
            <a 
              href={CONTACT_WHATSAPP} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-yellow-500 hover:text-black transition-all shadow-md"
            >
              Talk to an Expert <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Monkey Business</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <WhyCard 
              title="Affordable & Transparent"
              description="No hidden fees — just results-driven social media work that makes sense for SMEs."
            />
            <WhyCard 
              title="Creative Edge"
              description="Custom visuals made to fit your brand identity. We make sure you stand out."
            />
            <WhyCard 
              title="Strategic Planning"
              description="Every post serves a purpose, backed by deep insight and intent."
            />
            <WhyCard 
              title="Hands-On Management"
              description="We treat your brand as our own — responsive, proactive, and fun to work with."
            />
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Banana className="w-8 h-8 text-yellow-500 fill-yellow-400" />
                <span className="font-bold text-2xl">Monkey Business</span>
              </div>
              <p className="text-gray-400 max-w-sm mb-6">
                A specialized social media agency helping small and medium businesses in Singapore grow through creative and strategic marketing.
              </p>
              <div className="flex gap-4">
                <a href={CONTACT_FACEBOOK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href={CONTACT_WHATSAPP} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all">
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Platforms</h4>
              <ul className="space-y-4 text-gray-400">
                <li>Facebook Management</li>
                <li>Instagram Management</li>
                <li>Meta Ad Optimization</li>
                <li>Content Creation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Inquiries</h4>
              <div className="space-y-4">
                <a href={CONTACT_WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors">
                  <Phone className="w-4 h-4" /> WhatsApp: +65 9437 4615
                </a>
                <a href={CONTACT_EMAIL} className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors">
                  <Mail className="w-4 h-4" /> 2monkeycrew@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © 2025 Monkey Business Social Media Agency. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all group">
    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-all">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const WhyCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div>
    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
      <div className="w-2 h-2 bg-yellow-400 rounded-full" />
      {title}
    </h4>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default App;
