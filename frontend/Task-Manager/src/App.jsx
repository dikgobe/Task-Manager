import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard  from './pages/Admin/Dashboard';
import Login from './pages/Auth/Login'
import UserDashboard from './pages/User/UserDashboard';
import MyTasks from './pages/User/MyTasks';
import ManageUsers from './pages/Admin/ManageUsers';
import ManageTasks from './pages/Admin/ManageTasks';
import CreateTasks from './pages/Admin/CreateTasks';
import ViewTaskDetails from './pages/User/ViewTaskDetails';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/signup" element={<h1>SignUp</h1>} />
          
          {/* Admin Routes */}
          <Route element= {<PrivateRoute allowdRoles={['admin']} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/users" element={<ManageUsers />} />
            <Route path="/admin/tasks" element={<ManageTasks />} />
            <Route path="/admin/create-tasks" element={<CreateTasks />} />
          </Route>

          {/* User Routes */}
          <Route element= {<PrivateRoute allowdRoles={['user']} />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/my-tasks" element={<MyTasks />} />
            <Route path="/user/tasks-details:id" element={<ViewTaskDetails />} />
          </Route>

        </Routes>
      </Router>
    </div>
    
  )
}

export default App