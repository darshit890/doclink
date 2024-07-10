'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaQ } from "react-icons/fa6";
import { motion } from 'framer-motion';

const Faq = () => {
  // Define the animation variants
  const contentVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      }
    }
  };

  return (
    <div id="faq" className="flex flex-col bg-black-100 items-center mb-10 gap-y-5 mt-[8rem]">
      <h1 className="small-heading text-3xl font-semibold">Faqs</h1>
      <h4 className="text-2xl text-muted-foreground font-medium pt-1">
      Have questions? don’t hesitate to reach us
      </h4>
      <motion.div
                initial="hidden"
                animate="visible"
                variants={contentVariants}
               className="max-w-[100vh] lg:min-w-[100vh] mt-10">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What does the Basic Package offer?</AccordionTrigger>
            <AccordionContent>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={contentVariants}
              >
                The Basic Package allows users to evaluate their business idea using 5 essential criteria for free. It provides foundational insights to help users understand the viability of their concept.
              </motion.div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How does the Premium Package enhance my analysis?</AccordionTrigger>
            <AccordionContent>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={contentVariants}
              >
                The Premium Package includes all 11 criteria for a comprehensive assessment, along with advanced features such as graphical and visualization-based data analysis. This enables users to gain deeper insights into their business idea&apos;s strengths and weaknesses.
              </motion.div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can I upgrade from the Basic to the Premium Package later?</AccordionTrigger>
            <AccordionContent>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={contentVariants}
              >
                Yes, users have the flexibility to start with the Basic Package and upgrade to the Premium Package at any time to access more detailed analysis and visualization tools.
              </motion.div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is my business idea information kept confidential?</AccordionTrigger>
            <AccordionContent>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={contentVariants}
              >
                Absolutely, we prioritize user privacy and security. All information entered during the business idea evaluation process is encrypted and stored securely, ensuring confidentiality.
              </motion.div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How can I track my past evaluations and progress?</AccordionTrigger>
            <AccordionContent>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={contentVariants}
              >
                Users can view their history of evaluations on the History page. This feature allows them to track changes over time, compare different ideas, and see how their thinking has evolved.
              </motion.div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  );
};

export default Faq;