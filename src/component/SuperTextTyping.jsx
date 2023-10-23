import useTextTyped from "../hooks/useSuperTyped";

const superpowers = ["Web developer", "UI/UX designer", "Product manager"];

const SuperTextTying = () => {
  const {typedSuperpower} = useTextTyped(superpowers);

  return ( 
    <div className="flex justify-center typing-box">
      <h1 className="typing">
        <span
          className="cursor"
        >
          {typedSuperpower}
        </span>
      </h1>
    </div>
  );
};

export default SuperTextTying;
