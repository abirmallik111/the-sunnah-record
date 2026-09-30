import { STORIES } from "@/data/stories";
import { notFound } from "next/navigation";
import StoryReaderClient from "./StoryReaderClient";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return STORIES.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = STORIES.find((s) => s.slug === slug);

  if (!story) {
    return {
      title: "Story Not Found — The Sunnah Record",
    };
  }

  return {
    title: `${story.title} — The Sunnah Record`,
    description: story.excerpt,
  };
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = STORIES.find((s) => s.slug === slug);

  if (!story) {
    notFound();
  }

  return (
    <main className="w-full bg-[#FCF9F8] min-h-screen">
      <StoryReaderClient story={story} allStories={STORIES} />
    </main>
  );
}
