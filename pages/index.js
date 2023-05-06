import Link from "next/link";

function index() {
  return (
    <div className="hero">
      <div>
        <h1>Take Notes Easily</h1>
        <p>This note-taking app is built up with Next.JS and MongoDB</p>
        <p>A notes taking project with Authentication.</p>
        <br />
        <br />
        <br />
        <Link href="#" className="button">
          Create an Account
        </Link>
      </div>
    </div>
  );
}

export default index;
