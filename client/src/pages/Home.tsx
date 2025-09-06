import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="grid place-items-center py-24">
      <div className="text-center">
        <h1 className="mb-4 text-5xl font-black leading-tight">
          Organize work with <span className="text-brand">SystematicStyle</span> ✨
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-neutral-300">
          Create, prioritize, and complete tasks faster with a powerful task manager.
        </p>
        <Link to="/register" className="btn btn-primary">Get Started</Link>
      </div>
    </div>
  );
}