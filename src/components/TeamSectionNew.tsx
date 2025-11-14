import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  email?: string;
}

const TeamSectionNew = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const teamMembers: TeamMember[] = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://via.placeholder.com/300x300?text=SJ",
      bio: "Passionate about making quality care accessible to everyone.",
      linkedin: "#",
      email: "sarah@yaan.care",
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: "https://via.placeholder.com/300x300?text=MC",
      bio: "Ensuring seamless service delivery across all platforms.",
      linkedin: "#",
      email: "michael@yaan.care",
    },
    {
      name: "Emily Rodriguez",
      role: "Director of Care Services",
      image: "https://via.placeholder.com/300x300?text=ER",
      bio: "Dedicated to maintaining the highest standards of care.",
      linkedin: "#",
      email: "emily@yaan.care",
    },
    {
      name: "David Thompson",
      role: "Transportation Lead",
      image: "https://via.placeholder.com/300x300?text=DT",
      bio: "Building a reliable network of professional drivers.",
      linkedin: "#",
      email: "david@yaan.care",
    },
  ];

  return (
    <section
      ref={ref}
      id="team"
      className="py-20 px-4 md:px-8 bg-muted"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated professionals behind YAAN
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="p-6 hover-lift border-primary/20 text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden bg-primary/10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {member.bio}
                </p>
                <div className="flex justify-center gap-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSectionNew;

