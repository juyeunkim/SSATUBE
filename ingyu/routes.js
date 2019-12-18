//글로벌
//어디서든 여기 url을 불러다 쓴다. 

const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

//videos가 아니라 home 그리고 search 
const SEARCH = "/search";


//Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
///users/1


//Videos
const VIDEOS ="/videos";
const UPLOAD ="/upload";
const VIDEO_DETAIL ="/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO ="/:id/delete"; //:id는 값이 변하는것으로 알아차린다. express가 

//

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: USER_DETAIL,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: VIDEO_DETAIL,
    editVideo: EDIT_VIDEO,
    deleteVideo: DELETE_VIDEO
};
export default routes;