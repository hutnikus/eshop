import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
	const [product, setProduct] = useState([{}]);
    const { id } = useParams()

	// fetch product by id
	useEffect(() => {
		(async () => {
			const data = await fetch(`/api/product/${id}`).then((res) => res.json());
			setProduct(data);
		})();
	}, []);

	return (
		<div>
			<h1>Detail {product.name}</h1>
			<img src={product.img} alt="" height={150} width={150} />
			<div>{product.price}czk</div>
			<div>{product.description}</div>
		</div>
	);
};

export default Detail;
