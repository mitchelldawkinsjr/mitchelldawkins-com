import Image from 'next/image';

type MdxImageProps = {
  src?: string;
  alt?: string;
  title?: string;
};

export default function MdxImage({ src, alt = '', title }: MdxImageProps) {
  if (!src) return null;

  if (src.endsWith('.svg')) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        title={title}
        className="my-8 w-full rounded-lg border border-gray-200 dark:border-gray-700"
      />
    );
  }

  return (
    <span className="relative my-8 block aspect-[16/9] w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
      <Image src={src} alt={alt} fill style={{ objectFit: 'contain' }} sizes="(max-width: 768px) 100vw, 896px" />
    </span>
  );
}
