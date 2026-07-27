import { useAuth } from "../context/AuthContext";

const Dashboard = () => {

  const { user } = useAuth();

  return (

    <div className="min-h-screen bg-gray-100">

      <div className="max-w-4xl mx-auto py-16">

        <div className="bg-white rounded-xl shadow-lg p-10">

          <h1 className="text-4xl font-bold mb-8">
            Welcome {user?.name} 👋
          </h1>

          <div className="space-y-4">

            <p>
              <strong>Email:</strong> {user?.email}
            </p>

            <p>
              <strong>Joined:</strong>{" "}
              {new Date(user?.createdAt).toLocaleString()}
            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Dashboard;