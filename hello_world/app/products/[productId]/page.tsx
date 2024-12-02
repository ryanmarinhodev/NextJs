interface TypeInfo {
  params: {
    productId: number;
  };
}

export default function Info({ params }: TypeInfo) {
  return (
    <div>
      <p>Informações do produto {params.productId}</p>
    </div>
  );
}
