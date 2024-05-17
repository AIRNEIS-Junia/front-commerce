jest.mock("next/image", () => ({
  __esModule: true,
  // Définissez une fonction de remplacement pour next/image
  default: ({ src, alt, fill, ...props }) => {
    // Créez une balise img
    return (
      <img
        src={src}
        alt={alt}
        {...props}
        style={{ objectFit: fill ? "cover" : "contain" }}
      />
    );
  },
}));
