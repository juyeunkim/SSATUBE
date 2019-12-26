import routes from "./routes";

// Controller에 있는 정보를 모든 Template에 추가
export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WebTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    };
    next(); // 다음 router로 넘어간다
    // app.js -- localsMiddleware -- router
}
