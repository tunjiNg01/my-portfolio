import { BoxUtility, PageTitles, Contact } from "@/components/index";
import placeholder from "@/public/placeholder.png";
import Image from "next/image";

export default function WorkDetails() {
  return (
    <div>
      <PageTitles
        description=" Selected work I&lsquo;ve taken on in the past."
        title="./App name"
      />
      <div className="mx-auto max-w-full px-4 pb-28 sm:max-w-[85%]  sm:pb-28  sm:pt-4 ">
        <div className="grid gap-8 sm:grid-cols-4">
          <div className="col-span-3 ">
            <Image src={placeholder} alt="product" />
            <p className="mt-12 font-raleway ">
              {`The AT Protocol syncs the repositories in a federated networking
            model. Federation was chosen to ensure the network is convenient to
            use and reliably available. Repository data is synchronized between
            servers over standard web technologies (HTTP and WebSockets). The
            three core services in our network are Personal Data Servers (PDS),
            Big Graph Services (BGS), and App Views. We're also working on feed
            generators and labelers. The lower-level primitives that can get
            stacked together differently are the repositories, lexicons, and
            DIDs. We published an overview of our technical decisions around
            federation architecture on our blog.
            `}
            </p>

            <p className="mt-12 font-raleway ">
              {`The AT Protocol syncs the repositories in a federated networking
            model. Federation was chosen to ensure the network is convenient to
            use and reliably available. Repository data is synchronized between
            servers over standard web technologies (HTTP and WebSockets). The
            three core services in our network are Personal Data Servers (PDS),
            Big Graph Services (BGS), and App Views. We're also working on feed
            generators and labelers. The lower-level primitives that can get
            stacked together differently are the repositories, lexicons, and
            DIDs. We published an overview of our technical decisions around
            federation architecture on our blog.
            `}
            </p>
          </div>
          <div className="col-span-1 ">
            <h1 className="font-raleway font-bold ">Core stack</h1>
            <div className="flex space-x-2 ">
              <p className="mt-2 rounded-full bg-slate-50 px-3 py-1 font-raleway text-xs font-semibold  text-slate-800 ">
                Go
              </p>
              <p className="mt-2  rounded-full bg-slate-50 px-3 py-1 font-raleway text-xs font-semibold  text-slate-800 ">
                PHP
              </p>
              <p className="mt-2  rounded-full bg-slate-50 px-3 py-1 font-raleway text-xs font-semibold  text-slate-800 ">
                C#
              </p>
              <p className="mt-2  rounded-full bg-slate-50 px-3 py-1 font-raleway text-xs font-semibold  text-slate-800 ">
                Nodejs
              </p>
            </div>
            <h1 className="mt-8 font-raleway font-bold ">Source</h1>
            <h1 className="font-raleway text-base font-bold text-slate-400 ">
              N/A
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 ">
        <Contact />
      </div>
    </div>
  );
}
