import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>My Panel</h2>

        <ul>
          <li>🏠 Home</li>
          <li>📊 Analytics</li>
          <li>🛒 Products</li>
          <li>⚙️ Settings</li>
        </ul>

        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="main">

        {/* Topbar */}
        <div className="topbar">
          <h3>Dashboard</h3>
          <p>Welcome, {user?.email}</p>
        </div>

        {/* Cards */}
        <div className="cards">
          <div className="card">📦 Orders</div>
          <div className="card">💰 Revenue</div>
          <div className="card">👥 Users</div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;