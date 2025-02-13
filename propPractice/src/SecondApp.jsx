function Card({ name, paragraph }) {
	return (
		<div className="card">
			<div className="card-content">
				<h1>{name}</h1>
				<p> {paragraph}</p>
			</div>
		</div>
	);
}

export default function SecondApp() {
	return (
		<div>
			<div className="card">
				<div className="card-content">
					<h1>Photo</h1>
					<img
						className="avatar"
						src="https://i.imgur.com/OKS67lhm.jpg"
						alt="Aklilu Lemma"
						width={70}
						height={70}
					/>
				</div>
			</div>
			<Card
				name="Aklilu Lemma"
				paragraph="Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis."
			/>
		</div>
	);
}
