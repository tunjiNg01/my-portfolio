import { PageTitles, Contact, SelectedWorks } from "@/components/index";

export default function WorkPage() {
  return (
    <div>
      <PageTitles
        title="./ Work"
        description=" Selected work I&lsquo;ve taken on in the past."
      />
      <div className=" bg-slate-50 pt-8">
        <SelectedWorks />
        <Contact />
      </div>
    </div>
  );
}
