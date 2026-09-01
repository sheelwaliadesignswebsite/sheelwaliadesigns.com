const VIDEOS = [
  { src: "/videos/IMG_8498.MOV", title: "Construction Site Walkthrough" },
  { src: "/videos/Reception%20.MP4", title: "Reception Interior" },
  { src: "/videos/V.MP4", title: "Project Progress" },
  { src: "/videos/VD-1%20(1).MP4", title: "Construction Detail 01" },
  { src: "/videos/VD-1%20(2).MP4", title: "Construction Detail 02" },
  { src: "/videos/VD-1%20(3).MP4", title: "Construction Detail 03" },
  { src: "/videos/VD-1%20(4).MP4", title: "Construction Detail 04" },
  { src: "/videos/VD-1%20(5).MP4", title: "Construction Detail 05" },
  { src: "/videos/VD-1%20(6).MP4", title: "Construction Detail 06" },
  { src: "/videos/VD-1%20(7).MP4", title: "Construction Detail 07" },
  { src: "/videos/VD-1%20(8).MP4", title: "Construction Detail 08" },
  { src: "/videos/VD-2%20(1).mp4", title: "Site Progress 01" },
  { src: "/videos/VD-2%20(2).mp4", title: "Site Progress 02" },
  { src: "/videos/VD-2%20(3).mp4", title: "Site Progress 03" },
];

export default function ConstructionVideos() {
  return (
    <section id="construction" className="max-w-6xl mx-auto px-6 md:px-10 py-20">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-[var(--rule)] pb-6 mb-10">
        <div>
        <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--muted)] mb-3">
          Behind the Design
        </p>
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-charcoal">
          Construction Projects
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mt-4">
          Follow each space from the first stage of construction to its finished details.
        </p>
        </div>
        <span className="mt-5 md:mt-0 text-[11px] uppercase tracking-[0.3em] text-[var(--muted)]">14 project films</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
        {VIDEOS.map((video) => (
          <article
            key={video.src}
            className="overflow-hidden border-b border-[var(--rule)] pb-4"
          >
            <video
              className="aspect-[9/16] w-full bg-charcoal object-contain"
              controls
              preload="metadata"
              playsInline
            >
              <source src={video.src} />
              Your browser does not support video playback.
            </video>
            <h3 className="pt-4 text-[13px] font-medium tracking-tight text-charcoal">
              {video.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}