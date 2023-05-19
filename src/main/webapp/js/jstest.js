/**
 * 
 */

 function loginCheck() {
	if(document.loginForm.memberId.value.length == 0) {
		alert('아이디는 필수 입력사항입니다. 다시 확인해주세요.');
		return false;
	}
	
	if(document.loginForm.memberPw.value.length == 0) {
		alert('비밀번호는 필수 입력사항입니다. 다시 확인해주세요.');
		return false;
	}
	
	return true;
	
	
}