import './App.css';
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import { AdminTemplate } from './templates/AdminTemplate/AdminTemplate';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate';
import Checkout from './pages/Checkout/Checkout';
import Loading from './components/Loading/Loading';
import Profiles from './pages/Profiles/Profiles';
import Films from './pages/Admin/Films/Films';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Showtime from './pages/Admin/Showtime/Showtime';
import AddFilm from './pages/Admin/Films/AddFilm/AddFilm';
import EditFilm from './pages/Admin/Films/EditFilm/EditFilm';
import User from './pages/Admin/User/User';
import AddUser from './pages/Admin/User/AddUser/AddUser';
import EditUser from './pages/Admin/User/EditUser/EditUser';
import Booked from './pages/Admin/User/Booked/Booked';



// import { Suspense, lazy } from 'react';
export const history = createBrowserHistory();


function App() {
  return (

    <Router history={history}>
      <Loading />
      <Switch>
        {/* Home */}
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />
        <HomeTemplate path="/profile" exact Component={Profiles}/>
        {/* User */}
        <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />
        <UserTemplate path="/login" exact Component={Login} />
        <UserTemplate path="/register" exact Component={Register} />
        {/* Admin user*/}
        <AdminTemplate path="/admin" exact Component={Dashboard}></AdminTemplate>
        <AdminTemplate path="/admin/user" exact Component={User}></AdminTemplate>
        <AdminTemplate path="/admin/user/adduser" exact Component={AddUser}></AdminTemplate>
        <AdminTemplate path="/admin/user/edituser/:id" exact Component={EditUser}></AdminTemplate>
        <AdminTemplate path="/admin/user/booked/:taiKhoan" exact Component={Booked}></AdminTemplate>

        {/* Adim Phim */}
        <AdminTemplate path="/admin/films" exact Component={Films}></AdminTemplate>
        <AdminTemplate path="/admin/films/addfilm" exact Component={AddFilm}></AdminTemplate>
        <AdminTemplate path="/admin/films/editfilm/:id" exact Component={EditFilm}></AdminTemplate>
        <AdminTemplate path="/admin/films/showtime/:id/:tenphim" exact Component={Showtime}></AdminTemplate>

        <HomeTemplate path="/" exact Component={Home} />

      </Switch>

    </Router>
  );
}

export default App;
