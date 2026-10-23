import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const items: {
  id: number;
  image: string;
  heading: string;
  body: string;
  title: string;
}[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop",
    heading: "Designing Spaces That Inspire",
    body: "A thoughtfully designed workspace can transform the way people think, collaborate, and create. From the arrangement of furniture to the selection of colors, lighting, and materials, every detail contributes to the overall experience.",
    title: "Interior Design",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
    heading: "Building Digital Experiences",
    body: "We build modern digital experiences that combine clean interfaces, thoughtful interactions, and reliable technology. Every project begins with understanding the people who will use it and the problems it needs to solve. ",
    title: "Development",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop",
    heading: "A Better Way to Work",
    body: "Great work begins with an environment that encourages focus, collaboration, and fresh thinking. The way a workspace is organized can influence how people communicate, approach challenges, and bring their ideas to life. By combining thoughtful planning with flexible layouts and comfortable surroundings, we create spaces that adapt to different working styles.",
    title: "Work Culture",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop",
    heading: "The Beauty of Simplicity",
    body: "Simplicity is not about having less; it is about making room for what matters most. By removing unnecessary distractions and focusing on essential elements, we create experiences that feel clear, balanced, and effortless. Every color, shape, and detail serves a purpose, allowing the important parts to stand out naturally.",
    title: "Minimalism",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
    heading: "Better Ideas Through Collaboration",
    body: "The strongest ideas often emerge when people with different experiences and perspectives come together. Collaboration creates opportunities to challenge assumptions, discover new possibilities, and approach familiar problems from unexpected angles.",
    title: "Collaboration",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    heading: "Turning Data Into Decisions",
    body: "Data becomes truly valuable when it helps people understand what is happening and decide what to do next. By transforming complex information into clear visualizations and meaningful insights, we make it easier to identify patterns, recognize opportunities, and understand performance. Rather than overwhelming people with numbers, we focus on presenting information in a way that answers important questions.",
    title: "Analytics",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop",
    heading: "Architecture With Purpose",
    body: "Great architecture brings together form, function, and the needs of the people who experience a space every day. Every structure tells a story through its proportions, materials, relationship with its surroundings, and response to its environment.",
    title: "Architecture",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop",
    heading: "Creating Room for Creativity",
    body: "Creativity thrives when people have the freedom to explore, experiment, and think beyond familiar solutions. It requires an environment where curiosity is encouraged, mistakes become opportunities to learn, and different perspectives are welcomed. ",
    title: "Creativity",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop",
    heading: "Technology That Connects Us",
    body: "Technology is at its best when it brings people closer together and makes everyday experiences simpler. From digital communication tools to collaborative platforms, the right technology helps people exchange ideas, share information, and work toward common goals regardless of their location.",
    title: "Technology",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
    heading: "Finding Inspiration in Nature",
    body: "Nature reminds us to slow down, observe our surroundings, and appreciate the details that often go unnoticed. The changing colors of a landscape, the patterns of leaves, and the balance found in natural environments offer endless opportunities for inspiration. These observations can influence the way we approach design, creativity, and everyday living.",
    title: "Inspiration",
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop",
    heading: "Experiences Worth Remembering",
    body: "Memorable experiences are rarely defined by a single moment; they are shaped by the atmosphere, interactions, and thoughtful details that come together throughout the journey. From the first impression to the smallest finishing touch, every element influences how people feel and what they remember. We believe great experiences begin with understanding people's expectations and designing around their needs.",
    title: "Experiences",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&fit=crop",
    heading: "Learning Beyond Boundaries",
    body: "Learning is a continuous journey that grows through curiosity, experimentation, and the willingness to explore unfamiliar ideas. Every new skill creates opportunities to understand the world differently, solve problems more effectively, and discover interests we may not have recognized before. ",
    title: "Learning",
  },
  {
    id: 13,
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop",
    heading: "Thoughtful Details, Lasting Impact",
    body: "The difference between something ordinary and something exceptional often lies in the details. Carefully chosen materials, balanced proportions, refined finishes, and considered functionality can transform a simple concept into a memorable experience. These details may seem small individually, but together they influence the quality, usability, and character of the final result.",
    title: "Craftsmanship",
  },
  {
    id: 14,
    image:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=800&auto=format&fit=crop",
    heading: "Making Innovation Practical",
    body: "Innovation matters most when it addresses real challenges and creates meaningful improvements. New ideas can be exciting, but their true value depends on how effectively they work in everyday situations. We focus on understanding existing problems, exploring alternative approaches, and developing solutions that are useful, accessible, and sustainable.",
    title: "Innovation",
  },
  {
    id: 15,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop",
    heading: "Spaces That Bring People Together",
    body: "The right environment can encourage conversations, strengthen relationships, and create a genuine sense of belonging. Whether it is a shared workspace, a welcoming community area, or a comfortable gathering place, thoughtful design influences how people interact with one another.",
    title: "Community",
  },
  {
    id: 16,
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop",
    heading: "A Portfolio Built on Passion",
    body: "Every project represents a journey of exploration, problem-solving, and continuous improvement. A meaningful portfolio does more than display finished work; it reveals the ideas, decisions, and creative processes that shaped each result. ",
    title: "Our Work",
  },
  {
    id: 17,
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop",
    heading: "Growing Together Through Ideas",
    body: "Progress becomes more meaningful when people learn from one another and work toward shared goals. Exchanging ideas helps teams discover new perspectives, challenge outdated assumptions, and identify opportunities that might otherwise go unnoticed. ",
    title: "Growth",
  },
  {
    id: 18,
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&auto=format&fit=crop",
    heading: "Modern Design, Timeless Thinking",
    body: "Design trends come and go, but thoughtful work remains relevant because it is grounded in principles that stand the test of time. Clear structure, balanced proportions, purposeful details, and a strong understanding of user needs provide a foundation for lasting design.",
    title: "Modern Design",
  },
  {
    id: 19,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop",
    heading: "Building for a Better Future",
    body: "The choices we make today influence the environments, communities, and opportunities available to future generations. Creating a better future requires us to consider more than immediate results; it means thinking about durability, responsible resource use, accessibility, and long-term impact.",
    title: "Sustainability",
  },
  {
    id: 20,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop",
    heading: "Turning Vision Into Reality",
    body: "Every meaningful project begins with an idea, but transforming that idea into something real requires planning, creativity, and consistent effort. A clear vision provides direction, while thoughtful decisions and practical steps help turn ambitious goals into achievable outcomes.",
    title: "Our Vision",
  },
];
export default function Hero() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  // const currentCenteredItem = useRef<number>(-1);
  const [currentCenteredItem, setcurrentCenteredItem] = useState(-1);
  const check = () => {
    const viewPortCenter = innerHeight / 2;

    const centeredItem = itemsRef.current.find((item) => {
      if (!item) return;

      const rect = item.getBoundingClientRect();

      return rect.top <= viewPortCenter && rect.bottom >= viewPortCenter;
    });
    if (centeredItem) {
      setcurrentCenteredItem(Number(centeredItem.id));
    }
  };
  const activeItem =
    items.find((item) => item.id === currentCenteredItem) ?? items[0];
  useEffect(() => {
    window.addEventListener("scroll", check);
    check();

    return () => {
      window.removeEventListener("scroll", check);
    };
  }, []);
  // console.log(itemsRef.current);
  return (
    <div className="h-[420vh] px-4 w-full relative grid grid-cols-[0.6fr_1fr_0.6fr] gap-4 bg-black py-6">
      <div className=" sticky top-20 h-fit ">
        <div className="aspect-square w-80">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeItem.id}
              src={activeItem.image}
              alt={activeItem.heading}
              className="size-full object-cover rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
      </div>
      <div className="pl-20">
        <motion.div className="">
          {[...items, ...items].map((item, idx) => (
            <div
              key={idx}
              id={`${item.id}`}
              ref={(element) => {
                itemsRef.current[idx] = element;
              }}
              className={`text-neutral-700 py-3 ${currentCenteredItem === item.id && "text-white"} transition-colors font-heading text-5xl`}
            >
              {item.title}
            </div>
          ))}
        </motion.div>
      </div>
      <div className="sticky top-80 h-fit font-mono text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="size-4 rounded-full bg-mist-600" />
              <div className="size-4 rounded-full bg-olive-600" />
              <div className="size-4 rounded-full bg-olive-800" />
            </div>
            <h2 className="text-lg mb-2 font-serif ">{activeItem.heading}</h2>
            <p className=" font-extralight">{activeItem.body}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
