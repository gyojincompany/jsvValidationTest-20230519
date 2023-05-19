<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script type="text/javascript" src="js/jstest.js"></script>
<!-- 
<script type="text/javascript">
	function loginCheck() {
		alert('로그인 입력창을 다시한번 확인해 주세요!');
	}
	 -->
</script>

<title>Insert title here</title>
</head>
<body>
	<!-- 
	<script type="text/javascript">
		alert('경고창 연습');
	</script>
	 -->
	
	<form action="loginOk.jsp" name="loginForm" onsubmit="return loginCheck()" method="post">
		아이디 : <input type="text" name="memberId"><br><br>
		비밀번호 : <input type="password" name="memberPw"><br><br>
		<input type="submit" value="로그인">
	</form>
</body>
</html>