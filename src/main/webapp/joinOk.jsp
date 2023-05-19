<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원 가입 정보</title>
</head>
<body>
	<%
		request.setCharacterEncoding("utf-8");//request 객체안의 모든 문자정보를 utf-8로 인코딩
	
		String id = request.getParameter("id");//아이디
		String pw = request.getParameter("pw");//비밀번호
		String name = request.getParameter("name");//이름
		String phone = request.getParameter("phone");//전화번호
		String email = request.getParameter("email");//이메일
	%>
	<h2>[<%= name %>]님 회원 가입 정보</h2>
	<hr>
	가입하신 아이디 : [<%= id %>] <br><br>
	입력 비밀번호 : [<%= pw %>] <br><br>
	회원 연락처 : [<%= phone %>] <br><br>
	가입하신 이메일 : [<%= email %>] <br><br>
</body>
</html>