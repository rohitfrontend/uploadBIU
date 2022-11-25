import React from 'react'
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const ViewUpload = React.lazy(() => import('./views/dashboard/ViewUpload'))
const ViewSetting = React.lazy(() => import('./views/dashboard/ViewSetting'))
const AddSetting = React.lazy(() => import('./views/dashboard/AddSetting'))
const EditSetting = React.lazy(() => import('./views/dashboard/EditSetting'))

const Social = React.lazy(() => import('./views/dashboard/Social'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/view-upload', name: 'View Upload', element: ViewUpload },
  { path: '/view-setting', name: 'View Setting', element: ViewSetting },
  { path: '/view-social', name: 'View Social', element: Social },
  { path: '/add-setting', name: 'Add Setting', element: AddSetting },
  { path: '/edit-setting/:client_id', name: 'Edit Setting', element: EditSetting },

]

export default routes
