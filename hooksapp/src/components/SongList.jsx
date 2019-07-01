import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'almost home', id: uuid() },
    { title: 'memory gospel', id: uuid() },
    { title: 'this wild darkness', id: uuid() },
  ]);
  const [age, setAge] = useState(20);
  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid() }]);
  };

  useEffect(() => {
    console.log('useEffect hook ran', songs);
  }, [songs]);

  useEffect(() => {
    console.log('useEffect hook ran', age);
  }, [age]);

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => <li key={song.id}>{song.title}</li>)}
      </ul>
      <NewSongForm addSong={addSong} />
      <button type="button" onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
};

export default SongList;
