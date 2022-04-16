import MainCententLayout from "Blog_page/MainCententLayout";

function About() {
  return (
    <MainCententLayout>
      <div className="shadow-lg shadow-purple-400">
        <div className="flex py-6">
          <img
            src={`${process.env.PUBLIC_URL}/image/profile.jpeg`}
            alt="profile"
            className="w-60 rounded-full m-4"
          />
          <div className="flex flex-col grow py-12">
            <h3 className="text-3xl font-semibold py-3 flex justify-center">
              Cheng Ximen
            </h3>
            <ul className="flex justify-around py-10 px-3">
              <li>
                <i class="fa-solid fa-location-dot" /> Vancouver, BC
              </li>
              <li>
                <a href="https://www.linkedin.com/in/cheng-ximen/">
                  <i class="fa-brands fa-linkedin" /> Linkedin Profile
                </a>
              </li>
              <li>
                <i class="fa-solid fa-envelope" /> ximen100@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <p className="px-12 pb-12">
          I come from a finance background. Through the years doing analytical
          work, I grew a strong interest in leveraging technology to build
          something cool and also the great amount of fun in the problem solving
          process itself!
          <br />
          <br />
          I'm currently working as a financial analyst at ACC360, mainly
          covering the merchandising side data analysis. I use python, SQL and
          VBA for the ETL and modeling process; DAX and PowerBI for
          visualization.
        </p>
      </div>
      <div className="my-10 shadow-lg shadow-purple-400">
        <h3 className="text-3xl font-semibold p-8 ">About This Site</h3>
        <p className="px-12 pb-12">
          I've been learning web development stack for a while. As internet has
          been a pretty major channel of how we exchange information nowadays,
          I'd love to get to the bottom of how it works and also it's been a
          nice getaway for me to just get immersed in coding and problem
          solving, which make me feel like
          <img
            src={`${process.env.PUBLIC_URL}/image/icon-home.png`}
            className="inline"
          />
          <br />
          <br />
          This site is just a fun project for me to put what I've learned to use
          and showcase my work. It's done in React and formatted with Tailwind
          css. The blog section is some of the data science projects I did when
          I first landed in Vancouver, settling down and job searching.
          Hopefully I can add some fun web app to the site later on.
        </p>
      </div>
    </MainCententLayout>
  );
}

export default About;
