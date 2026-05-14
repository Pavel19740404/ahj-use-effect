import React, { useState, useEffect } from 'react';
 
const BASE_URL = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data';
 
function Details({ info }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    if (!info) return;
 
    let cancelled = false;
    setLoading(true);
    setDetails(null);
 
    fetch(`${BASE_URL}/${info.id}.json`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) {
          setDetails(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });
 
    return () => { cancelled = true; };
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
 
  const avatar = details.avatar;
  const name = details.name || info.name;
  const city = details.details?.city || '';
  const company = details.details?.company || '';
  const position = details.details?.position || '';
 
  return (
    <div className="details">
      {avatar && (
        <img
          className="details-avatar"
          src={avatar}
          alt={name}
        />
      )}
      <div className="details-name">{name}</div>
      <div className="details-row">City: {city || '—'}</div>
      <div className="details-row">Company: {company || '—'}</div>
      <div className="details-row">Position: {position || '—'}</div>
    </div>
  );
}
 
export default Details;