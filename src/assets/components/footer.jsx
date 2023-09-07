import { useCart } from "../../hooks/useCart";

function Footer() {
  const { cart } = useCart();
  return (
    <>
      <footer className=" w-full relative bottom-0 h-16 bg-white">
        {JSON.stringify(cart, null, 2)}
      </footer>
    </>
  );
}

export default Footer;
