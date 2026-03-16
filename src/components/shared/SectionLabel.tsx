interface SectionLabelProps {
  children: React.ReactNode;
}

const SectionLabel = ({ children }: SectionLabelProps) => (
  <span className="text-sky text-xs font-semibold tracking-widest uppercase font-body">
    {children}
  </span>
);

export default SectionLabel;
