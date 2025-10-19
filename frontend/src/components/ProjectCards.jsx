import dashboard from "../Assets/images/Dashboard.png";
import Vmanage from "../Assets/images/V-Manage.png";

export default function ProjectCard({ project }) {
  return (
    <div className="grid grid-flow-row gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="card bg-gradient-to-br from-blue-50 to-blue-100 shadow-xl border-l-4 border-blue-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
        <figure>
          <img
            src={dashboard}
            alt="DashBoard"
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-blue-700">Dashboard</h2>
          <p className="text-blue-600">
            In this website we have made Project Management Dashboard with User
            Authentication so that it will be secured Tech Stack is MongoDb ,
            VUE ReactJS , ExpressJS , NodeJS and New Updates will be coming soon
            for this dashboard
          </p>
          <div className="card-actions justify-end">
            <a
              href="https://dashboard-089u.onrender.com"
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
            >
              Visit
            </a>
          </div>
        </div>
      </div>
      <div className="card bg-gradient-to-br from-green-50 to-green-100 shadow-xl border-l-4 border-green-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
        <figure>
          <img
            src={Vmanage}
            alt="Project 2"
            className="w-full h-48 object-cover bg-gray-200"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-green-700">V-Manage Events</h2>
          <p className="text-green-600">
            This website was made for a event management company they are runnig
            their business very well through our built website <br /> They liked
            it more and the customers are visting the website and booking the
            events <br /> we built the website based on their requirements.
          </p>
          <div className="card-actions justify-end">
            <a
              href="https://v-manage-your-events.netlify.app/"
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
            >
              Visit
            </a>
          </div>
        </div>
      </div>
      <div className="card bg-gradient-to-br from-purple-50 to-purple-100 shadow-xl border-l-4 border-purple-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
        <figure>
          <img
            src=""
            alt="Project 3"
            className="w-full h-48 object-cover bg-gray-200"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-purple-700">Loading....</h2>
          <p className="text-purple-600">Loading...</p>
          <div className="card-actions justify-end">
            <a
              href=""
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
            >
              Visit
            </a>
          </div>
        </div>
      </div>
      <div className="card bg-gradient-to-br from-orange-50 to-orange-100 shadow-xl border-l-4 border-orange-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
        <figure>
          <img
            src=""
            alt="Project 4"
            className="w-full h-48 object-cover bg-gray-200"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-orange-700">Loading.....</h2>
          <p className="text-orange-600">Loading.....</p>
          <div className="card-actions justify-end">
            <a
              href=""
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
