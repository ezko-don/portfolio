export const siteConfig = {
  name: "Esther Zawadi Portfolio",
  url: process.env.NODE_ENV === "development" 
    ? "http://localhost:3000" 
    : "https://estherzawadi.vercel.app",
  ogImage: "/og-image.png",
  description: "Portfolio of Esther Zawadi, a passionate student at Strathmore University, currently interning at the institution while pursuing her studies in technology and software development.",
  links: {
    github: "https://github.com/ezko-don",
    linkedin: "https://linkedin.com/in/esther-zawadi",
    email: "e.zawadi@strathmore.edu"
  },
} 