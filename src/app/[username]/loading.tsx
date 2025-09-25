import ProfileHeaderSkeleton from "@/components/skeletons/ProfileSkeleton";

export default function LoadingProfile() {
  return <div className="motion-safe:animate-in motion-safe:fade-in-50"><ProfileHeaderSkeleton /></div>;
}


