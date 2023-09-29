function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={"bg-neutral-800 animate-pulse " + className}
      {...props}
    ></div>
  );
}

export default Skeleton;
