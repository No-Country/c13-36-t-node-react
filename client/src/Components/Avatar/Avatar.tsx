interface AvatarProps {
  size: "small" | "medium" | "large";
  src?: string;
}

const Avatar: React.FC<AvatarProps> = ({ size, src }) => {
  const sizes: Record<string, string> = {
    small: "w-[50px] h-[50px] bg-[#D9D9D9] rounded-full",
    medium: "w-[80px] h-[80px] bg-[#D9D9D9]rounded-full",
    large: "w-[150px] h-[150px] bg-[#D9D9D9]rounded-full",
  };

  return (
    <div className={sizes[size as string]}>
      <img
        className="rounded-full w-full h-full"
        src={src || "https://picsum.photos/200/300"}
        alt="Avatar"
      />
    </div>
  );
};

export default Avatar;
