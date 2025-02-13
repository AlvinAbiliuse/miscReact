import { getImageUrl } from "./utils.jsx";

function Avatar({
	name,
	imgId,
	width,
	height,
	alt,
	profession,
	awards,
	awardsN,
	discovered,
}) {
	return (
		<section className="profile">
			<h2>{name}</h2>
			<img
				className="avatar"
				src={getImageUrl(imgId)}
				alt={alt}
				width={width}
				height={height}
			/>
			<ul>
				<li>
					<b>Profession: </b>
					{profession}
				</li>
				<li>
					<b>Awards: {awardsN} </b> {awards}
				</li>
				<li>
					<b>Discovered: </b> {discovered}
				</li>
			</ul>
		</section>
	);
}

export default function Gallery() {
	return (
		<div>
			<h1>Notable Scientists</h1>

			<Avatar
				name="Maria Skłodowska-Curie"
				imgId="szV5sdG"
				alt="Maria Skłodowska-Curie"
				width="70"
				height="70"
				profession="physicist and chemist"
				awards=" (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
				awardsN="4"
				discovered="polonium (chemical element)"
			/>

			<Avatar
				name="Katsuko Saruhashi"
				imgId="YfeOqp2"
				alt="Katsuko Saruhashi"
				width="70"
				height="70"
				awards="(Miyake Prize for geochemistry, Tanaka Prize)"
				awardsN="2"
				discovered="a method for measuring carbon dioxide in seawater"
			/>
		</div>
	);
}
