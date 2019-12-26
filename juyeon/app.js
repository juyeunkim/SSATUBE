import express from "express"; // 최신식의 JS 코드
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";


const app = express();

app.use(helmet());
app.set("view engine", "pug"); // application 설정
app.use(cookieParser());
app.use(bodyParser.json()); // form으로 데이터를 주고받을때 -- 데이터를 출력
app.use(bodyParser.urlencoded({ extended: true })); // html파일
app.use(morgan("dev")); // log 설정 (개발)

app.use(localsMiddleware); // 모든 router 설정

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
