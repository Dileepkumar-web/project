import { useState, useEffect } from 'react';
import {
  Menu, X, Calendar, Sparkles, Heart, Building2,
  GraduationCap, PartyPopper, Star, CheckCircle2, Phone, Mail,
  MapPin, Clock, Gift, Camera, Music, ChefHat, Cake, Send, Instagram
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const eventCategories = [
    {
      icon: Heart,
      title: "Weddings",
      description: "Create magical moments on your special day with our exquisite wedding planning services.",
      image: "https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-rose-400 to-pink-600"
    },
    {
      icon: Cake,
      title: "Birthday Parties",
      description: "Make every birthday unforgettable with themed decorations and entertainment.",
      image: "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-amber-400 to-orange-600"
    },
    {
      icon: Building2,
      title: "Corporate Events",
      description: "Professional conferences, seminars, and team-building events that inspire.",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-blue-400 to-cyan-600"
    },
    {
      icon: GraduationCap,
      title: "College Events",
      description: "Energetic campus festivals, fresher parties, and farewell celebrations.",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-green-400 to-emerald-600"
    },
    {
      icon: PartyPopper,
      title: "Private Events",
      description: "Intimate gatherings, anniversaries, and exclusive parties tailored for you.",
      image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-red-400 to-rose-600"
    }
  ];

  const services = [
    { icon: Calendar, title: "Event Planning", description: "Complete end-to-end event management" },
    { icon: Camera, title: "Photography", description: "Professional photo & video coverage" },
    { icon: Music, title: "Entertainment", description: "Live bands, DJs, and performers" },
    { icon: ChefHat, title: "Catering", description: "Gourmet cuisine for every occasion" },
    { icon: Gift, title: "Decoration", description: "Stunning themes and setups" },
    { icon: Sparkles, title: "Custom Themes", description: "Personalized event experiences" }
  ];

  const stats = [
    { number: "100+", label: "Events Organized" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "20+", label: "Expert Team" },
    { number: "3+", label: "Years Experience" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      event: "Wedding",
      rating: 5,
      text: "Absolutely phenomenal! They turned our dream wedding into reality. Every detail was perfect.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Michael Chen",
      event: "Corporate Event",
      rating: 5,
      text: "Professional, punctual, and creative. Our annual conference was a massive success thanks to them.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Priya Sharma",
      event: "Birthday Party",
      rating: 5,
      text: "They made my daughter's 5th birthday magical! The theme decoration was beyond our expectations.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*New Event Inquiry from Website*%0A%0A*Name:* ${formData.firstName} ${formData.lastName}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Event Type:* ${formData.eventType}%0A*Message:* ${formData.message}`;

    const whatsappNumber = '919019717485';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappURL, '_blank');

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      eventType: '',
      message: ''
    });
  };

  const handlePlanEvent = () => {
    const message = `*Hello! I want to plan an event*%0A%0AI would like to discuss event planning services.`;
    const whatsappNumber = '919019717485';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className={`w-8 h-8 ${scrolled ? 'text-amber-600' : 'text-white'}`} />
            <span className={`text-2xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Elite Events
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Events', 'Services', 'Gallery', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-300'
                }`}
              >
                {item}
              </button>
            ))}
            <button onClick={handlePlanEvent} className="btn-primary">Book Now</button>
          </div>

          <button
            className={`md:hidden ${scrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {['Home', 'Events', 'Services', 'Gallery', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-amber-600 font-medium text-left"
                >
                  {item}
                </button>
              ))}
              <button onClick={handlePlanEvent} className="btn-primary w-full">Book Now</button>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className="inline-block mb-4 px-4 py-2 glass-effect rounded-full">
            <span className="text-amber-400 font-semibold">Premium Event Management </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Creating Unforgettable
            <br />
            <span className="text-gradient">Moments Together Anugaman </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto font-light">
            From intimate gatherings to grand celebrations with Anchoring, we craft extraordinary experiences that leave lasting impressions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={handlePlanEvent} className="btn-primary flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Plan Your Event</span>
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('gallery')}>View Our Work</button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="glass-effect rounded-lg p-6 hover-lift">
                <div className="text-4xl font-bold text-amber-400 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      <section id="events" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold uppercase tracking-wide">Our Specialties</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Events We Excel At
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Specialized in creating memorable experiences for every type of celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover-lift cursor-pointer"
                >
                  <div className="absolute inset-0">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80`}></div>
                  </div>

                  <div className="relative p-8 h-80 flex flex-col justify-end text-white">
                    <Icon className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-white/90 leading-relaxed">{category.description}</p>
                    <button onClick={handlePlanEvent} className="mt-4 text-white font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                      <span>Book Now</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber-600 font-semibold uppercase tracking-wide">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
                Experience Excellence in Every Detail
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                With over a decade of expertise, we bring creativity, precision, and passion to every event. Our dedicated team ensures your vision comes to life flawlessly.
              </p>

              <div className="space-y-4">
                {[
                  "Personalized planning tailored to your vision",
                  "Expert team of creative professionals",
                  "Attention to every minute detail",
                  "On-time delivery and budget management",
                  "24/7 support throughout the event"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <button onClick={handlePlanEvent} className="btn-primary mt-8">Get Started Today</button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Event"
                className="rounded-2xl shadow-xl hover-lift h-64 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Event"
                className="rounded-2xl shadow-xl hover-lift h-64 object-cover mt-8"
              />
              <img
                src="https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Event"
                className="rounded-2xl shadow-xl hover-lift h-64 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Event"
                className="rounded-2xl shadow-xl hover-lift h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold uppercase tracking-wide">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Comprehensive Event Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need under one roof for a perfect celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover-lift border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-semibold uppercase tracking-wide">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Moments We've Created
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A glimpse into the magical experiences we've crafted
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600"
            ].map((img, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl hover-lift group cursor-pointer">
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold uppercase tracking-wide">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover-lift">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.event}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="text-amber-400 font-semibold uppercase tracking-wide">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Let's Plan Your Perfect Event
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Ready to create something extraordinary? Contact us today and let's turn your vision into reality.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Call Us</div>
                    <div className="text-gray-400">  9019717485</div>
                      <div className="text-gray-400"> 88615 09593</div>

                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Email Us</div>
                    <div className="text-gray-400">Anugamanaa@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Visit Us</div>
                    <div className="text-gray-400">Dasarahalli, Bangalore Rural, Karnataka</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Working Hours</div>
                    <div className="text-gray-400">Mon - Sat: 9:00 AM - 8:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-amber-400 focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-amber-400 focus:outline-none transition-colors"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-amber-400 focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-amber-400 focus:outline-none transition-colors"
                />
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-amber-400 focus:outline-none transition-colors text-white"
                >
                  <option value="" className="bg-gray-800">Select Event Type</option>
                  <option value="Wedding" className="bg-gray-800">Wedding</option>
                  <option value="Birthday Party" className="bg-gray-800">Birthday Party</option>
                  <option value="Corporate Event" className="bg-gray-800">Corporate Event</option>
                  <option value="College Event" className="bg-gray-800">College Event</option>
                  <option value="Private Event" className="bg-gray-800">Private Event</option>
                </select>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your event..."
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-amber-400 focus:outline-none transition-colors resize-none"
                ></textarea>
                <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2">
                  <span>Send via WhatsApp</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-8 h-8 text-amber-500" />
                <span className="text-2xl font-bold">Elite Events</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Creating unforgettable moments and extraordinary experiences since 2013.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'Events', 'Services', 'Gallery', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Our Services</h4>
              <div className="space-y-2 text-gray-400">
                <div>Event Planning</div>
                <div>Photography</div>
                <div>Catering</div>
                <div>Decoration</div>
                <div>Entertainment</div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe for event tips and exclusive offers</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-amber-400"
                />
                <button className="px-4 py-2 bg-amber-600 rounded-r-lg hover:bg-amber-700 transition-colors">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; 2024 Elite Events. All rights reserved.
              </div>
              <div className="flex items-center space-x-6">
                <a
                  href="https://www.instagram.com/anugamana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-amber-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@anugamana</span>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
