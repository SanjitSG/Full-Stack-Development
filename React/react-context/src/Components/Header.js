import { CartState } from "../Context/Context";
const {
  state: { cart },
  dispatch,
  productDispatch,
} = CartState();

const Header = () => {
  return (
    <div>
      <h2>Header Component</h2>
    </div>
  );
};

export default Header;
