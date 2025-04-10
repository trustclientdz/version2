import { useState } from 'react';

export default function Home() {
  const [phone, setPhone] = useState('');
  const [result, setResult] = useState(null);

  const handleVerify = async () => {
    const res = await fetch(`/api/verify?phone=${phone}`);
    const data = await res.json();
    setResult(data);
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: 20 }}>
      <h1>TrustClient DZ - Vérification Client</h1>
      <input
        type="text"
        placeholder="Entrez un numéro"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleVerify}>Vérifier</button>
      {result && (
        <div style={{ marginTop: 20 }}>
          <h3>Statut : <span style={{ color: result.status }}>{result.status.toUpperCase()}</span></h3>
          <p>Nombre de signalements : {result.count}</p>
        </div>
      )}
    </div>
  );
}
