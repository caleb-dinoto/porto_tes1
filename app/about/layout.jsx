import Footer from "@/components/Footer";

export const metadata = {
  title: "Caleb | About",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
