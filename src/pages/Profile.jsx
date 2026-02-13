import MainLayout from "../layout/MainLayout";

function Profile() {
  return (
    <MainLayout>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <a
        href="/login"
        className="inline-block mt-4 bg-blue-500 text-white px-5 py-3 rounded-lg"
        >
        View HRM Demo
        </a>
        <div>
        <img
          src="https://avatars.githubusercontent.com/u/50250456?v=4"
          alt="Profile"
          className="w-40 h-40 rounded-full mb-6"
        />
        </div>


        <div className="bg-white p-6 rounded-xl shadow space-y-4">
          <p>
            Hello, my name is <b>Nguyen Huynh Bao Dan</b>. I am an Information Technology student specializing in Software Application Development.
          </p>

          <p>
            I have experience building frontend web applications using ReactJS. 
            My main focus is creating responsive UI, implementing authentication flow, 
            and managing application state.
          </p>

          <p>
            
            I am currently seeking a Frontend Developer Internship position 
            and eager to learn and contribute to a real development team.
          </p>

          <h2 className="text-2xl font-semibold mt-4">Skills</h2>
          <ul className="list-disc ml-6">
            <li>ReactJS</li>
            <li>JavaScript (ES6)</li>
            <li>HTML, CSS, TailwindCSS</li>
            <li>Git & GitHub</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-4">Contact</h2>
          <p>Email: baodan.nghuynh@gmail.com</p>
          <p>GitHub: https://github.com/baodannghuynh-sketch/hrm-frontend-react.git</p>
        </div>
    </div>
        <p className="text-sm text-gray-500">
        Demo account: admin@gmail.com / 123456
        </p>

      
    </MainLayout>
  );
}

export default Profile;
