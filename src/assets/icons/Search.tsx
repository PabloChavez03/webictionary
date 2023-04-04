interface Props {
  size?: number
}

const Search = ({ size = 24 }: Props): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-search"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="#A349F2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
      <path d="M21 21l-6 -6"></path>
    </svg>
  )
}

export default Search
