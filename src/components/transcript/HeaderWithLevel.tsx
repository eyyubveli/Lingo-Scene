type Header = {
  name: string;
  level: string;
};

const HeaderWithLevel = ({ name, level }: Header) => {
  return (
    <div className="flex justify-between">
      <p className="text-primary text-2xl font-bold ">{name}</p>
      <p className="font-medium text-lg">{level}</p>
    </div>
  );
};

export default HeaderWithLevel;
