interface Props {
  children: React.ReactNode;
}
const Wrapper: React.FC<Props> = ({ children }) => {
  return <div className="mx-auto h-full w-full max-w-[1536px]">{children}</div>;
};

export default Wrapper;
