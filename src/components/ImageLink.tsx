interface ImageLink {
  src: string;
  name: string;
}

function ImageLink({ src, name }: ImageLink) {
  return (
    <a href="/">
      <img src={src} alt={name} className="cart__accordion__img" />
      <label htmlFor="cartAddedSelect" className="cart__accordion__name">
        {name}
      </label>
    </a>
  );
}

export default ImageLink;
