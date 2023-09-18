import { PageTitles, Contact, SelectedWorks } from "@/components/index";

export default function work() {
  return (
    <div>
      <PageTitles />

      <div className="bg-slate-50">
        <SelectedWorks />
        <Contact />
      </div>
    </div>
  );
}
