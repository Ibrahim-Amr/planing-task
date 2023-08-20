const SectionHeader = ({ label }: { label: string }) => {
  return (
    <div className="mb-5">
      <h2 className="text-center text-fluid-1 font-bold">{label}</h2>
    </div>
  );
};

export default SectionHeader;
