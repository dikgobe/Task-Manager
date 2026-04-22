import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

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
          </Route>

          {/* User Routes */}
          <Route element= {<PrivateRoute allowdRoles={['user']} />}>
            <Route path="/user/dashboard" element={<Dashboard />} />
            <Route path="/user/my-tasks" element={<MyTasks />} />
          </Route>

        </Routes>
      </Router>
    </div>
    
  )
}

export default App