export default function getImage(imageId, size = "s") {
	return "https://i.imgur.com/" + imageId + size + ".jpg";
}
