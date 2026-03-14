/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  MapPin, 
  Phone, 
  Star, 
  Heart, 
  Cake, 
  Clock, 
  Award, 
  ChevronRight, 
  Menu, 
  X, 
  Instagram, 
  Facebook,
  ExternalLink
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Cakes', href: '#cakes' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Tanu's Cake Logo" 
            className="h-12 w-12 object-contain rounded-full border-2 border-bakery-accent/20"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <span className="text-2xl font-serif font-bold tracking-tight text-bakery-chocolate">
            Tanu's <span className="text-bakery-accent">Cake</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-bakery-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/919945118116" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-bakery-chocolate text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-bakery-accent transition-all duration-300 shadow-lg"
          >
            Order Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-bakery-chocolate" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass shadow-xl md:hidden flex flex-col p-6 space-y-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium border-b border-bakery-chocolate/10 pb-2"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/919945118116" 
              className="bg-bakery-accent text-white text-center py-3 rounded-xl font-bold"
            >
              Order on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-bakery-pink rounded-l-[100px] -z-10 hidden lg:block" />
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-bakery-accent/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 bg-bakery-accent/20 text-bakery-accent rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Life's Sweeter Here • Jamkhandi
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6">
            Premium <span className="italic text-bakery-accent">Custom Cakes</span> in Jamkhandi
          </h1>
          <p className="text-lg text-bakery-chocolate/70 mb-10 max-w-lg leading-relaxed">
            Fresh, delicious, and handcrafted cakes for birthdays, weddings, and all your special celebrations. We turn your sweet dreams into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/919945118116" 
              className="flex items-center justify-center gap-2 bg-bakery-chocolate text-white px-8 py-4 rounded-2xl font-bold hover:bg-bakery-accent transition-all shadow-xl hover:-translate-y-1"
            >
              <MessageCircle size={20} />
              Order on WhatsApp
            </a>
            <a 
              href="#cakes" 
              className="flex items-center justify-center gap-2 bg-white text-bakery-chocolate border border-bakery-chocolate/10 px-8 py-4 rounded-2xl font-bold hover:bg-bakery-pink transition-all shadow-md"
            >
              Explore Designs
              <ChevronRight size={20} />
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i+10}`} 
                  alt="Customer" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-sm font-medium">
              <span className="text-bakery-accent font-bold">500+</span> Happy Customers in Jamkhandi
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white">
            <img 
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop" 
              alt="Luxury Cake" 
              className="w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating elements */}
          <div className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl animate-float z-20">
            <div className="flex items-center gap-3">
              <div className="bg-bakery-accent p-2 rounded-lg text-white">
                <Star size={20} fill="currentColor" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase opacity-50">Rating</p>
                <p className="font-serif font-bold">4.9/5.0</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-xl animate-float delay-700 z-20">
            <div className="flex items-center gap-3">
              <div className="bg-bakery-chocolate p-2 rounded-lg text-white">
                <Heart size={20} fill="currentColor" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase opacity-50">Made with</p>
                <p className="font-serif font-bold">Pure Love</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedCakes = () => {
  const cakes = [
    {
      title: "Birthday Cakes",
      desc: "Make their special day unforgettable with our custom birthday creations.",
      img: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Wedding Cakes",
      desc: "Elegant multi-tier masterpieces for your most beautiful beginning.",
      img: "https://images.unsplash.com/photo-1522760883748-4448c22d3962?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Photo Cakes",
      desc: "Personalize your celebration with your favorite memories on a cake.",
      img: "https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Anniversary Cakes",
      desc: "Celebrate years of togetherness with our romantic cake designs.",
      img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Theme Cakes",
      desc: "From superheroes to fairy tales, we bring any theme to life.",
      img: "https://images.unsplash.com/photo-1557925923-33b27f891f88?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Cupcakes",
      desc: "Bite-sized happiness in a variety of gourmet flavors.",
      img: "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=800&auto=format&fit=crop",
    }
  ];

  return (
    <section id="cakes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Signature Creations</h2>
          <p className="text-bakery-chocolate/60 max-w-2xl mx-auto">
            Each cake is a work of art, baked fresh using premium ingredients to ensure every bite is as beautiful as it is delicious.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cakes.map((cake, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-bakery-cream rounded-[32px] overflow-hidden border border-bakery-chocolate/5 hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={cake.img} 
                  alt={cake.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs font-bold uppercase">
                  Freshly Baked
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-3">{cake.title}</h3>
                <p className="text-bakery-chocolate/70 text-sm mb-6 leading-relaxed">
                  {cake.desc}
                </p>
                <a 
                  href="https://wa.me/919945118116" 
                  className="flex items-center justify-center gap-2 w-full py-3 bg-bakery-chocolate text-white rounded-xl font-bold hover:bg-bakery-accent transition-colors"
                >
                  <MessageCircle size={18} />
                  Order on WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1535254973040-607b474cb80d?q=80&w=800&auto=format&fit=crop",
      tag: "Custom Birthday"
    },
    {
      url: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&auto=format&fit=crop",
      tag: "Chocolate Delight"
    },
    {
      url: "https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=800&auto=format&fit=crop",
      tag: "Theme Cake"
    },
    {
      url: "https://images.unsplash.com/photo-1516731415730-0c607149933a?q=80&w=800&auto=format&fit=crop",
      tag: "Wedding Special"
    },
    {
      url: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop",
      tag: "Anniversary"
    },
    {
      url: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=800&auto=format&fit=crop",
      tag: "Cupcakes"
    },
    {
      url: "https://images.unsplash.com/photo-1559620192-032c4bc4674e?q=80&w=800&auto=format&fit=crop",
      tag: "Celebration"
    },
    {
      url: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=800&auto=format&fit=crop",
      tag: "Kids Theme"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-bakery-pink/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Real Creations Gallery</h2>
            <p className="text-bakery-chocolate/60">Handcrafted with passion. See our latest work from Google Business.</p>
          </div>
          <a 
            href="https://maps.app.goo.gl/dDmZewAXufb75SJm7" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-bakery-chocolate text-white px-6 py-3 rounded-xl font-bold hover:bg-bakery-accent transition-all shadow-lg"
          >
            View More on Google <ExternalLink size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="relative group rounded-3xl overflow-hidden cursor-pointer shadow-md aspect-square"
            >
              <img 
                src={img.url} 
                alt={img.tag} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bakery-chocolate/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <p className="text-white font-bold text-lg">{img.tag}</p>
                <div className="flex items-center gap-1 text-bakery-accent mt-1">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const features = [
    { icon: <Cake />, title: "Fresh Ingredients", desc: "We use only the finest, freshest ingredients for every bake." },
    { icon: <Heart />, title: "Handcrafted", desc: "Every cake is meticulously handcrafted with attention to detail." },
    { icon: <Award />, title: "Custom Designs", desc: "Your vision, our creation. We specialize in bespoke designs." },
    { icon: <Clock />, title: "On-Time Delivery", desc: "Reliable service to make sure your celebration stays sweet." },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Why Customers Love Tanu's Cake</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-12 h-12 bg-bakery-pink flex items-center justify-center rounded-2xl text-bakery-accent">
                    {f.icon}
                  </div>
                  <h4 className="text-xl font-bold">{f.title}</h4>
                  <p className="text-sm text-bakery-chocolate/60 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop" 
              alt="Baking Process" 
              className="rounded-[40px] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl shadow-2xl hidden md:block">
              <p className="text-4xl font-serif font-bold text-bakery-accent">5+</p>
              <p className="text-sm font-bold uppercase tracking-widest opacity-60">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const InstagramFeed = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const accessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      if (!accessToken) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${accessToken}`
        );
        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.error.message);
        }
        
        setPosts(data.data?.slice(0, 8) || []);
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError('Failed to load Instagram feed.');
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, [accessToken]);

  if (!accessToken) {
    // Fallback UI when no token is provided - looks like a feed but informs the user
    return (
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-2xl flex items-center justify-center text-white shadow-lg">
              <Instagram size={28} />
            </div>
            <h2 className="text-4xl font-serif font-bold">Follow Us @tanuscake</h2>
          </div>
          <p className="text-bakery-chocolate/60 mb-12 max-w-2xl mx-auto">
            Stay updated with our latest creations, behind-the-scenes moments, and sweet deals on Instagram.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-40 grayscale pointer-events-none">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-bakery-pink rounded-3xl animate-pulse" />
            ))}
          </div>
          
          <div className="mt-12">
            <a 
              href="https://www.instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-bakery-chocolate text-white px-8 py-4 rounded-2xl font-bold hover:bg-bakery-accent transition-all shadow-xl"
            >
              <Instagram size={20} />
              Visit Instagram Profile
            </a>
            <p className="mt-4 text-xs text-bakery-chocolate/40 italic">
              * Developers: Add VITE_INSTAGRAM_ACCESS_TOKEN to .env to enable live feed.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-2xl flex items-center justify-center text-white shadow-xl">
              <Instagram size={32} />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Latest on Instagram</h2>
              <p className="text-bakery-chocolate/60">Follow @tanuscake for daily sweetness</p>
            </div>
          </div>
          <a 
            href="https://www.instagram.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-bakery-chocolate text-white px-6 py-3 rounded-xl font-bold hover:bg-bakery-accent transition-all shadow-lg flex items-center gap-2"
          >
            Follow Us <ChevronRight size={18} />
          </a>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square bg-bakery-pink rounded-3xl animate-pulse" />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12 glass rounded-3xl">
            <p className="text-bakery-accent font-bold mb-2">Oops!</p>
            <p className="text-bakery-chocolate/60">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {posts.map((post) => (
              <motion.a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="relative aspect-square rounded-3xl overflow-hidden group shadow-md"
              >
                <img 
                  src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url} 
                  alt={post.caption || 'Instagram Post'} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white" size={32} />
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Priya K.", text: "The most delicious cake I've ever had in Jamkhandi! The design was exactly what I wanted for my daughter's birthday.", rating: 5 },
    { name: "Rahul S.", text: "Ordered a photo cake for our anniversary. The quality of the print and the taste of the chocolate truffle was amazing.", rating: 5 },
    { name: "Sneha M.", text: "Tanu's Cake never disappoints. Their cupcakes are a hit at every office party. Highly recommended!", rating: 5 },
  ];

  return (
    <section className="py-24 bg-bakery-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Sweet Words from Our Customers</h2>
          <div className="flex justify-center gap-1 text-bakery-accent mb-4">
            {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
          </div>
          <p className="text-bakery-chocolate/60">Rated 4.9/5 based on 200+ Google reviews</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-[32px] shadow-lg"
            >
              <div className="flex gap-1 text-bakery-accent mb-4">
                {[1,2,3,4,5].map(j => <Star key={j} size={14} fill="currentColor" />)}
              </div>
              <p className="italic text-bakery-chocolate/80 mb-6 leading-relaxed">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-bakery-accent rounded-full flex items-center justify-center text-white font-bold">
                  {r.name[0]}
                </div>
                <p className="font-bold">{r.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://maps.app.goo.gl/dDmZewAXufb75SJm7" 
            target="_blank"
            className="inline-flex items-center gap-2 bg-white border border-bakery-chocolate/10 px-8 py-4 rounded-2xl font-bold hover:bg-bakery-pink transition-all shadow-md"
          >
            See More Reviews on Google
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-gradient">Get in Touch</h2>
            <p className="text-bakery-chocolate/70 mb-12 leading-relaxed">
              Planning a celebration? We'd love to bake something special for you. Reach out to us for custom designs, pricing, and orders.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-bakery-pink p-4 rounded-2xl text-bakery-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Location</h4>
                  <p className="text-bakery-chocolate/60">House no.83, Professor's colony, Girish nagar, Jamkhandi, Karnataka 587301</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-bakery-pink p-4 rounded-2xl text-bakery-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call / WhatsApp</h4>
                  <p className="text-bakery-chocolate/60">+91 9945118116</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-bakery-pink p-4 rounded-2xl text-bakery-accent">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Business Hours</h4>
                  <p className="text-bakery-chocolate/60">Mon - Sun: 9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="https://wa.me/919945118116" 
                className="inline-flex items-center gap-3 bg-bakery-chocolate text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:bg-bakery-accent transition-all"
              >
                <MessageCircle size={24} />
                Order on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.116664536545!2d75.2894444!3d16.5166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc7071f1f1f1f1f%3A0x1f1f1f1f1f1f1f1f!2sTanu's%20Cake!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-bakery-chocolate text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <a href="#home" className="flex items-center gap-4 mb-6">
              <img 
                src="/logo.png" 
                alt="Tanu's Cake Logo" 
                className="h-16 w-16 object-contain rounded-full bg-white p-1"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="text-3xl font-serif font-bold">
                Tanu's <span className="text-bakery-accent">Cake</span>
              </span>
            </a>
            <p className="text-white/60 max-w-md leading-relaxed mb-8">
              Bringing sweetness to Jamkhandi with our premium handcrafted cakes. We believe every celebration deserves a masterpiece.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-bakery-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-bakery-accent transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#home" className="hover:text-bakery-accent transition-colors">Home</a></li>
              <li><a href="#cakes" className="hover:text-bakery-accent transition-colors">Our Cakes</a></li>
              <li><a href="#gallery" className="hover:text-bakery-accent transition-colors">Gallery</a></li>
              <li><a href="#about" className="hover:text-bakery-accent transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 text-bakery-accent" />
                <span>Professor's colony, Jamkhandi</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-bakery-accent" />
                <span>+91 9945118116</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="shrink-0 text-bakery-accent" />
                <span>WhatsApp Available</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Tanu's Cake. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/919945118116" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle size={32} fill="white" />
    </a>
  );
};

// --- Main App ---

export default function App() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.origin === window.location.origin && anchor.getAttribute('href')?.startsWith('#')) {
        const element = document.querySelector(anchor.hash);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
          // Update URL without jumping
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="relative">
      {/* SEO Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Bakery",
          "name": "Tanu's Cake",
          "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
          "@id": "",
          "url": "https://ais-pre-iihuxiefjmzah6fzboiazp-242517627476.asia-east1.run.app",
          "telephone": "+91 9945118116",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "House no.83, Professor's colony, Girish nagar",
            "addressLocality": "Jamkhandi",
            "postalCode": "587301",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 16.5166667,
            "longitude": 75.2894444
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "09:00",
            "closes": "21:00"
          }
        })}
      </script>

      <Navbar />
      <Hero />
      <FeaturedCakes />
      <WhyUs />
      <Gallery />
      <InstagramFeed />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
