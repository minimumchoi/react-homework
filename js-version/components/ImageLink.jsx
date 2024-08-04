import { string } from "prop-types";
function ImageLink({ src, name }) {
  return (
    <a href="/">
      <img src={src} alt={name} className="cart__accordion__img" />
      <label htmlFor="cartAddedSelect" className="cart__accordion__name">
        {name}
      </label>
    </a>
  );
}

ImageLink.propTypes = {
  src: string.isRequired,
  name: string.isRequired,
};

export default ImageLink;
