
import { redirect } from "next/navigation";
import { Footer } from "./components/footer";
import { Navigation } from "./components/navigation";

export default async function FrontLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Navigation/>
      <main className="pt-16 lg:pt-20">{children}</main>
      <Footer/>
    </>
  );
}
