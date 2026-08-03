import type { LucideIcon } from "lucide-react";

type BlogPostProps = { icon: LucideIcon; title: string; description: string; meta: string };

export function BlogPost({ icon: Icon, title, description, meta }: BlogPostProps) {
  return (
    <div className="post">
      <b>
        <Icon aria-hidden="true" />
      </b>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <small>{meta}</small>
      </div>
    </div>
  );
}
