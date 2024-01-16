import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const Rating = ({ rating }) => {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          <AiFillStar fontSize="15px" />
        </span>
      ))}
    </>
  );
};

export default Rating;
