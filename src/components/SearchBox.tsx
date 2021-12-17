import { ChangeEvent, VFC } from 'react';

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox: VFC<Props> = ({ onChange }) => {
  return (
    <form className="flex space-x-2">
      <input
        className="border border-gray-300 rounded-md py-2 px-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-[#1a9c48]"
        placeholder="Search Track"
        onChange={onChange}
      />
    </form>
  );
};

export default SearchBox;
