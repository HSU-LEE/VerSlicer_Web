export default function ScreenFrame({ src, alt, className = "" }) {
  return (
    <div className={`screen-frame${className ? ` ${className}` : ""}`}>
      <div className="screen-frame__bar">
        <span />
        <span />
        <span />
      </div>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}
