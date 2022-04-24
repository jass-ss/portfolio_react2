import axios from 'axios';

const youtube_key = 'AIzaSyCK9lW6syZHNw0hLhSpWzUcjnQzmoebEQM';
const playListId = 'PLgRXT2p63sR2XX3SUYVo57tpYJxmNIhm-';
const num = 13;
const youtube_url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${youtube_key}&playlistId=${playListId}&maxResults=${num}`;

const key = 'e565f81533120f8f890f47cdeb951ff4';
const user = '195295333@N07';
const method = 'flickr.people.getPhotos';
const page = 20;
const url = `https://www.flickr.com/services/rest/?method=${method}&api_key=${key}&per_page=${page}&format=json&nojsoncallback=1&user_id=${user}`;

export const getYoutube = async () => {
	const res = axios.get(youtube_url);
	const data = await res;
	console.log(data);
	console.log(data.data.items);
	return data;
};
