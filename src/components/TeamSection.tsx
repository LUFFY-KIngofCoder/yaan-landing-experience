import { Card } from "@/components/ui/card";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "👩‍💼",
    },
    {
      name: "Michael Chen",
      role: "Head of Care Services",
      image: "👨‍⚕️",
    },
    {
      name: "Emily Davis",
      role: "Transport Manager",
      image: "👩‍✈️",
    },
    {
      name: "David Wilson",
      role: "Operations Director",
      image: "👨‍💻",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">
          Meet Our Team
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Dedicated professionals committed to providing exceptional care and service
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="p-6 text-center hover-lift border-primary/20"
            >
              <div className="text-7xl mb-4">{member.image}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
