import React from "react";
import { Shield, AlertCircle, Users, Clock, Ban, Scale, Package, AlertTriangle, Calendar, FileCheck } from "lucide-react";

const GeneralRulesSection = () => {
  const rules = [
    {
      icon: FileCheck,
      title: "ID Verification",
      description: "All participants must carry their valid college ID cards.",
      color: "border-primary/30"
    },
    {
      icon: Calendar,
      title: "Registration",
      description: "Prior registration is mandatory for all events (on-spot allowed only if mentioned).",
      color: "border-secondary/30"
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Participants should report to the venue at least 15 minutes before their event.",
      color: "border-accent/30"
    },
    {
      icon: Shield,
      title: "Code of Conduct",
      description: "Decent dress code and respectful behavior must be maintained throughout the event.",
      color: "border-highlight/30"
    },
    {
      icon: AlertCircle,
      title: "Event-Specific Rules",
      description: "Each competition will have its own rules; participants must follow the instructions of coordinators/judges.",
      color: "border-primary/30"
    },
    {
      icon: Scale,
      title: "Judges' Decision",
      description: "The decision of the judges will be final and binding.",
      color: "border-secondary/30"
    },
    {
      icon: Ban,
      title: "Prohibited Items",
      description: "Use of unfair means, offensive language, or inappropriate content will lead to disqualification.",
      color: "border-accent/30"
    },
    {
      icon: Users,
      title: "Team Participation",
      description: "For group events, all members must be from the same college unless specified.",
      color: "border-highlight/30"
    },
    {
      icon: Package,
      title: "Responsibility",
      description: "The organizers are not responsible for loss of belongings or personal items.",
      color: "border-primary/30"
    },
    {
      icon: AlertTriangle,
      title: "Rights Reserved",
      description: "The committee reserves the right to change schedules/events if necessary.",
      color: "border-secondary/30"
    }
  ];

  return (
    <section id="general-rules" className="py-20 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            General Rules & Guidelines
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Important guidelines to ensure a smooth and fair event experience for all participants
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {rules.map((rule, index) => {
            const Icon = rule.icon;
            return (
              <div
                key={index}
                className={`group bg-gradient-card p-6 rounded-2xl border-2 ${rule.color} hover:border-opacity-100 transition-all duration-300 hover-lift scroll-fade-in`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-primary rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Icon size={24} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg font-bold text-primary">{index + 1}.</span>
                      <h3 className="text-lg font-display font-semibold text-foreground">
                        {rule.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {rule.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Important Note */}
        <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 scroll-fade-in">
          <div className="flex items-start gap-4">
            <AlertCircle size={24} className="text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Important Note</h4>
              <p className="text-muted-foreground leading-relaxed">
                These rules are designed to ensure a fair, safe, and enjoyable experience for all participants. 
                Violation of any rule may result in disqualification. For any clarifications, please contact the event coordinators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralRulesSection;