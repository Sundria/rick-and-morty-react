export default function CountPages({ count, totalPages }) {
  return (
    <div className="flex justify-center items-center mt-5 text-white">
      <p>
        Page {count} of {totalPages}.
      </p>
    </div>
  );
}
