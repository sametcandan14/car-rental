type TSearchButtonProps = {
  styling: string;
};

const SearchButton = ({ styling }: TSearchButtonProps) => {
  return (
    <button className={`ml-3 z-10 ${styling}`}>
      <img src="/magnifying-glass.svg" width={40} height={40} />
    </button>
  );
};

export default SearchButton;
