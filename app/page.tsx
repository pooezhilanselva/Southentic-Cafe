import Hero from "./components/Hero";
import About from "./components/About";
import MenuTabs from "./components/MenuTabs";
import OrderOnline from "./components/OrderOnline";
import Location from "./components/Location";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <MenuTabs />
      <OrderOnline />
      <Location />
      <Footer />
    </main>
  );
}
