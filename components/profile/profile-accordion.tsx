import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"

import React from "react";

export type ScrollableAccordionContent = {
  title: string,
  content: React.ReactNode,
}

function ScrollableContent({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}
) {
  return (
    <AccordionContent>
      <ScrollArea className={className}>
        {children}
      </ScrollArea>
    </AccordionContent>
  )
}

export function ProfileAccordion({
  about,
  code,
  skills,
  className
}: {
  about: React.ReactNode;
  code: React.ReactNode;
  skills: React.ReactNode;
  className?: string
}) {
  return (
    <Accordion type="single" collapsible className={"w-screen mb-0 mt-auto"}>
      <AccordionItem value="item-1" className="bg-[#5b7c8d] rounded-t-xl px-2">  
        <AccordionTrigger className="h-16">About</AccordionTrigger>
        <ScrollableContent>
          {about}
        </ScrollableContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="bg-[#6d597a] rounded-t-xl px-2 -mt-2 ">
        <AccordionTrigger  className="h-16">Code</AccordionTrigger>
        <ScrollableContent>
          {code}
        </ScrollableContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="bg-[#8470a5] rounded-t-xl px-2 -mt-2">
        <AccordionTrigger className="h-16">Other</AccordionTrigger> 
        <ScrollableContent>
          {skills}
        </ScrollableContent>
      </AccordionItem>
    </Accordion>
  )
}


const codeSnippet = `private Color OR(Color color1, Color color2)
          {
              Color output = color1;
              byte r1 = color1.R; byte g1 = color1.G; byte b1 = color1.B;
              byte r2 = color2.R; byte g2 = color2.G; byte b2 = color2.B;

              return Color.FromArgb(r1 | r2, g1 | g2, b1 | b2);
          }
              private Color OR(Color color1, Color color2)
          {
              Color output = color1;
              byte r1 = color1.R; byte g1 = color1.G; byte b1 = color1.B;
              byte r2 = color2.R; byte g2 = color2.G; byte b2 = color2.B;

              return Color.FromArgb(r1 | r2, g1 | g2, b1 | b2);
          }
              private Color OR(Color color1, Color color2)
          {
              Color output = color1;
              byte r1 = color1.R; byte g1 = color1.G; byte b1 = color1.B;
              byte r2 = color2.R; byte g2 = color2.G; byte b2 = color2.B;

              return Color.FromArgb(r1 | r2, g1 | g2, b1 | b2);
          }`