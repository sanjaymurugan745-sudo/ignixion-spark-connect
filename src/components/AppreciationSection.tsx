import React from "react";
import { Trophy, Award, Medal, Star } from "lucide-react";

const AppreciationSection = () => {
  return (
    <section id="appreciation" className="py-20 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Appreciation & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating excellence and participation at IGNIXION'25
          </p>
        </div>

        {/* Appreciation Cards */}
        <div className="grid md:grid-cols-2 gap-6 scroll-fade-in">
          {/* Winners Card */}
          <div className="group relative bg-gradient-card p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover-lift">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent rounded-2xl opacity-50" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Trophy size={28} className="text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-foreground">Winners</h3>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Winners will be awarded <strong className="text-foreground">certificates of achievement</strong> and <strong className="text-foreground">Medals</strong> on the second day of the event.
              </p>
              
              <div className="mt-6 flex gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Medal size={20} className="text-primary" />
                </div>
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Award size={20} className="text-secondary" />
                </div>
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Star size={20} className="text-accent" />
                </div>
              </div>
            </div>
          </div>

          {/* Participants Card */}
          <div className="group relative bg-gradient-card p-8 rounded-2xl border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover-lift">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-accent/10 to-transparent rounded-2xl opacity-50" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-accent rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Award size={28} className="text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-foreground">All Participants</h3>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                All participants will receive a <strong className="text-foreground">digital certificate of participation</strong> (e-certificate).
              </p>
              
              <div className="mt-6 p-3 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg border border-border/50">
                <p className="text-sm text-muted-foreground">
                  Every participant's effort and dedication will be recognized
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppreciationSection;