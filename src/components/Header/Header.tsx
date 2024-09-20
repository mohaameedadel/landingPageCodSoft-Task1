import style from "./header.module.css";

const { header } = style;
export default function Header({ text }: { text: string }) {
  return (
    <>
      <h2
        className={`text-center text-5xl font-bold text-h ${header} mx-auto uppercase my-6`}
      >
        {text}
      </h2>
    </>
  );
}
