import { PageTitles, BlogPosts } from "@/components/index";

export default function Tips(params) {
  return (
    <div>
      <PageTitles
        title="./Tips  &amp; Tricks"
        description="Please find the blog and write up"
      />
      <div className="bg-slate-50 pt-8">
        <BlogPosts />
      </div>
    </div>
  );
}
