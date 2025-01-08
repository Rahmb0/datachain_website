export function OptimizedImage({ src, alt, ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      {...props}
      className={`w-full h-auto ${props.className || ''}`}
    />
  );
} 