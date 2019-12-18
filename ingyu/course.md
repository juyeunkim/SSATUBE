#2.9
mvc 에 대해 알아보자. 
model은 데이터다. 
view는 데이터가 어떻게 생겼냐
controller는 데이터를 보여주는 함수다. / 데이터를 찾는 함수 
=MVC
패턴같은거다.
구조 같은 것이다.
URL과 함수를 분리한다. 
URL에 해당하는 함수
실행하는 함수 Controller 
view는 template 이다. 
분리 시켜야 한다. 
이번 파일에서 userRouter와 videoRouter는 
/user/me
2개의 router를 가질거야 
글로벌 router도 있다. 
globalRouter = controller 
controller는 video controller 와 user controller를 포함시킨다. 
나머지는 url 이다. 

#2.10
:id는 값이 변하는것으로 알아차린다. express가 
어떤 사람이 로그아웃 하려고 할때 
home redirect 하려고하면 
home url 쓴다. 
/user /id /edit profile 
대신 하나로 통합관리할 수 있다. 

#2.11
