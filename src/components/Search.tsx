type SearchProps = {
  value: string;
  onChange: (value: string) => void;
};

// Search стал "управляемым" компонентом: он больше не хранит текст
// внутри себя, а только показывает то, что передано в value,
// и сообщает наружу о каждом изменении через onChange.
// Благодаря этому один и тот же компонент можно использовать
// и в MenuList, и в StopList — у каждого будет свой независимый поиск.
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