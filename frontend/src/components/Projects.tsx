import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";
import Section from "./common/Section";
import { projects } from "../data/portfolio";

const fallbackImage = "/fallback-project-bg.svg";

type VideoState = {
  open: boolean;
  type: "self" | "youtube" | null;
  src?: string; // for self-hosted video
  poster?: string;
  embedId?: string; // for youtube/vimeo
};

const Projects: React.FC = () => {
  const [video, setVideo] = React.useState<VideoState>({
    open: false,
    type: null,
  });

  const dialogRef = React.useRef<HTMLDivElement | null>(null);

  // Close on ESC
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setVideo({ open: false, type: null });
    }
    if (video.open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [video.open]);

  // Prevent background scroll when modal open
  React.useEffect(() => {
    if (video.open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [video.open]);

  const openSelfHosted = (src?: string, poster?: string) =>
    setVideo({ open: true, type: "self", src, poster });

  const openYouTube = (id: string) =>
    setVideo({ open: true, type: "youtube", embedId: id });

  const closeModal = () => setVideo({ open: false, type: null });

  return (
    <Section
      id="projects"
      title="Featured Projects"
      className="bg-gray-50 dark:bg-gray-800"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const hasSelfVideo = !!project.videoUrl;
          const hasYouTube = !!project.youtubeUrl;
          const canPlay = hasSelfVideo || hasYouTube;

          const onPlayClick = () => {
            if (hasSelfVideo)
              return openSelfHosted(project.videoUrl, project.videoPoster);
            if (hasYouTube) return openYouTube(project.youtubeUrl!);
          };

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative overflow-hidden group">
                {/* Thumbnail / Poster */}
                <img
                  src={project.imageUrl || project.videoPoster || fallbackImage}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Play button overlay if video is available */}
                {canPlay && (
                  <button
                    onClick={onPlayClick}
                    aria-label={`Play demo video for ${project.title}`}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <span className="inline-flex items-center justify-center rounded-full p-4 bg-white/90 dark:bg-gray-800/90 shadow-lg transition-transform group-hover:scale-110">
                      <Play className="h-6 w-6 text-gray-900 dark:text-white" />
                    </span>
                  </button>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Video Modal */}
      {video.open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Project video"
          ref={dialogRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-20 bg-white/90 dark:bg-gray-800/90 rounded-md px-3 py-1 text-sm"
            >
              Close
            </button>

            {/* Self-hosted video */}
            {video.type === "self" && (
              <video
                key={video.src} // reset playback when reopening
                src={video.src}
                poster={video.poster}
                controls
                playsInline
                preload="metadata"
                className="w-full h-full"
              />
            )}

            {/* YouTube embed */}
            {video.type === "youtube" && (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${video.embedId}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>
        </div>
      )}
    </Section>
  );
};

export default Projects;
