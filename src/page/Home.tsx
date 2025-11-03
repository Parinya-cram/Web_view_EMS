import Menu from "../component/menu";
import Hero from "../component/hero";
import Footer from "../component/footer";

export default function Home() {
    return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col h-auto">
        <div className="flex items-center justify-between p-10 lg:px-8">
          <Menu />
        </div>
      </main>
      <div>
        <Hero />
      </div>
      <Footer />
    </div>
    );
}