import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Heart, Shield, Target, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const team = [
    {
      name: "Alex Rivera",
      role: "Founder & CEO",
      image: "/images/team/member1.png",
      bio: "Visionary leader with 10+ years in event technology.",
    },
    {
      name: "Sarah Chen",
      role: "Creative Director",
      image: "/images/team/member2.png",
      bio: "Passionate about creating unforgettable user experiences.",
    },
    {
      name: "Marcus Thorne",
      role: "Operations Lead",
      image: "/images/team/member3.png",
      bio: "Ensuring every event runs like clockwork.",
    },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Precision",
      description: "We believe in the power of details. Every pixel and every interaction matters.",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Trust",
      description: "Your data and your events are safe with us. Security is our top priority.",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in event management.",
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Passion",
      description: "We love what we do, and it shows in the quality of our platform.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-muted/30">
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 px-4 py-1 rounded-full">
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Empowering the World to <span className="text-primary">Connect</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded in 2024, Next Event started with a simple mission: to make event management 
              seamless, accessible, and truly modern. We've built a platform that handles the 
              complexity so you can focus on what matters—the experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/events">Explore Events</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-700" />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-100 rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622" 
                alt="Event atmosphere" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-muted-foreground text-lg">
                  To provide the most intuitive and powerful event management tools for organizers 
                  of all sizes, fostering community and connection through shared experiences.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-muted-foreground text-lg">
                  A world where every event, from local meetups to global conferences, 
                  is managed effortlessly, leaving a lasting positive impact on every participant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/20">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">
              These principles guide everything we do, from the features we build to the way 
              we support our community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-background p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
            <p className="text-muted-foreground">
              The dedicated individuals working behind the scenes to bring you the best 
              event management experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/10 group-hover:border-primary transition-colors duration-300">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Events Hosted</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50k+</div>
              <div className="text-primary-foreground/80">Happy Users</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-primary-foreground/80">Countries</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-primary-foreground/80">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-3xl mx-auto p-12 rounded-3xl bg-muted/50 border relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Next Event?</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Join thousands of organizers who trust Next Event for their most important gatherings.
              </p>
              <Button size="lg" className="px-12 rounded-full" asChild>
                <Link href="/signup">Get Started for Free</Link>
              </Button>
            </div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
}