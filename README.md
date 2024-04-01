# KUIT3_Web-FrontEnd
개발 동아리 KUIT 3기 Web 과정

## 1주차 결과물 : 간단한 HTML 작성 및 웹사이트
- [\[KUIT 3기 Web\] 1주차 - Web 기본 지식 공부 내용 정리](https://turtle-hwan.tistory.com/5)
- HTML, CSS, JS, Web API, HTML(HyperText Markup Language) 기본구조, metadata, SEO, CSR, SSR, defer, async

## 2주차 결과물 : HTML + CSS
- [미션 결과물-당근마켓 화면1 링크](https://turtle-hwan.github.io/KUIT3_Web-FrontEnd/week2/turtlehwan/daangn_1/index.html)  
<img src="https://github.com/Konkuk-KUIT/KUIT3_Web-FrontEnd/assets/67897841/2960f4e6-2d33-4c9b-bf5d-c46f498feafe" style="width:300px" />

## 3주차 결과물 : JS
- [미션 결과물-todo list update 부분 구현하기](https://turtle-hwan.github.io/KUIT3_Web-FrontEnd/week3/turtlehwan/todo/)
- db.json data 기반으로, json-server 이용한 localhost:8080 에 fetch()를 보내기 때문에 github page 정적 배포로는 화면이 제대로 뜨지 않는다.

<구현 방식>
- update 버튼을 누르면 input element를 새로 만들고, 받아온 original value를 가진 채로 화면에 바꿔서 보여줍니다.
- 내용을 수정한 후, enter key를 누르거나 input element 바깥 화면을 누르면 updateFetch()가 실행되어 db.json에 반영되도록 했습니다.

<발생 문제>
- 수정 버튼을 여러 번 누르면 addEventListener()가 여러 개가 붙는 문제가 발생.
