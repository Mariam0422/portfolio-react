import MainHeader from "../components/mainHeader/MainHeader";

const Home = () => {
  return (
    <>
      <MainHeader />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, ReactJS, Redux, HTML, CSS, GitHub,
                BootStrap, Less, CorelDraw, PS
              </p>
              <a href="/pdf/certificateJS.pdf" download="certificateJS.pdf" className="btn">Download Cetificates</a>
            </li>
          
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
