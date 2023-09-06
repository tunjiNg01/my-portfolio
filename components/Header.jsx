import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 w-full bg-slate-50 ">
      <nav className="container mx-auto py-5 ">
        {/* brand logo */}
        <div className="flex items-center space-x-12 ">
          <Link href="#">
            <h2 className="font-raleways text-xl  font-black text-slate-800 antialiased ">
              tunji.dev
            </h2>
          </Link>
          <div className="flex space-x-8">
            <Link href="#">
              <h2 className="font-raleways text-sm font-semibold text-slate-800 antialiased ">
                Expertise
              </h2>
            </Link>
            <Link href="#">
              <h2 className="font-raleways text-sm font-semibold text-slate-800 antialiased ">
                Work
              </h2>
            </Link>
            <Link href="#">
              <h2 className="font-raleways text-sm font-semibold text-slate-800 antialiased ">
                Tips and Tricks
              </h2>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
