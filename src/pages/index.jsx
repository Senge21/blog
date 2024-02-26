import { Navbar, Content, Footer } from "@/components/layout/index.js";

export default function Home() {
  return (
    <div className="flex  flex-col w-full ">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}
