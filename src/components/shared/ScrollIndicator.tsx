const ScrollIndicator = () => (
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
    <span className="text-primary-foreground/40 text-xs uppercase tracking-widest font-body">
      Scroll
    </span>
    <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-scroll-line origin-top" />
  </div>
);

export default ScrollIndicator;
