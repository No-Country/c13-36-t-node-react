interface AvatarProps {
  size: "small" | "medium" | "large";
  src?: string;
  onClick?: () => void;
  onOver?: () => void;
  hover?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  size,
  src,
  onClick,
  hover,
  onOver,
}) => {
  const sizes: Record<string, string> = {
    small: "w-[50px] h-[50px] bg-[#D9D9D9]rounded-full",
    medium: "w-[80px] h-[80px] bg-[#D9D9D9]rounded-full",
    large: "w-[150px] h-[150px] bg-[#D9D9D9]rounded-full",
  };

  return (
    <div
      className={
        hover
          ? `transition hover:scale-105 ${sizes[size as string]}`
          : sizes[size as string]
      }
    >
      <img
        className="rounded-full w-full h-full cursor-pointer object-cover"
        src={src || "https://picsum.photos/200/300"}
        alt="Avatar"
        onClick={onClick}
        onMouseEnter={onOver}
      />
    </div>
  );
};

export default Avatar;
