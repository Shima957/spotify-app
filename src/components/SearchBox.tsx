import { useSession } from 'next-auth/react';
import { ChangeEvent, VFC } from 'react';

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox: VFC<Props> = ({ onChange }) => {
  const { data: session } = useSession();

  return (
    <form className="flex space-x-2">
      <input
        className={`border border-gray-300 rounded-md py-2 px-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-[#1a9c48] transition duration-200 ${
          !session && 'disabled:cursor-not-allowed'
        }`}
        placeholder="Search Track"
        disabled={!session}
        onChange={onChange}
      />
    </form>
  );
};

export default SearchBox;
