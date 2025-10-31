import Menu from "../component/menu";
import Footer from "../component/footer";

export default function Home() {
    return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Menu />
      </main>
      <Footer />
    </div>
    );
}