import React from 'react';

const techColors = {
  "Python": { bg: "bg-blue-100", text: "text-blue-800" },
  "React": { bg: "bg-cyan-100", text: "text-cyan-800" },
  "Flask": { bg: "bg-gray-100", text: "text-gray-800" },
  "Docker": { bg: "bg-blue-100", text: "text-blue-800" },
  "AWS": { bg: "bg-orange-100", text: "text-orange-800" },
  "PostgreSQL": { bg: "bg-indigo-100", text: "text-indigo-800" },
  "S3": { bg: "bg-yellow-100", text: "text-yellow-800" },
  "EC2": { bg: "bg-red-100", text: "text-red-800" },
  "FFmpeg": { bg: "bg-green-100", text: "text-green-800" },
  "Whisper API": { bg: "bg-purple-100", text: "text-purple-800" },
  "Hugging Face": { bg: "bg-yellow-100", text: "text-yellow-800" },
  "Transformers": { bg: "bg-pink-100", text: "text-pink-800" },
  "RAG": { bg: "bg-emerald-100", text: "text-emerald-800" },
  // Default color for technologies not explicitly defined
  "default": { bg: "bg-gray-100", text: "text-gray-800" }
};

export default function ProjectTechBadge({ name }) {
  const { bg, text } = techColors[name] || techColors.default;
  
  return (
    <span className={`px-3 py-1 ${bg} ${text} text-sm rounded-full`}>
      {name}
    </span>
  );
}