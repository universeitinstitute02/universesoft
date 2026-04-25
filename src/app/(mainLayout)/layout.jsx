import Footer from "@/components/MainLayouts/common/Footer";
import Header from "@/components/MainLayouts/common/Header";

export default function RootLayout({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
