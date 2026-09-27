type SearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function Search({ value, onChange }: SearchProps) {
  return (
    <div className="search">
      <input
        placeholder="Поиск..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}