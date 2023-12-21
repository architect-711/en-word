import Routes from "../interface/Routes";

const routes: Routes = {
    main: [
        {id: 1, name: "home", path: "/"},
        {id: 2, name: "create", path: "/create"},
        {id: 3, name: "find", path: "/find"},
        {id: 4, name: "test", path: "/test"}
    ],
    login: [
        {id: 1, name: "registration", path: '/registration'},
        {id: 2, name: "log in", path: "/login"}
    ],
};

export default routes;
