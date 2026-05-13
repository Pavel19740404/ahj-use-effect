import React, { useState, useEffect } from 'react';
 
const BASE_URL = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data';
 
function Details({ info }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    if (!info) return;
 
    setLoading(true);
    setDetails(null);
 
    fetch(`${BASE_URL}/${info.id}.json`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [info?.id]);
 
  if (!info) return null;
 
  if (loading) {
    return (
      <div className="details">
        <div className="details-loading">Загрузка...</div>
      </div>
    );
  }
 
  if (!details) return null;
 
  return (
    <div className="details">
      {details.avatar && (
        <img
          key={info.id}
          className="details-avatar"
          src={details.avatar}
          alt={details.name}
        />
      )}
      <div className="details-name">{details.name}</div>
      <div className="details-row">City: {details.city}</div>
      <div className="details-row">Company: {details.company}</div>
      <div className="details-row">Position: {details.position}</div>
    </div>
  );
}
 
export default Details;