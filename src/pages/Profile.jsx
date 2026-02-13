import MainLayout from "../layout/MainLayout";

function Profile() {
  return (
    <MainLayout>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>

        <div className="bg-white p-6 rounded-xl shadow space-y-4">
          <p>
            Hello, my name is <b>Nguyen Huynh Bao Dan</b>. I am an Information
            Technology student majoring in Software Application.
          </p>

          <p>
            I am focusing on Frontend Development using ReactJS and currently
            looking for a Frontend Developer Internship position.
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
    </MainLayout>
  );
}

export default Profile;
