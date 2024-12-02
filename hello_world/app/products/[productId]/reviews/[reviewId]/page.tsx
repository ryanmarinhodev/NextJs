interface infoParams {
  params: {
    productId: number;
    reviewId: number;
  };
}

export default function Review({ params }: infoParams) {
  return (
    <div>
      <p>Produto {params.productId}</p>
      <p>Review do produto {params.reviewId}</p>
    </div>
  );
}
