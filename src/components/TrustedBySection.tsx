import { Card } from "@/components/ui/card";

const TrustedBySection = () => {
  const clients = [
    { name: "Healthcare Plus", logo: "🏥" },
    { name: "Senior Living", logo: "🏘️" },
    { name: "Community Care", logo: "🤝" },
    { name: "Family Services", logo: "👨‍👩‍👧‍👦" },
    { name: "Medical Group", logo: "⚕️" },
    { name: "Wellness Center", logo: "💚" },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">
          Trusted By
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Partnering with leading organizations to deliver excellence in care
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col items-center justify-center hover-lift border-primary/10"
            >
              <div className="text-5xl mb-3">{client.logo}</div>
              <p className="text-sm font-medium text-center text-foreground">
                {client.name}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
