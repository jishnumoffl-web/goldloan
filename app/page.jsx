"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight, Sparkles } from "lucide-react";

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-3 md:gap-6 justify-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="bg-card text-card-foreground rounded-xl w-16 h-16 md:w-24 md:h-24 flex items-center justify-center shadow-lg border-2 border-primary/10">
            <span className="text-2xl md:text-4xl font-serif font-bold">
              {String(value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs md:text-sm uppercase tracking-wider mt-2 font-medium text-foreground/80">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
}

function Logo() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32 md:w-40 md:h-40 bg-card rounded-full flex items-center justify-center shadow-2xl border-4 border-primary/20">
        <div className="absolute inset-2 rounded-full border-2 border-primary/30" />
        <div className="text-center">
          <div className="flex items-center justify-center">
            <span className="text-4xl md:text-5xl font-serif font-bold text-primary">
              T
            </span>
            <span className="text-4xl md:text-5xl font-serif font-bold text-[hsl(var(--gold))]">
              F
            </span>
          </div>
          <div className="text-[10px] md:text-xs text-muted-foreground font-medium mt-1 leading-tight">
            SHERLYN GROUP
            <br />
            ESTD-1989
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatingParticle({ delay, duration, size, left, top }) {
  return (
    <div
      className="absolute rounded-full bg-card/30 animate-pulse"
      style={{
        width: size,
        height: size,
        left: `${left}%`,
        top: `${top}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  );
}

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const launchDate = "2026-04-01T00:00:00";

  const particles = [
    { delay: 0, duration: 3, size: 8, left: 10, top: 20 },
    { delay: 1, duration: 4, size: 12, left: 80, top: 15 },
    { delay: 2, duration: 3.5, size: 6, left: 25, top: 70 },
    { delay: 0.5, duration: 4.5, size: 10, left: 70, top: 60 },
    { delay: 1.5, duration: 3, size: 14, left: 90, top: 80 },
    { delay: 2.5, duration: 4, size: 8, left: 5, top: 85 },
  ];

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating particles */}
      {mounted &&
        particles.map((particle, index) => (
          <FloatingParticle key={index} {...particle} />
        ))}

      {/* Decorative circles */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-card/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-card/20 rounded-full blur-3xl" />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-4 md:p-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground/70">
                Since 1989
              </span>
            </div>
            <a
              href="tel:8714742635"
              className="flex items-center gap-2 bg-card text-card-foreground px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Call Now</span>
            </a>
          </div>
        </header>

        {/* Main content */}
        <section className="flex-1 flex items-center justify-center px-4 py-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
            {/* Logo */}
            <div
              className={`transform transition-all duration-1000 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <Logo />
            </div>

            {/* Company name */}
            <div
              className={`space-y-2 transform transition-all duration-1000 delay-200 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <h1 className="text-4xl md:text-7xl font-serif font-bold text-foreground tracking-tight text-balance">
                THANDAPRA
              </h1>
              <p className="text-lg md:text-2xl font-medium text-foreground/80 tracking-widest">
                GOLD LOAN & FINANCE
              </p>
            </div>

            {/* Coming soon badge */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <span className="inline-flex items-center gap-2 bg-card text-card-foreground px-6 py-3 rounded-full shadow-lg text-sm md:text-base font-semibold">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Coming Soon
              </span>
            </div>

            {/* Description */}
            <p
              className={`text-foreground/70 max-w-2xl mx-auto text-base md:text-lg leading-relaxed transform transition-all duration-1000 delay-500 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              We are preparing something extraordinary for you. Our trusted gold
              loan and finance services are getting a digital makeover to serve
              you better.
            </p>

            {/* Email signup */}
            <div
              className={`transform transition-all duration-1000 delay-600 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email for updates"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-3 rounded-full bg-input border-2 border-border focus:border-primary focus:outline-none transition-all text-foreground placeholder:text-muted-foreground shadow-inner"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  Notify Me
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
              {isSubmitted && (
                <p className="text-green-600 mt-3 font-medium animate-pulse">
                  Thank you! We will notify you when we launch.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Contact info */}
        <footer className="p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/80 backdrop-blur rounded-2xl p-6 md:p-8 shadow-xl">
              <h3 className="text-lg font-serif font-semibold text-card-foreground mb-6 text-center">
                Contact Us
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                  href="tel:8714742635"
                  className="flex items-center gap-3 text-card-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="font-semibold">8714 742 635</p>
                  </div>
                </a>

                <a
                  href="mailto:info@thandapra.com"
                  className="flex items-center gap-3 text-card-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-semibold">info@thandapra.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-card-foreground">
                  <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Working Hours
                    </p>
                    <p className="font-semibold">Mon - Sat: 9AM - 6PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer text */}
            <div className="mt-8 text-center space-y-2">
              <p className="text-foreground/60 text-sm">
                Sherlyn Group — Trusted Financial Partner Since 1989
              </p>
              <p className="text-foreground/40 text-xs">
                © 2026 Thandapra Gold Loan & Finance. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
