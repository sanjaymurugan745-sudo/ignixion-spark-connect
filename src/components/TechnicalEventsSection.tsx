import React, { useState } from "react";
import { ChevronDown, Code, Laptop, Zap, FileText, Brain, Video, Film, MapPin, Clock } from "lucide-react";

const TechnicalEventsSection = () => {
  const [openEvent, setOpenEvent] = useState<number | null>(null);

  const technicalEvents = [
    {
      icon: Code,
      title: "App Development Showcase",
      teamSize: "Up to 3 members",
      description: "The project will be only showcased on the day of the event. Project should be submitted on or before 23/09/25 till 11 pm. Everyone should come up with the essentials (Laptop, Mobile Phone, Tablet, etc...) to showcase the project.",
      rules: [
        "Maximum of 3 members",
        "Original projects only - no plagiarism",
        "Follow the allotted time and theme guidelines",
        "Projects will be showcased to judges and staff",
        "Judged on innovation, functionality, and presentation",
        "Judges' decision is final."
      ],
      venue: "Dr. MRS SAKUNTHALA RANGARAJAN, MBBS. MEMORIAL HALL",
      time: "12:00PM to 12:30PM",
      color: "border-primary/30 hover:border-primary"
    },
    {
      icon: Laptop,
      title: "Web Development Showcase",
      teamSize: "Individual or up to 3 members",
      description: "The project will be only showcased on the day of the event. Project should be submitted on or before 23/09/25 till 11 pm. Everyone should come up with the essentials (Laptop, Mobile Phone, Tablet, etc...) to showcase the project.",
      rules: [
        "Individual participation or teams up to 3 members",
        "Must be original work with proper documentation",
        "Responsive design and cross-browser compatibility required",
        "Showcase to panel of industry experts",
        "Evaluation based on creativity, technical implementation, and user experience",
        "Judges' decision is final."
      ],
      venue: "Dr. MRS SAKUNTHALA RANGARAJAN, MBBS. MEMORIAL HALL",
      time: "12:00PM to 12:30PM",
      color: "border-secondary/30 hover:border-secondary"
    },
    {
      icon: Zap,
      title: "Hackathon",
      teamSize: "Up to 3 members",
      description: "Fast-paced problem-solving challenge with live problem statements and real-time judging.",
      rules: [
        "Maximum of 3 members",
        "Problem statement projected live on event day",
        "Limited time to develop solution",
        "Judged on speed, accuracy, and solution effectiveness",
        "No external help or pre-written code allowed",
        "Laptop policy: Bringing a personal laptop is optional for teams; however, all CTF challenges must be solved on the designated lab systems provided by organizers",
        "Use of AI tools (ChatGPT, Copilot, Gemini, Claude, Llama, etc.) in any form during the hackathon is prohibited; any team using AI or AI‑generated content will be immediately disqualified",
        "Judges' decision is final."
      ],
      venue: "BSC Computer Science Lab",
      time: "10:00AM to 12:00PM",
      color: "border-accent/30 hover:border-accent"
    },
    {
      icon: FileText,
      title: "Paper Presentation",
      teamSize: "Max 2 members",
      description: "Present your research and innovative ideas in a professional academic format.",
      rules: [
        "Maximum 2 members per team",
        "Submit paper by deadline (no extensions)",
        "Project should be submitted on or before 23/09/25 till 11 pm",
        "10-15 minute presentation + 5 minute Q&A",
        "Judged on quality of research, clarity of presentation, and originality",
        "PDF OR PPT is required for Submission",
        "Judges' decision is final."
      ],
      pptTopics: [
        "Less-Code / Non-code platforms in 2025",
        "The Role of 5G / 6G in the future",
        "Internet of Things (IoT): Future Trends",
        "The Rise of Generative AI and its Ethical Concerns",
        "The Future of Digital Payments in India (UPI 2.0, CBDC, etc.)",
        "Edge Computing vs. Cloud Computing"
      ],
      venue: "Dr. MRS SAKUNTHALA RANGARAJAN, MBBS. MEMORIAL HALL",
      time: "10:00AM to 12:00PM",
      color: "border-highlight/30 hover:border-highlight"
    },
    {
      icon: Brain,
      title: "Tech Quiz",
      teamSize: "Maximum of 3 members",
      description: "Test your knowledge across various technical domains in this rapid-fire quiz competition.",
      rules: [
        "Maximum of 3 members",
        "Covers programming, algorithms, current tech trends",
        "Multiple round will be conducted for selection",
        "Points awarded for correct answers",
        "Negative marking may apply in final rounds",
        "Judges' decision is final."
      ],
      venue: "Shanmugavel Auditorium",
      time: "10:00AM to 12:30PM",
      color: "border-primary/30 hover:border-primary"
    },
    {
      icon: Video,
      title: "On-Spot Video Editing",
      teamSize: "Individual",
      description: "Create compelling video content within strict time constraints using provided footage.",
      rules: [
        "Individual participation",
        "1 hour time limit",
        "Raw footage and theme provided on spot",
        "Bring your own editing software and plugins",
        "Judged on creativity, storytelling, and technical execution",
        "Judges' decision is final."
      ],
      venue: "Room No.: 206",
      time: "10:00AM to 12:00PM",
      color: "border-secondary/30 hover:border-secondary"
    },
    {
      icon: Film,
      title: "Short Film",
      teamSize: "Team participation: 2–4 members per film",
      description: "Showcase your creativity by producing a short film within the given theme and time limit.",
      rules: [
        "Team participation: 2–4 members per film",
        "Duration: 1 to 10 minutes including titles and credits.",
        "Submission on or before 23/09/25 till 11 pm",
        "Top 5 videos will be selected to next round",
        "Round 2: Judges will select the top 3 videos based on the video",
        "18+ scenes are not allowed.",
        "Excessive blood or violent content is not allowed.",
        "Content/theme: open; any non‑adult, non‑violent concept is acceptable.",
        "Judges' decision will be final."
      ],
      venue: "Dr. MRS SAKUNTHALA RANGARAJAN, MBBS. MEMORIAL HALL",
      time: "11:30AM to 12:00PM",
      color: "border-accent/30 hover:border-accent"
    }
  ];

  const toggleEvent = (index: number) => {
    setOpenEvent(openEvent === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Technical Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Challenge your technical prowess and showcase your skills in these cutting-edge competitions
          </p>
        </div>

        {/* Events Accordion */}
        <div className="space-y-6">
          {technicalEvents.map((event, index) => {
            const Icon = event.icon;
            const isOpen = openEvent === index;
            
            return (
              <div
                key={event.title}
                className={`bg-gradient-card border-2 rounded-2xl transition-all duration-500 overflow-hidden scroll-fade-in ${event.color}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Event Header */}
                <button
                  onClick={() => toggleEvent(index)}
                  className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-muted/20 transition-colors duration-300"
                >
                  <div className="flex items-center gap-6">
                    <div className="p-3 bg-gradient-primary rounded-xl">
                      <Icon size={24} className="text-primary-foreground" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        {event.teamSize}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    size={24}
                  />
                </button>

                {/* Event Content */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen ? "h-auto opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8 min-w-0">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {event.description}
                    </p>
                     <div className="min-w-0">
                       <h4 className="font-semibold text-foreground mb-3">Rules & Guidelines:</h4>
                       <ul 
                         className="m-0 p-[10px_16px_16px_22px] sm:pl-5 leading-[1.55] sm:leading-[1.6] overflow-wrap-anywhere whitespace-normal list-outside" 
                         style={{ listStylePosition: 'outside' }}
                       >
                         {event.rules.map((rule, ruleIndex) => (
                           <li 
                             key={ruleIndex} 
                             className={`flex items-start gap-3 text-[0.95rem] sm:text-base mb-[10px] last:mb-0 ${ruleIndex < event.rules.length - 1 ? 'mb-[10px]' : 'mb-0'}`}
                           >
                             <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                             <span className="text-muted-foreground min-w-0 break-words">{rule}</span>
                           </li>
                         ))}
                       </ul>
                       
                         {/* Add Rounds section for Hackathon */}
                         {event.title === "Hackathon" && (
                           <div className="mt-6 min-w-0">
                             <h4 className="font-semibold text-foreground mb-3">Rounds:</h4>
                             <ul 
                               className="m-0 p-[10px_16px_16px_22px] sm:pl-5 leading-[1.55] sm:leading-[1.6] overflow-wrap-anywhere whitespace-normal list-outside" 
                               style={{ listStylePosition: 'outside' }}
                             >
                               <li className="flex items-start gap-3 text-[0.95rem] sm:text-base mb-[10px]">
                                 <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                 <span className="text-muted-foreground min-w-0 break-words">Round 1: 15 labs CTF challenge; top teams qualify for next round.</span>
                               </li>
                               <li className="flex items-start gap-3 text-[0.95rem] sm:text-base mb-0">
                                 <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                 <span className="text-muted-foreground min-w-0 break-words">Round 2: Team discussion to solve coding problems (top 3 teams selected).</span>
                               </li>
                             </ul>
                           </div>
                         )}

                         {/* Add PPT Topics section for Paper Presentation */}
                         {event.title === "Paper Presentation" && event.pptTopics && (
                           <div className="mt-6 min-w-0">
                             <h4 className="font-semibold text-foreground mb-3">PPT Topics:</h4>
                             <ul 
                               className="m-0 p-[10px_16px_16px_22px] sm:pl-5 leading-[1.55] sm:leading-[1.6] overflow-wrap-anywhere whitespace-normal list-outside" 
                               style={{ listStylePosition: 'outside' }}
                             >
                               {event.pptTopics.map((topic, topicIndex) => (
                                 <li 
                                   key={topicIndex}
                                   className={`flex items-start gap-3 text-[0.95rem] sm:text-base ${topicIndex < event.pptTopics.length - 1 ? 'mb-[10px]' : 'mb-0'}`}
                                 >
                                   <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                                   <span className="text-muted-foreground min-w-0 break-words">{topic}</span>
                                 </li>
                               ))}
                             </ul>
                           </div>
                         )}
                        
                        {/* Venue and Time Section */}
                        <div className="mt-6 p-4 bg-muted/30 rounded-xl border border-primary/20">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-5 h-5 text-primary" />
                              <span className="font-semibold text-foreground">Venue:</span>
                            </div>
                            <span className="text-muted-foreground">{event.venue}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <Clock className="w-5 h-5 text-primary" />
                              <span className="font-semibold text-foreground">Time:</span>
                            </div>
                            <span className="text-muted-foreground">{event.time}</span>
                          </div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnicalEventsSection;