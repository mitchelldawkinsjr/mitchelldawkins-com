import fs from 'fs';
import path from 'path';
import Image from 'next/image';

type MdxImageProps = {
  src?: string;
  alt?: string;
  title?: string;
};

function readPublicSvg(src: string): string | null {
  if (!src.endsWith('.svg') || !src.startsWith('/')) {
    return null;
  }

  const filePath = path.join(process.cwd(), 'public', src);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const svg = fs.readFileSync(filePath, 'utf8').trim();
  if (!svg.startsWith('<svg') && !svg.startsWith('<?xml')) {
    return null;
  }

  return svg;
}

export default function MdxImage({ src, alt = '', title }: MdxImageProps) {
  if (!src) return null;

  if (src.endsWith('.svg')) {
    const svg = readPublicSvg(src);

    if (svg) {
      return (
        <figure className="my-8 overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-slate-900">
          <div
            className="w-full [&_svg]:mx-auto [&_svg]:block [&_svg]:h-auto [&_svg]:max-w-full"
            role="img"
            aria-label={alt}
            title={title}
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        </figure>
      );
    }

    return (
      <p className="my-8 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-300">
        Diagram unavailable: {alt || src}
      </p>
    );
  }

  return (
    <span className="relative my-8 block aspect-[16/9] w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
      <Image src={src} alt={alt} fill style={{ objectFit: 'contain' }} sizes="(max-width: 768px) 100vw, 896px" />
    </span>
  );
}
