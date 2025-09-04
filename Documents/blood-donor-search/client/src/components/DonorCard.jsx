export default function DonorCard({ donor }) {
  return (
    <div className="card">
      <strong>{donor.name}</strong>
      <div>City: {donor.city}</div>
      <div>Gender: {donor.gender}</div>
      <div>Blood Group: {donor.bloodGroup}</div>
      <div>Mobile: {donor.mobile}</div>
      {/* Sensitive data like Aadhaar and password are never sent by API */}
    </div>
  );
}
