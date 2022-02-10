import { Navigate, Route, Routes } from 'react-router-dom';
import Manage from '../../Manage/Manage';
import './RouteWrapper.scss'

const PageWrapper = () => {
    return (
        <div className="route-wrapper">
            <Routes>
                <Route path="/" element={<Navigate replace to="/dashboard" />} />
                <Route path="/dashboard" element={<h1>Dashboard</h1>} />
                <Route path="/community" element={<h1>Community</h1>} />
                <Route path="/manage/*" element={<Manage />}></Route>
                <Route path="*" element={<h1>Not found</h1>} />
            </Routes>
        </div>
    )
}
export default PageWrapper;